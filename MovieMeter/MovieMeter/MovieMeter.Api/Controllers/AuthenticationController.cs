using Asp.Versioning;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using MovieMeter.Contracts.Requests;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MovieMeter.Api.Controllers;

[AllowAnonymous]
[Route("api")]
[ApiController]
public class AuthenticationController(IConfiguration config) : ControllerBase
{
    [ApiVersion("1.0")]
    [HttpPost("login")]
    public async Task<string> GenerateJwtToken([FromBody] LoginRequest request, CancellationToken token)
    {
        var secretKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(
                       config.GetValue<string>("Jwt:Key")!));

        var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

        List<Claim> claims =
        [
            new(JwtRegisteredClaimNames.Sid, request.UserId.ToString()),
            new(JwtRegisteredClaimNames.Email, request.Email),
            new("admin", "false"),
            new("trusted_user","true")
        ];

        var jwtToken = new JwtSecurityToken(
            config.GetValue<string>("Jwt:Issuer"),
            config.GetValue<string>("Jwt:Audience"),
            claims,
            DateTime.UtcNow,
            DateTime.UtcNow.AddMinutes(60),
            signingCredentials
            );

        return new JwtSecurityTokenHandler().WriteToken(jwtToken);
    }
}
