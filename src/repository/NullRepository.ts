import Repository from './Repository';
import LogItemDetails from '../page/LogItemDetails';

/** Repository that provides no logs - for testing. */
class NullRepository implements Repository {
    public type: string;

    constructor() {
        this.type = 'null';
    }

    setRepository(location: string): void {}

    getAll(): Promise <LogItemDetails[]> {
        return new Promise(r => r());
    }

    store(log: LogItemDetails): void {}
}

export default NullRepository;