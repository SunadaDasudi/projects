using TodoLibrary.Models;

namespace TodoLibrary.DataAccess;

public interface ITodoData
{
    Task<List<TodoModel>> GetUserTodos(int userId);
    Task<TodoModel?> GetUserTodo(int userId, int id);
    Task<TodoModel?> Create(string title, int userId);
    Task Update(int userId, int id, string title);
    Task Complete(int id, int userId);
    Task Delete(int id, int userId);
}