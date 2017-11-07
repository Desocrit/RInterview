import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './page/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App isOnline={true}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
