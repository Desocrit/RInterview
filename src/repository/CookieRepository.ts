import Repository from './Repository';
import LogItemDetails from '../page/LogItemDetails';
const cookies = require('browser-cookies');

/** Repository that provides logs from cookies */
class CookieRepository implements Repository {
    public type: string;
    private repository: string;

    constructor() {
        this.type = 'cookie';
        this.repository = 'default';
    }

    setRepository(location: string): void {
        this.repository = location;
    }

    getAll(): Promise <LogItemDetails[]> {
        let cookie = cookies.get(this.repository, {signed: true});
        return new Promise((resolve) =>
            resolve(cookie ? cookie.split('\n')
                .map((c: string) => new LogItemDetails(c)) : [])
        );
    }

    store(log: LogItemDetails): void {
        let newCookie = LogItemDetails.asCookie(log);
        let cookie = cookies.get(this.repository, {signed: true});
        if (cookie) {
            newCookie = `${newCookie}\n${cookie}`;
        }
        cookies.set(this.repository, newCookie,
                    {expires: 365, signed: true});
    }
}

export default CookieRepository;