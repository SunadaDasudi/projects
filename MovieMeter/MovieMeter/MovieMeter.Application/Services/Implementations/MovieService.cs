using FluentValidation;
using MovieMeter.Application.Models;
using MovieMeter.Application.Repositories;
using MovieMeter.Application.Services.Interfaces;

namespace MovieMeter.Application.Services.Implementations;

public class MovieService(IMovieRepository movieRepository, IValidator<Movie> movieValidator,
    IValidator<GetAllMoviesOptions> getAllMoviesOptionsValidator) : IMovieService
{
    public async Task<Guid?> CreateAsync(Movie movie, CancellationToken token = default)
    {
        await movieValidator.ValidateAndThrowAsync(movie, cancellationToken: token);
        return await movieRepository.CreateAsync(movie, token);
    }

    public Task<bool> DeleteByIdAsync(Guid id, CancellationToken token = default)
    {
        return movieRepository.DeleteByIdAsync(id, token);
    }

    public async Task<IEnumerable<Movie>?> GetAllAsync(GetAllMoviesOptions options, CancellationToken token = default)
    {
        await getAllMoviesOptionsValidator.ValidateAndThrowAsync(options, cancellationToken: token);
        return await movieRepository.GetAllAsync(options, token);
    }

    public async Task<int> GetCountAsync(string? title, int? yearOfRelease, CancellationToken token = default)
    {
        return await movieRepository.GetCountAsync(title, yearOfRelease, token);
    }

    public Task<Movie?> GetMovieById(Guid userId, Guid id, CancellationToken token = default)
    {
        return movieRepository.GetMovieById(userId, id, token);
    }

    public Task<Movie?> GetMovieBySlug(Guid userId, string slug, CancellationToken token = default)
    {
        return movieRepository.GetMovieBySlug(userId, slug, token);
    }

    public async Task<Movie> UpdateAsync(Movie movie, CancellationToken token = default)
    {
        await movieValidator.ValidateAndThrowAsync(movie, cancellationToken: token);

        //var movieExists = await GetMovieById(userId,movie.Id, token);
        //if (movieExists is null)
        //    return null;

        await movieRepository.UpdateAsync(movie, token);
        return movie;
    }
}
