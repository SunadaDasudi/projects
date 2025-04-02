using FluentValidation;
using MovieMeter.Application.Models;
using MovieMeter.Application.Repositories;
using MovieMeter.Application.Services.Interfaces;

namespace MovieMeter.Application.Validators;

public class MovieValidator: AbstractValidator<Movie>
{
    private readonly IMovieRepository _movieRepository;

    public MovieValidator(IMovieRepository movieRepository)
    {
        _movieRepository = movieRepository;

        RuleFor(x => x.Id).NotEmpty();
        RuleFor(x => x.Title).NotEmpty().MaximumLength(50);
        RuleFor(x => x.YearOfRelease).NotEmpty().InclusiveBetween(1900, DateTime.Now.Year);
        RuleFor(x => x.Genres).NotEmpty().Must(x => x.Count > 0);
        RuleFor(x=>x.Slug).MustAsync(async (slug, cancellation) =>
        {
            var movie = await _movieRepository.GetMovieBySlug(Guid.Empty,slug);
            return movie == null;
        }).WithMessage("Slug already exists.");
    }
}
