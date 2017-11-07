import Operator from './Operator';

/** Operator for combining (multiplying) two probabilities */
export class CombinedWith implements Operator {
    public operator: string = 'CombinedWith';

    public apply(operand1: number, operand2: number): Promise <number> {
        return new Promise(resolve => {
            resolve(operand1 * operand2);
        });
    }
}

export default CombinedWith;