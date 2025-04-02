using Microsoft.Extensions.Configuration;

namespace RhythmTrack.Infrastructure.Docker.DataAccess
{
    public interface ISqlDataAccess
    {
        IConfiguration Configuration { get; }

        Task<List<T>> LoadData<T, U>(string storedProcedure, U parameters, string connectionStringName);

        Task<T> LoadSingleData<T, U>(string storedProcedure, U parameters, string connectionStringName);

        Task SaveData<T>(string storedProcedure, T parameters, string connectionStringName);
    }
}