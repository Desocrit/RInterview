import * as React from 'react';
import './App.css';
import Header from './Header';
import Calculator from './Calculator';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Calculator />
      </div>
    );
  }
}

export default App;
