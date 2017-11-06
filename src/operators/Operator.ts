interface Operator {
    operator: string;

    apply(operand1: number, operand2: number): number;
}

export default Operator;