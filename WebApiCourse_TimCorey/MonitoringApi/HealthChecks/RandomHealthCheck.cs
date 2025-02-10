using Microsoft.Extensions.Diagnostics.HealthChecks;

namespace MonitoringApi.HealthChecks;

public class RandomHealthCheck : IHealthCheck
{
    public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context,
        CancellationToken cancellationToken = new CancellationToken())
    {
        int responseTimeInMilliSeconds = Random.Shared.Next(300);

        if (responseTimeInMilliSeconds < 100)
        {
            return Task.FromResult(
                HealthCheckResult.Healthy($"The response time is excellent ({responseTimeInMilliSeconds}ms)")
            );
        }
        else if (responseTimeInMilliSeconds < 200)
        {
            return Task.FromResult(
                HealthCheckResult.Degraded($"The response time is greater than expected ({responseTimeInMilliSeconds}ms)")
            );
        }
        else 
        {
            return Task.FromResult(
                HealthCheckResult.Unhealthy($"The response time is unacceptable ({responseTimeInMilliSeconds}ms)")
            );
        }
    }
}

