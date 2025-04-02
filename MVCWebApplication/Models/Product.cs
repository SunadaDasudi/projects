using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MVCWebApplication.Models;

public class Product
{
    public int Id { get; set; }

    [Display(Name = "Product Name")]
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int? CategoryId { get; set; }// Nullable foreign key

    [ForeignKey("CategoryId")]
    public Category? Category { get; set; } = null!;// Nullable navigation property
}
