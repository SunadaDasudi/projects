using MVCWebApplication.Models;
using System.Diagnostics.Eventing.Reader;

namespace MVCWebApplication.Data.Services;

public interface IProductService
{
    Task<List<Product>> GetProductsAsync();
    Task<Product?> GetProductAsync(int id);
    Task AddProductAsync(Product product);
    Task<bool> UpdateProductAsync(Product product);
    Task DeleteProductAsync(Product product);
}
