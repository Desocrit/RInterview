import * as React from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Log from './Log';
import Either from '../operators/Either';
import Operator from '../operators/Operator';
import CombinedWith from '../operators/CombinedWith';

class App extends React.Component {
    getOperators(): Operator[] {
        return [new Either() as Operator, new CombinedWith() as Operator];
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Calculator operators={this.getOperators()} />
                <Log items={Log.testItems()} />
            </div>
        );
    }
}

export default App;
