namespace CalcServer.Models
{
    /// <summary>
    /// A class representing an invidiaul calculation to be made.
    /// </summary>
    public class CalculationCommand
    {
        /// <summary> First of the values to be summated. </summary>
        public int LeftOperand { get; set; }

        /// <summary> Operation to perform. </summary>
        public string Operation { get; set; }

        /// <summary> Second of the values to be summated. </summary>
        public int RightOperand { get; set; }
    }
}