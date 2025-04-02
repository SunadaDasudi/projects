
namespace GymManagement.Application.Services;

public class SubscriptionsWriteService : ISubscriptionsWriteService
{
    public Guid CreateSubscription(string subscriptionType, Guid adminId)
    {
        return Guid.NewGuid();
    }
}
