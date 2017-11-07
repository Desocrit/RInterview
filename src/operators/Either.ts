import Operator from './Operator';

/** Local 'Either' operator - P(X) + P(Y) - P(X)P(Y). */
export class Either implements Operator {
    public operator: string = 'Either';

    public apply(operand1: number, operand2: number): Promise <number> {
        return new Promise(resolve => {
            resolve((operand1 + operand2) - (operand1 * operand2));
        });
    }
}

export default Either;