namespace MovieMeter.Contracts.Responses;

public class PagedResponse<TResponse>
{
    public required IEnumerable<TResponse> Items { get; init; } = Enumerable.Empty<TResponse>();
    public required int Page { get; set; } = 0;
    public required int PageSize { get; set; } = 10;
    public required int TotalItemsCount { get; set; } = 0;
    public bool HasNext => Page * PageSize < TotalItemsCount;
}
