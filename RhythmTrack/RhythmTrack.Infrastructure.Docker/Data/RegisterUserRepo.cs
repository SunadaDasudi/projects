using RhythmTrack.Domain.Interfaces;
using RhythmTrack.Domain.Models;
using RhythmTrack.Infrastructure.Docker.DataAccess;

namespace RhythmTrack.Infrastructure.Docker.Data;

public class RegisterUserRepo : IRegisterUser
{
    private readonly ISqlDataAccess _sqlDataAccessImplementation;

    public RegisterUserRepo(ISqlDataAccess sqlDataAccess)
    {
        _sqlDataAccessImplementation = sqlDataAccess;
    }
    public Task RegisterUserAsync(User user) => _sqlDataAccessImplementation.SaveData(
        "dbo.RegisterUser",
        new
        {
            user.UserName,
            user.Email,
            user.Birthdate,
            user.Gender,
            user.PhoneNumber,
            user.Role,
            user.PasswordHash
        },
        "RhythmTrackConnection");

}
