namespace CalcServer.Services
{
    /// <summary>
    /// Interface representing a calculation type.
    /// </summary>
    public interface IBinaryCalculation
    {
        /// <summary> Gets the operand of this calculation. </summary>
        /// <returns> Operation </returns>
        string Operation { get; }

        /// <summary> Executes the calculation. </summary>
        /// <param name="leftOperand"> Left operand. </param>
        /// <param name="rightOperand"> Right operand. </param>
        /// <returns> Result of the calculation. </returns>
        int Apply(int leftOperand, int rightOperand);
    }
}