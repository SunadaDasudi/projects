using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ApiSecurity.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthenticationController : ControllerBase
{
    public IConfiguration _config = null!;
    public AuthenticationController(IConfiguration configuration)
    {
        _config = configuration;
    }
    public record AuthenticationData(string? UserName, string? Password);
    public record UserData(string UserId, string UserName, string Title, string EmployeeId);

    [HttpPost("token")]
    [AllowAnonymous]
    public ActionResult<string> Authenticate([FromBody] AuthenticationData data)
    {
        var user = ValidateCredentials(data);
        if (user == null)
        {
            return Unauthorized();
        }
        var token = GenerateToken(user);

        return Ok(token);
    }

    private string GenerateToken(UserData userData)
    {
        var secretKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_config.GetValue<string>("Authentication:SecretKey")!));

        var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

        List<Claim> claims = new List<Claim>();
        claims.Add(new(JwtRegisteredClaimNames.Sub, userData.UserId.ToString()));
        claims.Add(new(JwtRegisteredClaimNames.UniqueName, userData.UserName));
        claims.Add(new("title", userData.Title));
        claims.Add(new("employeeId", userData.EmployeeId));

        var token = new JwtSecurityToken(
            _config.GetValue<string>("Authentication:Issuer"),
            _config.GetValue<string>("Authentication:Audience"),
            claims,
            DateTime.UtcNow, //When this token becomes valid
            DateTime.UtcNow.AddMinutes(60),//When the token will expire
            signingCredentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private UserData? ValidateCredentials(AuthenticationData data)
    {
        //This is not production code - only demo code - do not use in real life
        if (CompareValues(data.UserName, "sunada.dasudi") && CompareValues(data.Password, "test123"))
        {
            return new UserData("1", data.UserName!, "Lead Developer", "A009");
        }
        return null;
    }

    private bool CompareValues(string? actual, string? expected)
    {
        return actual != null && actual == expected;
    }
}
