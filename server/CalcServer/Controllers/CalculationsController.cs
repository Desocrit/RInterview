﻿using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using CalcServer.Models;
using CalcServer.Services;

namespace CalcServer.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/calculation")]
    public class CalculationsController : ApiController
    {
        private readonly ICalculator _calculator;

        /// <summary> Constructs a new instance. </summary>
        /// <param name="calculator"> Calculator used to perform calculations. </param>
        /// <param name="logger"> Logger used to log calculations </param>
        /// <inheritdoc />
        public CalculationsController(ICalculator calculator)
        {
            _calculator = calculator;
        }

        [HttpGet]
        [Route]
        public double Solve([FromUri] CalculationCommand command)
            => _calculator.Solve(command);

        [HttpGet]
        [Route("operations")]
        public IEnumerable<string> GetSupportedOperations()
            => _calculator.GetSupportedOperations();
    }
}