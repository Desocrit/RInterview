using System.Configuration;
using CalcServer.Services;
using SimpleInjector;

namespace CalcServer
{
    public class DiConfig
    {
        public Container GetContainer()
        {
            Container container = new Container();
            RegisterServices(container);
            container.Verify();
            return container;
        }

        private static void RegisterServices(Container container)
        {
            container.RegisterCollection<IBinaryCalculation>(new Either(), new CombinedWith());
            container.RegisterSingleton<ICalculator, AggregateCalculator>();
            string fileLocation = ConfigurationManager.AppSettings["filename"];
            container.RegisterSingleton<ICalculationLogger>(new FileLogger(fileLocation));
        }
    }
}