namespace CalcServer.Services
{
    public class Either : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operation => "Either";

        /// <inheritdoc />
        public double Apply(double leftOperand, double rightOperand)
        {
            return leftOperand+rightOperand - leftOperand*rightOperand;
        }
    }
}