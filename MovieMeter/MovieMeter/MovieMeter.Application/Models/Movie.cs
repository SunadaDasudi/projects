using System.Text.RegularExpressions;

namespace MovieMeter.Application.Models;

public class Movie
{
    public Guid Id { get; init; } = Guid.NewGuid();
    public required string Title { get; init; }
    public string Slug => GenerateSlug();

    private string GenerateSlug()
    {
        var sluggedTitle = Regex.Replace(Title, "[^0-9A-Za-z _-]", string.Empty).ToLower().Replace(" ", "-");
        return $"{sluggedTitle}-{YearOfRelease}";
    }
    public float? Rating { get; init; }
    public int? UserRating { get; init; }
    public required int YearOfRelease { get; init; }
    public required List<string> Genres { get; init; } = [];
}
