namespace MovieMeter.Contracts.Requests;

public class CreateMovieRequest
{
    public required string Title { get; init; }
    public required int YearOfRelease { get; init; }
    public required List<string> Genres { get; init; } = new();
}
