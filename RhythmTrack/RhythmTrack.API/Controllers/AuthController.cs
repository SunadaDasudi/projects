using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using RhythmTrack.Application.Services;
using RhythmTrack.Domain.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RhythmTrack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IConfiguration config, RegisterService registerService) : ControllerBase
    {
        public IConfiguration Config { get; } = config;
        public RegisterService RegisterService { get; } = registerService;

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<ActionResult<string>> Register([FromBody] User registerRequest)
        {
            if (registerRequest is null) return BadRequest();
            try
            {
                await RegisterService.RegisterUserAsync(registerRequest);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
            return Ok("User registered successfully");
        }

        public record AthenticationData(string? Email, string? Password);

        public record ApplicationUserData(string Id, string UserName, string Email, DateTime DOB, string? Gender, string PhoneNumber);

        [HttpPost("token")]
        [AllowAnonymous]
        public ActionResult<string> Authenticate([FromBody] AthenticationData athenticationDate)
        {
            if (athenticationDate is null) return Unauthorized();
            //Fetch user's hashed password for the email passed
            var hashedPassword = "hashedPassword";

            var isUserAuthenticated = VerifyPassword(hashedPassword, athenticationDate.Password!);
            if (!isUserAuthenticated) return Unauthorized();

            //Fetch the user data of the logged in user email id
            var applicationUserData = new ApplicationUserData(
                "1",
                "Sunada Dasudi",
                "sunada.dasudi2010@gmail.com",
                new DateTime(1988, 06, 20),
                "F",
                "460762976206"
                );
            var token = GenerateToken(applicationUserData);

            return Ok(token);
        }

        private bool VerifyPassword(string hashedPassword, string providedPassword)
        {
            //var result = _passwordHasher.VerifyHashedPassword(null, hashedPassword, providedPassword);
            //return result == PasswordVerificationResult.Success;
            return true;
        }

        private string GenerateToken(ApplicationUserData applicationUserData)
        {
            var secretKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Config.GetValue<string>("JwtAuthentication:SecretKey")!));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            List<Claim> claims = new List<Claim>();
            claims.Add(new(JwtRegisteredClaimNames.Sub, applicationUserData.Id));
            claims.Add(new(JwtRegisteredClaimNames.UniqueName, applicationUserData.UserName));
            claims.Add(new(JwtRegisteredClaimNames.Email, applicationUserData.Email));
            claims.Add(new(JwtRegisteredClaimNames.Birthdate, applicationUserData.DOB.ToString()));
            claims.Add(new(JwtRegisteredClaimNames.Gender, applicationUserData.Gender!));

            var token = new JwtSecurityToken(
                Config.GetValue<string>("JwtAuthentication:Issuer"),
                Config.GetValue<string>("JwtAuthentication:Audience"),
                claims,
                DateTime.UtcNow,
                DateTime.Now.AddMinutes(60),
                signinCredentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
