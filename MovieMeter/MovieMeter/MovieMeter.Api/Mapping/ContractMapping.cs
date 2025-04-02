using Azure.Core;
using MovieMeter.Application.Models;
using MovieMeter.Contracts.Requests;
using MovieMeter.Contracts.Responses;
using System.Runtime.CompilerServices;

namespace MovieMeter.Api.Mapping;

public static class ContractMapping
{
    public static Movie MapToMovie(this CreateMovieRequest request)
    {
        return new Movie
        {
            Title = request.Title,
            YearOfRelease = request.YearOfRelease,
            Genres = request.Genres
        };
    }

    public static MovieResponse MapToMovieResponse(this Movie movie)
    {
        return new MovieResponse
        {
            Id = movie.Id,
            Title = movie.Title,
            Slug = movie.Slug,
            YearOfRelease = movie.YearOfRelease,
            Genres = movie.Genres,
            Rating = movie.Rating,
            UserRating = movie.UserRating
        };
    }

    public static MoviesResponse MapToMoviesResponse(this IEnumerable<Movie> movies, int page, int pageSize, int totalMoviesCount)
    {
        return new MoviesResponse
        {
            Items = movies.Select(movie => movie.MapToMovieResponse()),
            Page = page,
            PageSize = pageSize,
            TotalItemsCount = totalMoviesCount
        };
    }

    public static Movie MapToMovie(this UpdateMovieRequest request, Guid id)
    {
        return new Movie
        {
            Id = id,
            Title = request.Title,
            YearOfRelease = request.YearOfRelease,
            Genres = request.Genres
        };
    }

    public static GetAllMoviesOptions MapToOptions(this GetAllMoviesRequest request)
    {
        return new GetAllMoviesOptions
        {
            Title = request.Title,
            YearOfRelease = request.YearOfRelease,
            SortOrder = request.SortBy is null ? SortOrder.Unsorted :
                request.SortBy.StartsWith('-') ? SortOrder.DESC : SortOrder.ASC,
            SortBy = request.SortBy?.Trim('+', '-').Trim(),
            Page = request.Page,
            PageSize = request.PageSize
        };
    }

    public static GetAllMoviesOptions WithUserId(this GetAllMoviesOptions options, Guid? userId)
    {
        options.UserId = userId;
        return options;
    }
}
