namespace MovieMeter.Contracts.Responses;

public class UserRatingsResponse
{
    public Guid MovieId { get; init; }
    public string Title { get; init; }
    public int Rating { get; init; }
}
