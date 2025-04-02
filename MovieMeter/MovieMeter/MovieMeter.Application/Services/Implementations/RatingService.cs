using MovieMeter.Application.Repositories;
using MovieMeter.Application.Services.Interfaces;
using MovieMeter.Contracts.Responses;
using System.ComponentModel.DataAnnotations;

namespace MovieMeter.Application.Services.Implementations;

public class RatingService(IRatingRepository ratingRepository) : IRatingService
{
    public Task<float?> GetRatingAsync(Guid movieId, CancellationToken token = default)
    {
        throw new NotImplementedException();
    }

    public Task<(float? movieRating, int? userRating)> GetRatingAsync(Guid movieId, Guid userId, CancellationToken token = default)
    {
        throw new NotImplementedException();
    }

    public Task<bool> RateAsync(Guid movieId, Guid userId, int rating, CancellationToken token = default)
    {
        if (rating < 1 || rating > 5)
        {
            throw new ValidationException("Rating must be between 1 and 5.");
        }
        return ratingRepository.RateAsync(movieId, userId, rating, token);
    }

    public Task<bool> DeleteRatingAsync(Guid movieId, Guid userId, CancellationToken token = default)
    {
        return ratingRepository.DeleteRatingAsync(movieId, userId, token);
    }

    public Task<IEnumerable<UserRatingsResponse>?> GetUserRatings(Guid userId, CancellationToken token = default)
    {
        return ratingRepository.GetUserRatings(userId);
    }
}
