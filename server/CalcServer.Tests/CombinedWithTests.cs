using CalcServer.Services;
using NUnit.Framework;
using Shouldly;

namespace CalcServer.Tests
{
    [TestFixture]
    public class CombinedWithTests
    {
        [TestFixture]
        public class Apply : CombinedWithTests
        {
            [Test]
            public void BothOnes_ShouldReturnOne()
            {
                // Arrange
                var cw = new CombinedWith();

                // Act
                var result = cw.Apply(1, 1);

                // Assert
                result.ShouldBe(1);
            }

            [Test]
            public void BothZero_ShouldReturnZero()
            {
                // Arrange
                var cw = new CombinedWith();

                // Act
                var result = cw.Apply(0, 0);

                // Assert
                result.ShouldBe(0);
            }

            [Test]
            public void BothDifferent_ShouldReturnSum()
            {
                // Arrange
                var cw = new CombinedWith();

                // Act
                var result = cw.Apply(0.3, 0.75);

                // Assert
                result.ShouldBe(0.3 * 0.75);
            }
        }
    }
}
