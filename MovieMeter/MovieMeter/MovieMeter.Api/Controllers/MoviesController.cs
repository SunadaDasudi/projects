using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MovieMeter.Api.Auth;
using MovieMeter.Api.Mapping;
using MovieMeter.Application.Models;
using MovieMeter.Application.Repositories;
using MovieMeter.Application.Services.Interfaces;
using MovieMeter.Contracts.Requests;
using MovieMeter.Contracts.Responses;

namespace MovieMeter.Api.Controllers
{
    //[Authorize]
    [ApiVersion("1.0")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieService _movieService;
        private readonly IRatingRepository _ratingRepository;

        public MoviesController(IMovieService movieService, IRatingRepository ratingRepository)
        {
            _movieService = movieService;
            _ratingRepository = ratingRepository;
        }

        [Authorize(Policy = "TrustedUser")]
        [HttpPost(Endpoints.Movies.Create)]
        public async Task<ActionResult<MovieResponse?>> Create([FromBody] CreateMovieRequest request, CancellationToken token)
        {
            Movie movie = request.MapToMovie();
            var result = await _movieService.CreateAsync(movie, token);
            if (result is not null)
            {
                MovieResponse response = movie.MapToMovieResponse();
                //return Created(uri: $"{Endpoints.Movies.Create}{response.Id}", response);
                return CreatedAtAction(nameof(Get), new { idOrSlug = movie.Id }, movie);
            }
            return BadRequest(request);
        }

        [HttpGet(Endpoints.Movies.Get)]
        public async Task<ActionResult<MovieResponse?>> Get([FromRoute] string idOrSlug, CancellationToken token)
        {
            var userId = HttpContext.GetUserId();
            var movie = Guid.TryParse(idOrSlug, out var id) ?
                await _movieService.GetMovieById(userId ?? Guid.Empty, id, token) :
                await _movieService.GetMovieBySlug(userId ?? Guid.Empty, idOrSlug, token);
            if (movie is null)
            {
                return NotFound();
            }
            return Ok(movie.MapToMovieResponse());
        }

        //[HttpGet(Endpoints.Movies.Get)]
        //public async Task<ActionResult<MovieResponse?>> GetV2([FromRoute] string idOrSlug, CancellationToken token)
        //{
        //    var userId = HttpContext.GetUserId();
        //    var movie = Guid.TryParse(idOrSlug, out var id) ?
        //        await _movieService.GetMovieById(userId ?? Guid.Empty, id, token) :
        //        await _movieService.GetMovieBySlug(userId ?? Guid.Empty, idOrSlug, token);
        //    if (movie is null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(movie.MapToMovieResponse());
        //}

        [AllowAnonymous]
        [HttpGet(Endpoints.Movies.GetAll)]
        public async Task<ActionResult<MoviesResponse?>> GetAll(
            [FromQuery] GetAllMoviesRequest request,
            CancellationToken token)
        {
            var userId = HttpContext.GetUserId();

            var options = request.MapToOptions()
                .WithUserId(userId);

            var movies = await _movieService.GetAllAsync(options, token);
            var totalMoviesCount = await _movieService.GetCountAsync(options.Title, options.YearOfRelease, token);

            var moviesResponse = movies.MapToMoviesResponse(request.Page, request.PageSize, totalMoviesCount);
            return Ok(moviesResponse);
        }

        [Authorize(Policy = "TrustedUser")]
        [HttpPut(Endpoints.Movies.Update)]
        public async Task<ActionResult<MovieResponse>> Update([FromRoute] Guid id, [FromBody] UpdateMovieRequest request, CancellationToken token)
        {
            var movie = request.MapToMovie(id);
            var updated = await _movieService.UpdateAsync(movie, token);
            if (updated is null)
            {
                return NotFound();
            }
            var response = movie.MapToMovieResponse();
            return Ok(response);
        }

        [Authorize(Policy = "AdminOnly")]
        [HttpDelete(Endpoints.Movies.Delete)]
        public async Task<ActionResult> Delete([FromRoute] Guid id, CancellationToken token)
        {
            var deleted = await _movieService.DeleteByIdAsync(id, token);
            if (!deleted)
            {
                return NotFound();
            }
            return Ok();
        }

        [Authorize]
        [HttpPost(Endpoints.Movies.Rate)]
        public async Task<ActionResult> Rate([FromRoute] Guid movieId, [FromBody] RateMovieRequest request, CancellationToken token)
        {
            var userId = HttpContext.GetUserId();
            var rated = await _ratingRepository.RateAsync(movieId, userId ?? Guid.Empty, request.Rating, token);
            if (!rated)
            {
                return NotFound();
            }
            return Ok();
        }

        [Authorize]
        [HttpDelete(Endpoints.Movies.DeleteRating)]
        public async Task<ActionResult> DeleteRating([FromRoute] Guid movieId, CancellationToken token)
        {
            var userId = HttpContext.GetUserId();
            var deleted = await _ratingRepository.DeleteRatingAsync(movieId, userId ?? Guid.Empty, token);
            if (!deleted)
            {
                return NotFound();
            }
            return Ok();
        }

        [Authorize]
        [HttpGet(Endpoints.Ratings.GetUserRatings)]
        public async Task<ActionResult<UserRatingsResponse?>> GetUserRatings(CancellationToken token)
        {
            var userId = HttpContext.GetUserId();
            if (userId is null)
            {
                return NotFound();
            }
            var ratings = await _ratingRepository.GetUserRatings(userId ?? Guid.Empty, token);
            if (ratings is null)
            {
                return NotFound();
            }
            return Ok(ratings);
        }
    }
}
