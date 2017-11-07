using CalcServer.Services;
using NUnit.Framework;
using Shouldly;

namespace CalcServer.Tests
{
    [TestFixture]
    public class EitherTests
    {
        [TestFixture]
        public class Apply : EitherTests
        {
            [Test]
            public void BothOnes_ShouldReturnOne()
            {
                // Arrange
                var either = new Either();

                // Act
                var result = either.Apply(1, 1);

                // Assert
                result.ShouldBe(1);
            }

            [Test]
            public void BothZero_ShouldReturnZero()
            {
                // Arrange
                var either = new Either();

                // Act
                var result = either.Apply(0, 0);

                // Assert
                result.ShouldBe(0);
            }

            [Test]
            public void BothDifferent_ShouldReturnSum()
            {
                // Arrange
                var either = new Either();

                // Act
                var result = either.Apply(0.3, 0.75);

                // Assert
                result.ShouldBe(0.3 + 0.75 - 0.3 * 0.75);
            }
        }
    }
}
