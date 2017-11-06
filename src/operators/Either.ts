import Operator from './Operator';

export class Either implements Operator {
    public operator: string = 'Either';

    public apply(operand1: number, operand2: number): number {
        return (operand1 + operand2) - (operand1 * operand2);
    }
}

export default Either;