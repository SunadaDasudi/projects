using RhythmTrack.Domain.Models;

namespace RhythmTrack.Domain.Interfaces;

public interface IUserRepository
{
    //Task<User> GetUserById(int id);
    Task<User> GetUserByEmailAsync(string email);
    //Task<User> CreateUser(User user);
    //Task<User> UpdateUser(User user);
    //Task DeleteUser(int id);
}
