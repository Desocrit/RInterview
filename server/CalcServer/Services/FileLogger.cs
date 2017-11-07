using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CalcServer.Models;

namespace CalcServer.Services
{
    public class FileLogger : ICalculationLogger
    {
        private readonly string _fileLocation;

        public FileLogger(string fileLocation)
        {
            _fileLocation = fileLocation;
            if (File.Exists(fileLocation)) return;

            FileStream handle = File.Create(fileLocation);
            handle.Dispose();
        }

        private static CalculationModel GetCalculationModel(string log)
        {
            try
            {
                string[] parts = log.Split(' ');
                return new CalculationModel
                {
                    Date = new DateTime(int.Parse(parts[0])),
                    Author = parts[1],
                    LeftOperand = int.Parse(parts[2]),
                    Operation = parts[3],
                    RightOperand = int.Parse(parts[4]),
                    Result = int.Parse(parts[5])
                };
            }
            catch
            {
                throw new FormatException($"Log invalid. Line [[{log}]] could not be parsed.");
            }
        }

        /// <inheritdoc />
        public async Task<IEnumerable<CalculationModel>> GetLogs()
        {
            using (StreamReader reader = File.OpenText(_fileLocation))
            {
                string content = await reader.ReadToEndAsync().ConfigureAwait(false);
                return GetModel(content);
            }
        }

        private static IEnumerable<CalculationModel> GetModel(string file)
        {
            return file
                .Split(new[] {Environment.NewLine}, StringSplitOptions.None)
                .Reverse()
                .Where(l => !string.IsNullOrWhiteSpace(l))
                .Select(GetCalculationModel).ToList();
        }

        private static string CreateLog(CalculationModel model)
        {
            return $"{model.Date.Ticks} {model.Author} {model.LeftOperand} " +
                   $"{model.Operation} {model.RightOperand} {model.Result}";
        }

        /// <inheritdoc />
        public Task LogCalculation(CalculationModel model)
        {
            string log = CreateLog(model);
            using (StreamWriter sw = File.AppendText(_fileLocation))
            {
                return sw.WriteLineAsync(log);
            }
        }
    }
}