import * as React from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Log from './Log';
import LogItemDetails from './LogItemDetails';
import Either from '../operators/Either';
import Operator from '../operators/Operator';
import CombinedWith from '../operators/CombinedWith';
import { CalculatorState } from './Calculator';
const cookies = require('browser-cookies');

const publicIp = require('public-ip');

interface AppProps {}

interface AppState {
    logs: LogItemDetails[];
    ip: string;
    cookie: string;
}

class App extends React.Component <AppProps, AppState> {
    static readonly COOKIE_NAME: string = 'red_log';

    static getOperators(): Operator[] {
        return [new Either() as Operator, new CombinedWith() as Operator];
    }

    constructor(props: AppProps) {
        super(props);
        this.onCalculate = this.onCalculate.bind(this);
        let cookie = cookies.get(App.COOKIE_NAME, {signed: true});
        this.state = {
            logs: cookie ? cookie.split('\n')
                .map((c: string) => new LogItemDetails(c)) : [],
            ip: 'unknown',
            cookie: cookie ? cookie : ''
        };
        publicIp.v4().then((ip: string) => this.setState({ip: ip}));
    }

    onCalculate(state: CalculatorState): void {
        let newItem: LogItemDetails = {
            date: new Date(),
            author: this.state.ip,
            leftOperand: state.leftOperand,
            operator: state.operator,
            rightOperand: state.rightOperand,
            result: state.result
        };
        let newCookie = LogItemDetails.asCookie(newItem);
        if (this.state.cookie) {
            newCookie = `${newCookie}\n${this.state.cookie}`;
        }
        this.setState({
            logs: [newItem].concat(this.state.logs),
            cookie: newCookie
        });
        cookies.set(App.COOKIE_NAME, newCookie,
                    {expires: 365, signed: true});
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Calculator operators={App.getOperators()} onCalculate={this.onCalculate} />
                <Log items={this.state.logs} />
            </div>
        );
    }
}

export default App;
