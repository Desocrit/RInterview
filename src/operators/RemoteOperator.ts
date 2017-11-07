import Operator from './Operator';
const http = require('request');

/** General purpose remote operator for use with HTTP. */
export class RemoteOperator implements Operator {
    public operator: string;
    remote: string;

    constructor(operator: string, remote: string) {
        this.operator = operator;
        this.remote = remote;
    }

    public apply(operand1: number, operand2: number): Promise <number> {
        return new Promise ((resolve, reject) => {
            http(`${this.remote}?LeftOperand=${operand1}&Operation=${this.operator}&RightOperand=${operand2}`,
                 function(err: string, response: string, result: string) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(result));
                    }
                 });
        });
    }
}

export default RemoteOperator;