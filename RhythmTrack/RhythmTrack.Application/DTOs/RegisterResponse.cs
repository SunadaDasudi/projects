namespace RhythmTrack.Application.DTOs;

public record RegisterResponse
{
    public string Email { get; set; }
    public bool Success { get; set; }
    public string Message { get; set; }
}
