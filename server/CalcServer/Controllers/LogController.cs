using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using CalcServer.Models;
using CalcServer.Services;

namespace CalcServer.Controllers
{
	/// <inheritdoc />
    [RoutePrefix("api/logs")]
    public class LogController : ApiController
    {
        private readonly ICalculationLogger _logger;
		
		/// <summary>
        /// Constructor
        /// </summary>
        /// <param name="logger"> Logger used to retrieve logs. </param>
        /// <inheritdoc />
        public LogController(ICalculationLogger logger)
        {
            _logger = logger;
        }

		[HttpGet]
		[Route]
        public Task<IEnumerable<CalculationModel>> GetAll() => _logger.GetLogs();
    }
}