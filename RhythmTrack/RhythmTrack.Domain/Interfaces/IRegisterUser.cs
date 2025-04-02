using RhythmTrack.Domain.Models;

namespace RhythmTrack.Domain.Interfaces;

public interface IRegisterUser
{
    Task<int> RegisterUserAsync(string email, string password);
}
