/** Details of an item in a log. Also contains utility for parsing to and from string */
export class LogItemDetails {
    date: Date;
    author: string;
    leftOperand: number;
    operation: string;
    rightOperand: number;
    result: number;

    static asCookie(item: LogItemDetails): string {
        return `${item.date.getTime()} ${item.author} ${item.leftOperand} ` +
            `${item.operation} ${item.rightOperand} ${item.result}`;
    }

    constructor(details: string) {
        if (details) {
            let parts = details.split(' ');
            this.date = new Date(parts[0]);
            this.author = parts[1];
            this.leftOperand = +parts[2];
            this.operation = parts[3];
            this.rightOperand = +parts[4];
            this.result = +parts[5];
        }
    }
}

export default LogItemDetails;