namespace MovieMeter.Application.Models;

public class GetAllMoviesOptions
{
    public required string? Title { get; init; }

    public required int? YearOfRelease { get; init; }

    public Guid? UserId { get; set; }

    public string? SortBy { get; init; }

    public SortOrder SortOrder { get; init; }

    public int Page { get; init; }

    public int PageSize { get; init; }
}

public enum SortOrder
{
    Unsorted,
    ASC,
    DESC
}
