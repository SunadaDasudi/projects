using MovieMeter.Application.Models;

namespace MovieMeter.Application.Services.Interfaces;

public interface IMovieService
{
    Task<Guid?> CreateAsync(Movie movie, CancellationToken token = default);

    Task<Movie?> GetMovieById(Guid userId, Guid id, CancellationToken token = default);

    Task<Movie?> GetMovieBySlug(Guid userId, string slug, CancellationToken token = default);

    Task<IEnumerable<Movie>?> GetAllAsync(GetAllMoviesOptions options, CancellationToken token = default);

    Task<Movie> UpdateAsync(Movie movie, CancellationToken token = default);

    Task<bool> DeleteByIdAsync(Guid id, CancellationToken token = default);

    Task<int> GetCountAsync(string? title, int? yearOfRelease, CancellationToken token = default);
}
