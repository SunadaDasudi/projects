using FluentValidation;
using MovieMeter.Application.Models;

namespace MovieMeter.Application.Validators;

public class GetAllMoviesOptionsValidator : AbstractValidator<GetAllMoviesOptions>
{
    private static readonly string[] AllowedSortBy = { "title", "yearofrelease" };
    private static readonly int allowedPageSize = 25;
    public GetAllMoviesOptionsValidator()
    {
        RuleFor(options => options.Title)
            .MaximumLength(50)
            .WithMessage("Title must be less than 50 characters");
        RuleFor(options => options.YearOfRelease)
            .GreaterThan(0)
            .LessThanOrEqualTo(DateTime.Now.Year)
            .WithMessage("Year of release must be greater than 0");
        RuleFor(options => options.SortBy)
            .Must(sortBy => AllowedSortBy.Contains(sortBy))
            .WithMessage($"Sort by must be one of the following: {string.Join(", ", AllowedSortBy)}");
        RuleFor(x => x.Page)
            .GreaterThanOrEqualTo(1)
            .WithMessage("Page must be greater than 0");
        RuleFor(x => x.PageSize)
            .InclusiveBetween(1, allowedPageSize)
            .WithMessage("Page size must be greater than 0 amd lesser than " + allowedPageSize);
    }
}
