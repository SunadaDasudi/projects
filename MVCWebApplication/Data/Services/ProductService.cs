using Microsoft.EntityFrameworkCore;
using MVCWebApplication.Models;

namespace MVCWebApplication.Data.Services;

public class ProductService(SqlDbContext dbContext) : IProductService
{
    public Task AddProductAsync(Product product)
    {
        dbContext.Products.Add(product);
        return dbContext.SaveChangesAsync();
    }

    public Task DeleteProductAsync(Product product)
    {
        dbContext.Products.Remove(product);
        return dbContext.SaveChangesAsync();
    }

    public Task<Product?> GetProductAsync(int id)
    {
        return dbContext.Products.FirstOrDefaultAsync(p => p.Id == id);
    }

    public Task<List<Product>> GetProductsAsync()
    {
        return dbContext.Products.Include(c => c.Category).ToListAsync();
    }

    public async Task<bool> UpdateProductAsync(Product product)
    {
        // Fetch the existing product
        var existingProduct = await dbContext.Products.FirstOrDefaultAsync(p => p.Id == product.Id);
        if (existingProduct == null)
        {
            return false; // Product not found
        }
        // Update the existing product's properties
        existingProduct.Name = product.Name;
        existingProduct.Description = product.Description;
        existingProduct.Price = product.Price;
        existingProduct.CategoryId = product.CategoryId;

        await dbContext.SaveChangesAsync();
        return true;
    }
}
