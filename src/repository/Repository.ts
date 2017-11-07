import LogItemDetails from '../page/LogItemDetails'

/** Repository to use for retrieving logs */
interface Repository {
    setRepository(location: string): void;

    type: string;

    getAll(): Promise <LogItemDetails[]>

    store(log: LogItemDetails): void;
}

export default Repository;