namespace MovieMeter.Contracts.Requests;

public class LoginRequest
{
    public Guid UserId { get; init; }
    public string Email { get; init; }
    public string Password { get; init; }
}
