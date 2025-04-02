using System.Security.Claims;

namespace MovieMeter.Api.Auth;

public static class IdentityExtensions
{
    public static Guid? GetUserId(this HttpContext context)
    {
        var userId = context.User.Claims.SingleOrDefault(u => u.Type == "sid")!.Value;

        if (Guid.TryParse(userId, out var parsedId))
        {
            return parsedId;
        }
        return null;
    }
}
