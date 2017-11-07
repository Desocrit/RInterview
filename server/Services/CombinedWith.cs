namespace CalcServer.Services
{
    public class CombinedWith : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operand => "CombinedWith";

        /// <inheritdoc />
        public int Apply(int leftOperand, int rightOperand)
        {
            return leftOperand * rightOperand;
        }
    }
}