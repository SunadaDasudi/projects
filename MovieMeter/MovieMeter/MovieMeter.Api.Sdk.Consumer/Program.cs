using Microsoft.Extensions.DependencyInjection;
using MovieMeter.Api.Sdk;
using Refit;
using System.Text.Json;

//var moviesApi = RestService.For<IMovieMeterApi>("https://localhost:7068/");

var services = new ServiceCollection();
services.AddRefitClient<IMovieMeterApi>(settings => new RefitSettings
{
    AuthorizationHeaderValueGetter = (request, cancellationToken) => Task.FromResult("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIwNjE0OGQzYy1lYTU1LTQ1MWYtYTU3Ni1kMDMyN2Q4M2M3M2YiLCJlbWFpbCI6InN1bmFkYS5kYXN1ZGkyMDEwQGdtYWlsLmNvbSIsImFkbWluIjoiZmFsc2UiLCJ0cnVzdGVkX3VzZXIiOiJ0cnVlIiwibmJmIjoxNzQzMTA4MzkwLCJleHAiOjE3NDMxMTE5OTAsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNjgiLCJhdWQiOiJNb3ZpZU1ldGVyQXBpIn0.BQpc3rQtIapKg_BHo_Xuz3rkFb5YY0Sc2FNASD8t3Ho")
})
.ConfigureHttpClient(c => c.BaseAddress = new Uri("https://localhost:7068/"));

var provider = services.BuildServiceProvider();

var moviesApi = provider.GetRequiredService<IMovieMeterApi>();
try
{
    var movie = await moviesApi.GetMovieAsync("9cf5b0ac-a779-4a1e-8b82-729fff2bce60");
    Console.WriteLine(JsonSerializer.Serialize(movie));
}
catch (ApiException ex)
{
    Console.WriteLine(ex.Message);
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}