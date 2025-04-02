using RhythmTrack.Domain.Models;

namespace RhythmTrack.Domain.Interfaces;

public interface ILoginUser
{
    Task<User> Login(string email, string password);
}
