using System;
using System.Collections.Generic;
using System.Linq;
using CalcServer.Models;

namespace CalcServer.Services
{
    /// <summary> Calculator that aggregates various strategies for calculation. </summary>
    public class AggregateCalculator : ICalculator
    {
        private readonly IEnumerable<IBinaryCalculation> _strategies;

        /// <summary>
        /// Constructs a new instance.
        /// </summary>
        /// <param name="strategies"> Strategies to implement. </param>
        public AggregateCalculator(IEnumerable<IBinaryCalculation> strategies)
        {
            _strategies = strategies ?? Enumerable.Empty<IBinaryCalculation>();
        }

        /// <inheritdoc />
        public float Solve(CalculationCommand command)
        {
            IBinaryCalculation calculator = _strategies
                .FirstOrDefault(x => x.Operation == command.Operation);
            if (calculator == null)
            {
                throw new ArgumentException($"No strategy found for operator {command.Operation}");
            }
            return calculator.Apply(command.LeftOperand, command.RightOperand);
        }

        public IEnumerable<string> GetSupportedOperations()
        {
            return _strategies.Select(x => x.Operation);
        }
    }
}