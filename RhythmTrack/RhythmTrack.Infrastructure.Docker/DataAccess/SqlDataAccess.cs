using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace RhythmTrack.Infrastructure.Docker.DataAccess;

public class SqlDataAccess : ISqlDataAccess
{
    public IConfiguration Configuration { get; }

    public SqlDataAccess(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public async Task<List<T>> LoadData<T, U>(string storedProcedure, U parameters, string connectionStringName)
    {
        string connectionString = Configuration.GetConnectionString(connectionStringName)!;
        using IDbConnection connection = new SqlConnection(connectionString);

        var result = await connection.QueryAsync<T>(storedProcedure, parameters, commandType: CommandType.StoredProcedure);

        return result.ToList();
    }

    public async Task<T?> LoadSingleData<T, U>(string storedProcedure, U parameters, string connectionStringName)
    {
        string connectionString = Configuration.GetConnectionString(connectionStringName)!;
        using IDbConnection connection = new SqlConnection(connectionString);

        var result = await connection.QueryAsync<T>(storedProcedure, parameters, commandType: CommandType.StoredProcedure);

        return result.FirstOrDefault();
    }

    public Task SaveData<T>(string storedProcedure, T parameters, string connectionStringName)
    {
        string connectionString = Configuration.GetConnectionString(connectionStringName)!;
        using IDbConnection connection = new SqlConnection(connectionString);

        return connection.ExecuteAsync(storedProcedure, parameters, commandType: CommandType.StoredProcedure);
    }
}
