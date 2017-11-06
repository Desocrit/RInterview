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

const publicIp = require('public-ip');

interface AppProps {}

interface AppState {
    logs: LogItemDetails[];
    ip: string;
}

class App extends React.Component <AppProps, AppState> {
    static getOperators(): Operator[] {
        return [new Either() as Operator, new CombinedWith() as Operator];
    }

    constructor(props: AppProps) {
        super(props);
        this.onCalculate = this.onCalculate.bind(this);
        this.state = {
            logs: [],
            ip: 'unknown'
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
        this.setState({
            logs: [newItem].concat(this.state.logs)
        });
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
