using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data;
using Microsoft.Data.SqlClient;

namespace RhythmTrack.ClassLibrary.DataAccess;

public class SqlDataAccess
{
    public IConfiguration Configuration { get; }

    public SqlDataAccess(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public List<T> LoadData<T, U>(string storedProcedure, U parameters, string connectionStringName)
    {
        string connectionString = Configuration.GetConnectionString(connectionStringName)!;
        using IDbConnection connection = new SqlConnection(connectionString);
        return connection.Query<T>(storedProcedure, parameters).ToList();
    }
}
