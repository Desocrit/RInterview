using System.Collections;
using System.Collections.Generic;
using CalcServer.Models;

namespace CalcServer.Services
{
    public interface ICalculator
    {
        /// <summary> Gets the solution for a given calculation command. </summary>
        /// <param name="command"> Command to execute. </param>
        /// <returns> The result of execution. </returns>
        double Solve(CalculationCommand command);

        /// <summary> Gets a list of supported operations. </summary>
        /// <returns> Operations supported by this calculator. </returns>
        IEnumerable<string> GetSupportedOperations();
    }
}