using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using TodoLibrary.DataAccess;
using TodoLibrary.Models;

namespace ToDoApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodosController : ControllerBase
{
    private readonly ITodoData _todoData;
    private readonly ILogger<TodosController> _logger;

    public TodosController(ITodoData todoData, ILogger<TodosController> logger)
    {
        this._todoData = todoData;
        _logger = logger;
    }

    private int GetUserId()
    {
        var userIdString = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
        return int.Parse(userIdString);
    }

    // GET: api/todos
    [HttpGet]
    public async Task<ActionResult<List<TodoModel>>> Get()
    {
        _logger.LogInformation("GET: api/todos");
        List<TodoModel> result = new List<TodoModel>();
        try
        {
            var userId = GetUserId();
            result = await _todoData.GetUserTodos(userId);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "The GET call to api/todos failed.");
            return BadRequest();
        }

        return Ok(result);
    }

    // GET api/todos/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TodoModel>> Get(int id)
    {
        _logger.LogInformation("GET: api/todos/{id}", id);

        try
        {
            var userId = GetUserId();
            var result = await _todoData.GetUserTodo(userId, id);

            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "The GET call to {apiPath} failed.", $"api/todos/{id}");
            return BadRequest();
        }
    }

    // POST api/todos
    [HttpPost]
    public async Task<ActionResult<TodoModel?>> Post([FromBody] string title)
    {
        _logger.LogInformation("POST: api/todos/ (Todo: {title}", title);

        try
        {
            var userId = GetUserId();
            var result = await _todoData.Create(title, userId);
            return Ok(result);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "The POST call to {apiPath} failed for the title {title}",
                "api/todos",
                title);
            return BadRequest();
        }
    }

    // PUT api/todos/5
    [HttpPut("{id}")]
    public async Task<ActionResult> Put(int id, [FromBody] string title)
    {
        _logger.LogInformation("PUT: api/todos/{id} (Todo: {title}", id, title);

        try
        {
            var userId = GetUserId();
            await _todoData.Update(userId, id, title);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "The PUT call to {apiPath} failed for the title {title}",
                $"api/todos/{id}",
                title);
            return BadRequest();
        }
    }

    // PUT api/todos/5/complete
    [HttpPut("{id}/complete")]
    public async Task<ActionResult> Complete(int id)
    {
        _logger.LogInformation("PUT: api/todos/{id}/complete", id);

        try
        {
            var userId = GetUserId();
            await _todoData.Complete(id, userId);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "The PUT call to {apiPath} failed.",
                $"api/todos/{id}/complete");
            return BadRequest();
        }
    }

    // DELETE api/todos/5
    [HttpDelete("{id}")]
    public async Task<ActionResult> Delete(int id)
    {
        _logger.LogInformation("DELETE: api/todos/{id}", id);

        try
        {
            var userId = GetUserId();
            await _todoData.Delete(id, userId);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex,
                "The DELETE call to {apiPath} failed.",
                $"api/todos/{id}");
            return BadRequest();
        }
    }
}

