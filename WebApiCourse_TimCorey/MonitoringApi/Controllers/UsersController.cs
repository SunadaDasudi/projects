using Microsoft.AspNetCore.Mvc;


namespace MonitoringApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    public ILogger<UsersController> _logger { get; }

    public UsersController(ILogger<UsersController> logger)
    {
        _logger = logger;
    }

    // GET: api/<UsersController>
    [HttpGet]
    public IEnumerable<string> Get()
    {
        return new string[] { "value1", "value2" };
    }

    // GET api/<UsersController>/5
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        try
        {
            if (id < 0 || id > 100)
            {
                throw new ArgumentOutOfRangeException("id");
            }
            _logger.LogInformation("The api/users/{id} was called.", id);
            return Ok($"value {id}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Out of range {id}", id);
            return BadRequest("The index was out of range.");
        }

    }

    // POST api/<UsersController>
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/<UsersController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<UsersController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
