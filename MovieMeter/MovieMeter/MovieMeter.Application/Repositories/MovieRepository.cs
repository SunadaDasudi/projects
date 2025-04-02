using Azure;
using Dapper;
using MovieMeter.Application.DataAccess;
using MovieMeter.Application.Models;
using System.Data;
using System.Text.RegularExpressions;

namespace MovieMeter.Application.Repositories;

public class MovieRepository(IDbConnectionFactory dbConnectionFactory) : IMovieRepository
{
    public async Task<Guid?> CreateAsync(Movie movie, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();
        using var transaction = connection.BeginTransaction();

        try
        {
            var newMovie = new
            {
                Id = Guid.NewGuid(),
                Title = movie.Title,
                Slug = GenerateSlug(movie.Title, movie.YearOfRelease),
                YearOfRelease = movie.YearOfRelease
            };

            var rowsAffected = await connection.ExecuteAsync(new CommandDefinition(
               "spMovie_Insert",
               newMovie,
               commandType: CommandType.StoredProcedure,
               transaction: transaction,
               cancellationToken: token));

            if (rowsAffected > 0)
            {
                foreach (var genre in movie.Genres)
                {
                    var genreCreated = await connection.ExecuteAsync(new CommandDefinition(
                        "spGenre_Insert",
                        new { Name = genre, MovieId = newMovie.Id },
                        commandType: CommandType.StoredProcedure,
                        transaction: transaction,
                        cancellationToken: token));

                    if (genreCreated == 0)
                    {
                        throw new Exception("Failed to insert genre.");
                    }
                }
            }
            else
            {
                transaction.Rollback();
                return null;
            }

            transaction.Commit();
            return newMovie.Id;
        }
        catch (Exception ex)
        {
            transaction.Rollback();
            Console.WriteLine($"Error: {ex.Message}");
            return null;
        }
    }

    private string GenerateSlug(string title, int yearOfRelease)
    {
        var sluggedTitle = Regex.Replace(title, "[^0-9A-Za-z _-]", string.Empty).ToLower().Replace(" ", "-");
        return $"{sluggedTitle}-{yearOfRelease}";
    }

    public async Task<bool> DeleteByIdAsync(Guid id, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();
        using var transaction = connection.BeginTransaction();

        try
        {
            var genreDeleted = await connection.ExecuteAsync(new CommandDefinition(
                "spGenre_Delete",
                new { MovieId = id },
                commandType: CommandType.StoredProcedure,
                transaction: transaction,
                cancellationToken: token));

            if (genreDeleted == 0) { throw new Exception("Failed to delete genre. Movie deletion failed."); }

            var movieDeleted = await connection.ExecuteAsync(new CommandDefinition(
              "spMovie_Delete",
              new { Id = id },
              commandType: CommandType.StoredProcedure,
              transaction: transaction,
              cancellationToken: token));
            if (movieDeleted == 0) { throw new Exception("Failed to delete movie."); }

            transaction.Commit();
            return true;
        }
        catch (Exception ex)
        {
            transaction.Rollback();
            Console.WriteLine($"Error: {ex.Message}");
            return false;
        }
    }

    public async Task<IEnumerable<Movie>?> GetAllAsync(GetAllMoviesOptions options, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();

        try
        {
            var parameters = new
            {
                Title = options.Title,
                YearOfRelease = options.YearOfRelease,
                SortOrder = options.SortOrder,
                SortBy = options.SortBy,
                Page = options.Page,
                PageSize = options.PageSize
            };

            var result = await connection.QueryAsync(new CommandDefinition(
                "spMovie_GetAll",
                parameters,
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));

            return result.Select(m => new Movie
            {
                Id = m.Id,
                Title = m.Title,
                YearOfRelease = m.YearOfRelease,
                Genres = Enumerable.ToList(m.Genres.Split(","))
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            return null;
        }
    }

    public async Task<Movie?> GetMovieById(Guid userId, Guid id, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();
        using var transaction = connection.BeginTransaction();

        try
        {
            var movie = await connection.QueryFirstOrDefaultAsync<Movie>(new CommandDefinition(
                "spMovie_GetById",
                new { Id = id, UserId = userId },
                commandType: CommandType.StoredProcedure,
                transaction: transaction,
                cancellationToken: token));

            if (movie is null) { return null; }

            var genres = await connection.QueryAsync<string>(new CommandDefinition(
                "spGenre_GetByMovieId",
                new { MovieId = id },
                commandType: CommandType.StoredProcedure,
                transaction: transaction,
                cancellationToken: token));

            if (genres is null)
            {
                transaction.Rollback();
                return null;
            }

            foreach (var genre in genres)
            {
                movie.Genres.Add(genre);
            }

            transaction.Commit();
            return movie;
        }
        catch (Exception ex)
        {
            transaction.Rollback();

            Console.WriteLine($"Error: {ex.Message}");
            return null;
        }
    }

    public async Task<Movie> GetMovieBySlug(Guid userId, string slug, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();
        using var transaction = connection.BeginTransaction();

        try
        {
            var movie = await connection.QueryFirstOrDefaultAsync<Movie>(new CommandDefinition(
                "spMovie_GetBySlug",
                new { Slug = slug },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));

            if (movie is null) { return null; }

            var genres = await connection.QueryAsync<string>(new CommandDefinition(
                "spGenre_GetByMovieId",
                new { MovieId = movie.Id },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));

            if (genres is null)
            {
                transaction.Rollback();
                return null;
            }

            foreach (var genre in genres)
            {
                movie.Genres.Add(genre);
            }

            transaction.Commit();
            return movie;
        }
        catch (Exception ex)
        {
            transaction.Rollback();

            Console.WriteLine($"Error: {ex.Message}");
            return null;
        }
    }

    public async Task<bool> UpdateAsync(Movie movie, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();
        using var transaction = connection.BeginTransaction();

        try
        {
            var genreDeleted = await connection.ExecuteAsync(new CommandDefinition(
                "spGenre_Delete",
                new { MovieId = movie.Id },
                commandType: CommandType.StoredProcedure,
                transaction: transaction,
                cancellationToken: token));

            if (genreDeleted == 0) { throw new Exception("Failed to delete genre. Movie updation failed."); }

            foreach (var genre in movie.Genres)
            {
                var genreCreated = await connection.ExecuteAsync(new CommandDefinition(
                    "spGenre_Insert",
                    new { Name = genre, MovieId = movie.Id },
                    commandType: CommandType.StoredProcedure,
                    transaction: transaction,
                    cancellationToken: token));

                if (genreCreated == 0)
                {
                    throw new Exception("Failed to update genre.");
                }
            }

            var movieUpdated = await connection.ExecuteAsync(new CommandDefinition(
                "spMovie_Update",
                new
                {
                    Id = movie.Id,
                    Title = movie.Title,
                    Slug = GenerateSlug(movie.Title, movie.YearOfRelease),
                    YearOfRelease = movie.YearOfRelease
                },
                commandType: CommandType.StoredProcedure,
                transaction: transaction,
                cancellationToken: token));

            if (movieUpdated == 0)
            {
                transaction.Rollback();
                throw new Exception("Failed to update genre.");
            }

            transaction.Commit();
            return true;
        }
        catch (Exception ex)
        {
            transaction.Rollback();
            Console.WriteLine($"Error: {ex.Message}");
            return false;
        }
    }

    public async Task<int> GetCountAsync(string? title, int? yearOfRelease, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync();

        try
        {
            var result = await connection.QueryAsync<int>(new CommandDefinition(
                "spMovie_GetCount",
                new
                {
                    Title = title,
                    YearOfRelease = yearOfRelease
                },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));

            return result.FirstOrDefault();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            return 0;
        }
    }
}
