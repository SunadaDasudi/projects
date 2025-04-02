using System.Data;
using System.Threading.Tasks;

namespace MovieMeter.Application.DataAccess;

public interface IDbConnectionFactory
{
    Task<IDbConnection> CreateConnectionAsync(CancellationToken token = default);
}
