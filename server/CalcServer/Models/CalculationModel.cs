﻿using System;

namespace CalcServer.Models
{
    /// <summary> Model of a performed calculation, for logging. </summary>
    /// <inheritdoc cref="CalculationCommand"/>
    public class CalculationModel : CalculationCommand
    {
        /// <summary> Result of the calculation. </summary>
        public double Result { get; set; }

        /// <summary> User executing the calculation. </summary>
        public string Author { get; set; }

        /// <summary> Date the calculation occurred. </summary>
        public DateTime Date { get; set; }
    }
}