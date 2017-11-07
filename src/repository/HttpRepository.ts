import Repository from './Repository';
import LogItemDetails from '../page/LogItemDetails';
const http = require('request');

/** Repository that provides logs from a HTTP server. */
class HttpRepository implements Repository {
    public type: string;
    private repository: string;

    constructor() {
        this.type = 'http';
        this.repository = 'default';
    }

    setRepository(location: string): void {
        this.repository = location;
    }

    getAll(): Promise <LogItemDetails[]> {
        return new Promise((resolve, reject) => {
            http(this.repository,
                 function(err: string, response: string, result: string) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(result));
                    }
                 });
        });
    }

    store(log: LogItemDetails): void {
        http.post({
            uri: this.repository,
            method: 'POST',
            body: {
                date: log.date.toISOString(),
                author: log.author,
                leftOperand: log.leftOperand,
                operation: log.operation,
                rightOperand: log.rightOperand,
                result: log.result
            },
            json: true
        });
    }
}

export default HttpRepository;