using Xunit;

namespace Golad.Tests
{
    public class ExampleTests
    {
        [Fact]
        public void PassingTest()
        {
            var a = 1;
            var b = 1;

            var result = a + b;

            Assert.Equal(2, result);
        }
    }
}
