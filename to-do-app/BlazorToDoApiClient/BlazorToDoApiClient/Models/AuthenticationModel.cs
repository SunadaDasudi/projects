using System.ComponentModel.DataAnnotations;

namespace BlazorToDoApiClient.Models;

public class AuthenticationModel
{
    [Required]
    public string Username { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public override string ToString()
    {
        return $"Hello, {Username}!";
    }
}
