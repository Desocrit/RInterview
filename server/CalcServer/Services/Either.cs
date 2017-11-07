namespace CalcServer.Services
{
    public class Either : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operation => "Either";

        /// <inheritdoc />
        public float Apply(float leftOperand, float rightOperand)
        {
            return leftOperand+rightOperand - leftOperand*rightOperand;
        }
    }
}