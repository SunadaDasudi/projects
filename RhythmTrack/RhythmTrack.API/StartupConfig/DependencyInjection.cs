using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using RhythmTrack.Application.Services;
using RhythmTrack.Domain.Interfaces;
using RhythmTrack.Infrastructure.Docker.DataAccess;
using System.Text;

namespace RhythmTrack.API.StartupConfig;

public static class DependencyInjection
{
    public static WebApplicationBuilder AddAuthenticationServices(this WebApplicationBuilder builder)
    {
        builder.Services.AddAuthentication("Bearer")
                .AddJwtBearer(options =>
                {
                    options.TokenValidationParameters = new()
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = builder.Configuration.GetValue<string>("JwtAuthentication:Issuer"),
                        ValidAudience = builder.Configuration.GetValue<string>("JwtAuthentication:Audience"),
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(
                            builder.Configuration.GetValue<string>("JwtAuthentication:SecretKey")!))
                    };
                });

        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", policy =>
            {
                policy.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        });

        return builder;
    }

    public static WebApplicationBuilder AddAuthorizationService(this WebApplicationBuilder builder)
    {
        builder.Services.AddAuthorization(options =>
        {
            options.FallbackPolicy = new AuthorizationPolicyBuilder()
                .RequireAuthenticatedUser()
                .Build();

            options.AddPolicy("AllowAnonymousPolicy", policy => policy.RequireAssertion(_ => true));

        });

        return builder;
    }

    public static WebApplicationBuilder AddInfrastructureDependencies(this WebApplicationBuilder builder)
    {
        builder.Services.AddSingleton<ISqlDataAccess, SqlDataAccess>();
        return builder;
    }

    public static WebApplicationBuilder AddApplicationServiceDependencies(this WebApplicationBuilder builder)
    {
        //builder.Services.AddSingleton<IRegisterUser>();
        builder.Services.AddScoped<IRegisterUser, RegisterService>();
        return builder;
    }
}
