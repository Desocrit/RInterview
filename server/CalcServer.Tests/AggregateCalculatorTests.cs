
using System;
using System.Linq;
using CalcServer.Models;
using CalcServer.Services;
using NSubstitute;
using NUnit.Framework;
using Shouldly;

namespace CalcServer.Tests
{
    [TestFixture]
    public class AggregateCalculatorTests
    {
        private static IBinaryCalculation CreateMockCalculation(string name = null)
        {
            var calculation = Substitute.For<IBinaryCalculation>();
            calculation.Operation.Returns(name);
            return calculation;
        }

        [TestFixture]
        public class SolveMethod : AggregateCalculatorTests
        {
            [Test]
            public void NoStrategy_ThrowsException()
            {
                // Arrange
                var calculations = Enumerable.Empty<IBinaryCalculation>();
                var calculator = new AggregateCalculator(calculations);

                // Act
                Action run = () => calculator.Solve(new CalculationCommand());

                // Assert
                run.ShouldThrow<ArgumentException>();
            }

            [Test]
            public void ValidStrategy_CallsStrategy()
            {
                // Arrange
                var calculation = CreateMockCalculation();
                var calculations = Enumerable.Repeat(calculation, 1);
                var calculator = new AggregateCalculator(calculations);

                // Act
                calculator.Solve(new CalculationCommand());

                // Assert
                calculation.Received().Apply(0, 0);
            }
        }

        [TestFixture]
        public class GetSupportedOperations : AggregateCalculatorTests
        {
            [Test]
            public void MultipleStrategies_ShouldAggregate()
            {
                // Arrange
                var calculation = Substitute.For<IBinaryCalculation>();
                calculation.Operation.Returns((string)null);
                var calculations = Enumerable.Range(0, 10)
                    .Select(x => x.ToString())
                    .Select(CreateMockCalculation);
                var calculator = new AggregateCalculator(calculations);

                // Act
                var result = calculator.GetSupportedOperations();

                // Assert
                result.ShouldBe(Enumerable.Range(0, 10).Select(x => x.ToString()));
            }
        }
    }
}
