using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using CalcServer.Models;
using CalcServer.Services;

namespace CalcServer.Controllers
{
    [RoutePrefix("api/calculation")]
    public class CalculationsController : ApiController
    {
        private readonly ICalculator _calculator;
        private readonly ICalculationLogger _logger;

        /// <summary> Constructs a new instance. </summary>
        /// <param name="calculator"> Calculator used to perform calculations. </param>
        /// <param name="logger"> Logger used to log calculations </param>
        /// <inheritdoc />
        public CalculationsController(ICalculator calculator, ICalculationLogger logger)
        {
            _calculator = calculator;
            _logger = logger;
        }

        [HttpPost]
        [Route("")]
        public async Task<int> Solve(CalculationCommand command)
        {
            int result = _calculator.Solve(command);
            string author = HttpContext.Current.Request.UserHostAddress;
            CalculationModel model = new CalculationModel
            {
                LeftOperand = command.LeftOperand,
                Operation = command.Operation,
                RightOperand = command.RightOperand,
                Author = author,
                Result = result
            };
            // This should be done in a background thread in a real app.
            await _logger.LogCalculation(model);
            return result;
        }
    }
}