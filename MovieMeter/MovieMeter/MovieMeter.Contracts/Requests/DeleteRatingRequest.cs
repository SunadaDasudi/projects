namespace MovieMeter.Contracts.Requests;

public class DeleteRatingRequest
{
    public Guid UserId { get; init; }
    public Guid MovieId { get; init; }
}
