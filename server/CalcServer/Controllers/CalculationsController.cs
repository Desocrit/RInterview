using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using CalcServer.Models;
using CalcServer.Services;

namespace CalcServer.Controllers
{
    [RoutePrefix("calculation")]
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
        public Task<int> Solve(CalculationCommand command)
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
            _logger.LogCalculation(model);
            return Task.FromResult(result);
        }
    }
}