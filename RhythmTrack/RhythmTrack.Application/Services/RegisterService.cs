using RhythmTrack.Domain.Interfaces;
using RhythmTrack.Domain.Models;

namespace RhythmTrack.Application.Services;

public class RegisterService: IRegisterUser
{
    private IRegisterUser _registerUser { get; } = null!;
    //public IUserRepository _userRepository { get; } = null!;
    public RegisterService(IRegisterUser registerUser)
    {
        _registerUser = registerUser;
    }
    public async Task RegisterUserAsync(User user)
    {
        //var existingUser = await _userRepository.GetUserByEmailAsync(user.Email);
        //if (existingUser != null)
        //    return null;

        string hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);
        user.PasswordHash = hashedPassword;

        await _registerUser.RegisterUserAsync(user);
    }
}
