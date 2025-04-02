using MovieMeter.Contracts.Responses;
using Refit;

namespace MovieMeter.Api.Sdk;

[Headers("Authorization: Bearer")]
public interface IMovieMeterApi
{
    [Get("/api/movies/{idOrSlug}")]
    Task<MovieResponse> GetMovieAsync(string idOrSlug);
}
