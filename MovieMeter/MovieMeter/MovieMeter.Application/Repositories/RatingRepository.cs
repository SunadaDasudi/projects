
using Dapper;
using MovieMeter.Application.DataAccess;
using MovieMeter.Contracts.Responses;
using System.Data;

namespace MovieMeter.Application.Repositories;

public class RatingRepository(IDbConnectionFactory dbConnectionFactory) : IRatingRepository
{
    public async Task<(float? movieRating, int? userRating)> GetRatingAsync(Guid movieId, Guid userId, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync(token);
        try
        {
            return await connection.QuerySingleOrDefaultAsync<(float?, int?)>(new CommandDefinition(
                "spMovie_GetAverageRating",
                new { MovieId = movieId, UserId = userId },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));
        }
        catch (Exception ex)
        {
            throw new Exception("Failed to get movie average rating.", ex);
        }
    }

    public async Task<float?> GetRatingAsync(Guid movieId, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync(token);
        try
        {
            var rating = await connection.QueryFirstOrDefaultAsync<float?>(new CommandDefinition(
                "spMovie_GetAverageRating",
                new { MovieId = movieId },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));

            return rating;
        }
        catch (Exception ex)
        {
            throw new Exception("Failed to get movie average rating.", ex);
        }
    }

    public async Task<bool> RateAsync(Guid movieId, Guid userId, int rating, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync(token);
        try
        {
            var rowsAffected = await connection.ExecuteAsync(new CommandDefinition(
                "spRating_Insert",
                new { MovieId = movieId, UserId = userId, Rating = rating },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));
            return rowsAffected > 0;
        }
        catch (Exception ex)
        {
            throw new Exception("Failed to rate movie.", ex);
        }
    }

    public async Task<bool> DeleteRatingAsync(Guid movieId, Guid userId, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync(token);

        try
        {
            var rowsAffected = await connection.ExecuteAsync(new CommandDefinition(
                "spRating_Delete",
                new { MovieId = movieId, UserId = userId },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));
            return rowsAffected > 0;
        }
        catch (Exception ex)
        {
            throw new Exception("Failed to delete rating.", ex);
        }
    }

    public async Task<IEnumerable<UserRatingsResponse>?> GetUserRatings(Guid userId, CancellationToken token = default)
    {
        using var connection = await dbConnectionFactory.CreateConnectionAsync(token);
        try
        {
            var userRatings = await connection.QueryAsync<UserRatingsResponse>(new CommandDefinition(
                "spRating_GetUserRatings",
                new { UserId = userId },
                commandType: CommandType.StoredProcedure,
                cancellationToken: token));

            return userRatings;
        }
        catch (Exception ex)
        {
            throw new Exception("Failed to get user ratings.", ex);
        }
    }
}
