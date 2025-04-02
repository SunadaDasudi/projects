using MovieMeter.Contracts.Responses;

namespace MovieMeter.Application.Services.Interfaces;

public interface IRatingService
{
    Task<float?> GetRatingAsync(Guid movieId, CancellationToken token = default);
    Task<(float? movieRating, int? userRating)> GetRatingAsync(Guid movieId, Guid userId, CancellationToken token = default);
    Task<bool> RateAsync(Guid movieId, Guid userId, int rating, CancellationToken token = default);
    Task<bool> DeleteRatingAsync(Guid movieId, Guid userId, CancellationToken token = default);
    Task<IEnumerable<UserRatingsResponse>?> GetUserRatings(Guid userId, CancellationToken token = default);
}
