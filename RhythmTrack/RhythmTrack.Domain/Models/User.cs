﻿namespace RhythmTrack.Domain.Models;

public class User
{
    public int? Id { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public DateTime Birthdate { get; set; }
    public string Gender { get; set; }
    public string PhoneNumber { get; set; }
    public string Role { get; set; } = "User";
    public string PasswordHash { get; set; }
}
