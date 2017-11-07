using CalcServer.Models;

namespace CalcServer.Services
{
    public interface ICalculator
    {
        /// <summary> Gets the solution for a given calculation command. </summary>
        /// <param name="command"> Command to execute. </param>
        /// <returns> The result of execution. </returns>
        int Solve(CalculationCommand command);
    }
}