import Operator from './Operator';

export class CombinedWith implements Operator {
    public operator: string = 'CombinedWith';

    public apply(operand1: number, operand2: number): number {
        return operand1 * operand2;
    }
}

export default CombinedWith;