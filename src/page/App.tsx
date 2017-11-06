import * as React from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';
import Log from './Log';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
        <Log items={Log.testItems()} />
      </div>
    );
  }
}

export default App;
