namespace CalcServer.Services
{
    public class Either : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operation => "Either";

        /// <inheritdoc />
        public int Apply(int leftOperand, int rightOperand)
        {
            return leftOperand+rightOperand - leftOperand*rightOperand;
        }
    }
}