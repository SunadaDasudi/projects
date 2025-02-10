using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GettingStartedApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    // GET: api/users
    [HttpGet]
    public IEnumerable<string> Get()
    {
        List<string> users = new List<string>();
        for (int i = 0; i < Random.Shared.Next(2, 10); i++)
        {
            users.Add($"User #{i + 1}");
        }
        return users;
    }

    // GET api/users/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return $"User #{id + 1}";
    }

    // POST api/users
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/users/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    //PATCH api/users/5
    [HttpPatch("{id}")]
    public void Patch(int id, [FromBody] string emailAddress)
    {
    }

    // DELETE api/users/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
