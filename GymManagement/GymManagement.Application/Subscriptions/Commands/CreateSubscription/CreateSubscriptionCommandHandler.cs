using ErrorOr;
using GymManagement.Application.Common.Interfaces;
using GymManagement.Domain.Subscriptions;
using MediatR;

namespace GymManagement.Application.Subscriptions.Commands.CreateSubscription;

public class CreateSubscriptionCommandHandler : IRequestHandler<CreateSubscriptionCommand, ErrorOr<Subscription>>
{
    private readonly ISubscriptionsRepository _subscriptionsRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateSubscriptionCommandHandler(ISubscriptionsRepository subscriptionRepository)
    {
        _subscriptionsRepository = subscriptionRepository;
        //_unitOfWork = unitOfWork;
    }
    public async Task<ErrorOr<Subscription>> Handle(CreateSubscriptionCommand request, CancellationToken cancellationToken)
    {
        //Create subscription
        var subscription = new Subscription(
            adminId: request.AdminId,
            request.SubscriptionType);

        //Add subscription to database
        await _subscriptionsRepository.AddSubscriptionAsync(subscription);
        //await _unitOfWork.CommitAsync();

        //Return subscription id
        return subscription;
    }
}
