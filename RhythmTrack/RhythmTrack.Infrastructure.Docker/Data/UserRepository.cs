using RhythmTrack.Domain.Interfaces;
using RhythmTrack.Domain.Models;
using RhythmTrack.Infrastructure.Docker.DataAccess;
using System.Data;

namespace RhythmTrack.Infrastructure.Docker.Data;

public class UserRepository : IUserRepository
{
    private readonly ISqlDataAccess _sqlDataAccessImplementation;

    public UserRepository(ISqlDataAccess sqlDataAccess)
    {
        _sqlDataAccessImplementation = sqlDataAccess;
    }

    public Task<User> GetUserByEmailAsync(string email)
    {
        return _sqlDataAccessImplementation.LoadSingleData<User, dynamic>(
            "dbo.GetUserByEmail",
            new
            {
                Email = email
            },
            "RhythmTrackConnection");
    }

    public Task<User> CreateUser(User user)
    {
        throw new NotImplementedException();
    }

    public Task DeleteUser(int id)
    {
        throw new NotImplementedException();
    }

    public Task<User> GetUserById(int id)
    {
        throw new NotImplementedException();
    }

    public Task<User> UpdateUser(User user)
    {
        throw new NotImplementedException();
    }
}
