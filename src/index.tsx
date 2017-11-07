import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './page/App';
import registerServiceWorker from './registerServiceWorker';

const config = require('./config.json');

ReactDOM.render(
  <App {...config}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
