namespace CalcServer.Services
{
    public class CombinedWith : IBinaryCalculation
    {
        /// <inheritdoc />
        public string Operation => "CombinedWith";

        /// <inheritdoc />
        public float Apply(float leftOperand, float rightOperand)
        {
            return leftOperand * rightOperand;
        }
    }
}