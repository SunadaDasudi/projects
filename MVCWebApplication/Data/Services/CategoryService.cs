using Microsoft.EntityFrameworkCore;
using MVCWebApplication.Models;

namespace MVCWebApplication.Data.Services;

public class CategoryService(SqlDbContext dbContext) : ICategoryService
{
    public Task<List<Category>> GetCategoriesAsync()
    {
        return dbContext.Categories.ToListAsync();
    }
}
