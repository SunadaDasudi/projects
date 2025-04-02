namespace GymManagement.Application.Services;

public interface ISubscriptionsWriteService
{
    Guid CreateSubscription(string subscriptionType, Guid adminId);
}
