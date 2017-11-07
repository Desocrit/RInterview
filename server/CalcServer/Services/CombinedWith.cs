namespace CalcServer.Services
{
    public class CombinedWith : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operation => "CombinedWith";

        /// <inheritdoc />
        public double Apply(double leftOperand, double rightOperand)
        {
            return leftOperand * rightOperand;
        }
    }
}