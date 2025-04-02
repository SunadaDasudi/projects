namespace BlazorToDoApiClient.Models;

public class TodoModel
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public int UserId { get; set; }
    public bool IsComplete { get; set; }
}
