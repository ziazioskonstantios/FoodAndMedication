using Microsoft.Azure.Cosmos;

public class UserService
{
    private readonly Container _container;

    public UserService(Container container)
    {
        _container = container;
    }

    public async Task<User?> GetUserByEmailAsync(string email)
    {
        try
        {
            ItemResponse<User> response = await _container.ReadItemAsync<User>(email, new PartitionKey(email));
            return response.Resource;
        }
        catch
        {
            return null;
        }
    }

    public async Task<bool> CreateUserAsync(User user)
    {
        try
        {
            await _container.CreateItemAsync(user, new PartitionKey(user.Email));
            return true;
        }
        catch
        {
            return false;
        }
    }
}
