using Microsoft.EntityFrameworkCore;
using MVCWebApplication.Models;

namespace MVCWebApplication.Data;

public class SqlDbContext(DbContextOptions<SqlDbContext> dbContextOptions) : DbContext(dbContextOptions)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
           .HasOne(p => p.Category) // A Product has one Category
           .WithMany(c => c.Products) // A Category has many Products
           .HasForeignKey(p => p.CategoryId) // Foreign Key
           .OnDelete(DeleteBehavior.SetNull); // If category is deleted, set Product.CategoryId to null
    }

    public DbSet<Product> Products { get; set; }

    public DbSet<Category> Categories { get; set; }
}
