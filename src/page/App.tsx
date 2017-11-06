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

interface AppProps {}

interface AppState {
    logs: LogItemDetails[];
}

class App extends React.Component <AppProps, AppState> {
    static testItems(): LogItemDetails[] {
        return [{
            date: new Date(),
            author: 'bob',
            leftOperand: 1.0,
            operator: '-',
            rightOperand: 1.0,
            result: 45
        }, {
            date: new Date(),
            author: 'bib',
            leftOperand: 1.0,
            operator: '+',
            rightOperand: 1.0,
            result: 45
        }, {
            date: new Date(),
            author: 'bab',
            leftOperand: 1.0,
            operator: '*',
            rightOperand: 1.0,
            result: 45
        }, {
            date: new Date(),
            author: 'bab',
            leftOperand: 0.5,
            operator: '/',
            rightOperand: 0.5,
            result: 12
        }];
    }

    static getOperators(): Operator[] {
        return [new Either() as Operator, new CombinedWith() as Operator];
    }

    constructor(props: AppProps) {
        super(props);
        this.onCalculate = this.onCalculate.bind(this);
        this.state = {
            logs: App.testItems()
        };
    }

    onCalculate(state: CalculatorState): void {
        let newItem: LogItemDetails = {
            date: new Date(),
            author: 'TODO',
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
