using Microsoft.Data.SqlClient;
using System.Data;

namespace MovieMeter.Application.DataAccess;

public class SqliteDbConnectionFactory(string connectionString) : IDbConnectionFactory
{
    public async Task<IDbConnection> CreateConnectionAsync(CancellationToken token = default)
    {
        var connection = new SqlConnection(connectionString);
        await connection.OpenAsync(token);
        return connection;
    }
}
