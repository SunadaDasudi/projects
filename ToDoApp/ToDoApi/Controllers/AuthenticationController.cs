using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace ToDoApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController(IConfiguration config) : ControllerBase
{
    private readonly IConfiguration _config = config;

    public record AuthenticationData(string? UserName, string? Password);

    public record UserData(int Id, string FirstName, string LastName, string UserName);

    [HttpPost("token")]
    //[AllowAnonymous]
    [Authorize(Policy = "AllowAnonymousPolicy")]
    public ActionResult<string> Authenticate([FromBody] AuthenticationData authData)
    {
        var userData = ValidateCredentials(authData);
        if (userData is null)
            return Unauthorized();
        var token = GenerateToken(userData);

        return Ok(token);
    }

    private string GenerateToken(UserData userData)
    {
        var secretKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(
                _config.GetValue<string>("Authentication:SecretKey")!));

        var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

        List<Claim> claims = new();
        claims.Add(new(JwtRegisteredClaimNames.Sub, userData.Id.ToString()));
        claims.Add(new(JwtRegisteredClaimNames.UniqueName, userData.UserName));
        claims.Add(new(JwtRegisteredClaimNames.GivenName, userData.FirstName));
        claims.Add(new(JwtRegisteredClaimNames.FamilyName, userData.LastName));

        var token = new JwtSecurityToken(
            _config.GetValue<string>("Authentication:Issuer"),
            _config.GetValue<string>("Authentication:Audience"),
            claims,
            DateTime.UtcNow,
            DateTime.UtcNow.AddMinutes(60),
            signingCredentials
            );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private UserData? ValidateCredentials(AuthenticationData authData)
    {
        // THIS IS NON PRODUCTION CODE
        if (CompareValues(authData.UserName, "sunada.dasudi") &&
            CompareValues(authData.Password, "pass123"))
        {
            return new UserData(1, "Sunada", "Dasudi", authData.UserName!);
        }

        return null;
    }

    private bool CompareValues(string? actual, string expected)
    {
        return actual is not null && actual.Equals(expected);
    }
}

