import * as React from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Log from './Log';
import LogItemDetails from './LogItemDetails';
import Repository from '../repository/Repository';
import Operator from '../operators/Operator';
import { CalculatorState } from './Calculator';

const publicIp = require('public-ip');

interface AppProps {
    userType: string;
    remoteUri: string;
    repository: Repository;
    operators: Operator[];
}

interface AppState {
    logs: LogItemDetails[];
    user: string;
}

/** The main body of the app - this component handles logging and interop. */
class App extends React.Component <AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.onCalculate = this.onCalculate.bind(this);
        this.state = {
            logs: [],
            user: 'unknown'
        };
        this.props.repository.getAll()
            .then((l: LogItemDetails[]) => this.setState({logs: l}));

        if (this.props.userType === 'ip') {
            publicIp.v4().then((ip: string) => this.setState({user: ip}));
        }
    }

    /** Logs a result once a calculation occurs. */
    onCalculate(state: CalculatorState): void {
        let newItem: LogItemDetails = {
            date: new Date(),
            author: this.state.user,
            leftOperand: state.leftOperand,
            operation: state.operator,
            rightOperand: state.rightOperand,
            result: state.result
        };
        this.props.repository.store(newItem);
        this.setState({logs: [newItem].concat(this.state.logs)});
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Calculator operators={this.props.operators} onCalculate={this.onCalculate} />
                <Log items={this.state.logs} />
            </div>
        );
    }
}

export default App;
