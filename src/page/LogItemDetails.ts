export class LogItemDetails {
    date: Date;
    author: string;
    leftOperand: number;
    operator: string;
    rightOperand: number;
    result: number;

    static asCookie(item: LogItemDetails): string {
        return `${item.date.getTime()} ${item.author} ${item.leftOperand} ` +
            `${item.operator} ${item.rightOperand} ${item.result}`;
    }

    constructor(details: string) {
        if (details) {
            let parts = details.split(' ');
            this.date = new Date(+parts[0]);
            this.author = parts[1];
            this.leftOperand = +parts[2];
            this.operator = parts[3];
            this.rightOperand = +parts[4];
            this.result = +parts[5];
        }
    }
}

export default LogItemDetails;