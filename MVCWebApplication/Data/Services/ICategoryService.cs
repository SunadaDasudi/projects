using MVCWebApplication.Models;

namespace MVCWebApplication.Data.Services;

public interface ICategoryService
{
    Task<List<Category>> GetCategoriesAsync();
}
