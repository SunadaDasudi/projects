using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using MovieMeter.Application.DataAccess;
using MovieMeter.Application.Repositories;
using MovieMeter.Application.Services.Implementations;
using MovieMeter.Application.Services.Interfaces;
using MovieMeter.Application.Validators;

namespace MovieMeter.Application;

public static class ApplicationServiceCollectionsExtensions
{
    public static IServiceCollection AddApplication(this IServiceCollection service)
    {
        service.AddSingleton<IMovieRepository, MovieRepository>();
        service.AddSingleton<IRatingRepository, RatingRepository>();
        service.AddSingleton<IMovieService, MovieService>();
        service.AddSingleton<IRatingService, RatingService>();
        service.AddValidatorsFromAssemblyContaining<MovieValidator>(ServiceLifetime.Singleton);
        return service;
    }

    public static IServiceCollection AddDatabase(this IServiceCollection service, string connectionString)
    {
        service.AddSingleton<IDbConnectionFactory>(_ => new SqliteDbConnectionFactory(connectionString));
        return service;
    }
}
