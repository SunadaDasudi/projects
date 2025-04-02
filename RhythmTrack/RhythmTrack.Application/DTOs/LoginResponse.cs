namespace RhythmTrack.Application.DTOs;

public record LoginResponse
{
    public string Email { get; set; }
    public string IsLoginSuccessful { get; set; }
    public string Message { get; set; }
}
