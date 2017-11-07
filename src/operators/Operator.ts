/** Operator for use with the calculator */
interface Operator {
    operator: string;

    apply(operand1: number, operand2: number): Promise <number>;
}

export default Operator;