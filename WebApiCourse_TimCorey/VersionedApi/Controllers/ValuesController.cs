using Asp.Versioning;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace VersionedApi.Controllers;

[Route("api/v{version:ApiVersion}/[controller]")]
[ApiController]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
public class ValuesController : ControllerBase
{
    // GET: api/<ValuesController>
    [HttpGet]
    [MapToApiVersion("1.0")]
    public IEnumerable<string> GetV1()
    {
        return new string[] { "value1.0", "value2" };
    }

    // GET: api/<ValuesController>
    [HttpGet]
    [MapToApiVersion("2.0")]
    public IEnumerable<string> GetV2()
    {
        return new string[] { "value2.0", "value2" };
    }
}
