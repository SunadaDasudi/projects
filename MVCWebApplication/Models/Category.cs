namespace MVCWebApplication.Models;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty!;

    public List<Product> Products { get; set; } = new();// One-to-Many Relationship
}
