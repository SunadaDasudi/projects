using TodoLibrary.Models;

namespace TodoLibrary.DataAccess;

public class TodoData(ISqlDataAccess sqlDataAccessImplementation) : ITodoData
{
    public Task<List<TodoModel>> GetUserTodos(int userId)
    {
        return sqlDataAccessImplementation.LoadData<TodoModel, dynamic>(
            "dbo.GetUserTodos",
            new { UserId = userId },
            "Default");
    }

    public async Task<TodoModel?> GetUserTodo(int userId, int id)
    {
        var result = await sqlDataAccessImplementation.LoadData<TodoModel, dynamic>(
            "dbo.GetUserTodo",
            new
            {
                UserId = userId,
                Id = id
            },
            "Default");

        return result.FirstOrDefault();
    }

    public async Task<TodoModel?> Create(string title, int userId)
    {
        var result = await sqlDataAccessImplementation.LoadData<TodoModel, dynamic>(
            "dbo.Insert_Todo",
            new
            {
                UserId = userId,
                Title = title
            },
            "Default");

        return result.FirstOrDefault();
    }

    public Task Update(int userId, int id, string title)
    {
        return sqlDataAccessImplementation.SaveData<dynamic>(
            "dbo.Update_Todo",
            new
            {
                Id = id,
                Title = title,
                UserId = userId
            },
            "Default"
        );
    }

    public Task Complete(int id, int userId)
    {
        return sqlDataAccessImplementation.SaveData<dynamic>(
            "dbo.Complete_Todo",
            new
            {
                Id = id,
                UserId = userId
            },
            "Default");
    }

    public Task Delete(int id, int userId)
    {
        return sqlDataAccessImplementation.SaveData<dynamic>(
            "dbo.Delete_Todo",
            new
            {
                Id = id,
                UserId = userId
            },
            "Default");
    }
}

