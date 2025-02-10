using System.ComponentModel.DataAnnotations;

namespace ApiProtection.Models;

public class UserModel
{
    [Required]
    [Range(1, int.MaxValue)]
    public int Id { get; set; }

    [Required]
    [MaxLength(20)]
    [MinLength(1)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(20)]
    [MinLength(1)]
    public string LastName { get; set; }

    [EmailAddress]
    public string Email { get; set; }

    [Phone]
    public string PhoneNumber { get; set; }

    [Url]
    public string Homepage { get; set; }

    [Range(0, 5)]
    public int NumberOfVehicles { get; set; }
}

