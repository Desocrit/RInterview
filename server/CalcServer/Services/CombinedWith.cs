namespace CalcServer.Services
{
    public class CombinedWith : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operation => "CombinedWith";

        /// <inheritdoc />
        public int Apply(int leftOperand, int rightOperand)
        {
            return leftOperand * rightOperand;
        }
    }
}