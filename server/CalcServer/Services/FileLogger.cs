using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CalcServer.Models;

namespace CalcServer.Services
{
    public class FileLogger : ICalculationLogger
    {
        private readonly IList<CalculationModel> logs;

        public FileLogger(string fileLocation)
        {
            if (File.Exists(fileLocation))
            {
                logs = File.ReadAllLines(fileLocation).Reverse()
                    .Select(l => );
            }
            else
            {
                File.Create(fileLocation);
                logs = new List<CalculationModel>();
            }
        }

        private CalculationModel GetCalculationModel(string log)
        {
            try
            {
                var parts = log.Split(' ');
                return new CalculationModel
                {
                    Date
                };
            }
            catch
            {
                throw new FormatException($"Log invalid. Line [[{log}]] could not be parsed.");
            }
        }

        public void LogCalculation(CalculationModel model)
        {
            throw new System.NotImplementedException();
        }
    }
}