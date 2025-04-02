namespace GymManagement.Domain.Subscriptions;

public class Subscription
{
    private readonly Guid _adminId;
    public Guid Id { get; private set; }
    public SubscriptionType SubscriptionType { get; private set; } = null!;

    public Subscription(Guid adminId, SubscriptionType subscriptionType, Guid? id = null)
    {
        _adminId = adminId;
        SubscriptionType = subscriptionType;
        Id = id ?? Guid.NewGuid();
    }

    private Subscription()
    {
    }
}
