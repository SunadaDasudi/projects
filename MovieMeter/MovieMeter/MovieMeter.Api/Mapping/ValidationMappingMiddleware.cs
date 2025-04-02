using FluentValidation;
using MovieMeter.Contracts.Responses;

namespace MovieMeter.Api.Mapping;

public class ValidationMappingMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext httpContext)
    {
        try
        {
            await next(httpContext);
        }
        catch (ValidationException ex)
        {
            httpContext.Response.StatusCode = 400;
            var validationFailureResponse = new ValidationFailureResponse
            {
                Errors = ex.Errors.Select(x => new ValidationResponse
                {
                    PropertyName = x.PropertyName,
                    ErrorMessage = x.ErrorMessage
                })
            };

            await httpContext.Response.WriteAsJsonAsync(validationFailureResponse);
        }
    }
}
