using System.Collections.Generic;
using System.Web.Http;
using CalcServer.Models;

namespace CalcServer.Controllers
{
    [RoutePrefix("calculation")]
    public class CalculationsController : ApiController
    {
        [HttpPost]
        [Route("")]
        public IEnumerable<string> Post(CalculationCommand command)
        {
            return new[] { "value1", "value2" };
        }
    }
}