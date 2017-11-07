using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using CalcServer.Models;

namespace CalcServer.Services
{
    /// <summary> Logger for calculations that were made. </summary>
    public interface ICalculationLogger
    {
        /// <summary> Logs a calculation as having occurred. </summary>
        /// <param name="model"> Calculation model to use. </param>
        Task LogCalculation(CalculationModel model);

        /// <summary> Gets the logs stored in a file. </summary>
        /// <returns> An enumerable of all logs stored in a file. </returns>
        Task<IEnumerable<CalculationModel>> GetLogs();
    }
}