import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './page/App';
import registerServiceWorker from './registerServiceWorker';
import CookieRepository from './repository/CookieRepository';
import HttpRepository from './repository/HttpRepository';
import Either from './operators/Either';
import Operator from './operators/Operator';
import CombinedWith from './operators/CombinedWith';
import RemoteOperator from './operators/RemoteOperator';

const http = require('request');
const config = require('./config.json');

let strategies = [new CookieRepository(), new HttpRepository()];
let strategy = strategies.filter(s => s.type === config.logStorage);
if (strategy.length !== 1) {
    throw 'Unsupported repository type: ' + config.logStorage;
}
let repository = strategy[0];
repository.setRepository(config.repository);

new Promise((resolve, reject) => {
    if (config.useRemote) {
        http(config.calculator + '/operations',
             function(err: string, response: string, result: string) {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(JSON.parse(result).map((r: string) => new RemoteOperator(r, config.calculator)));
                 }
             });
    } else {
        resolve([new Either(), new CombinedWith()]);
    }
}).then(
    (f: Operator[]) => {
        ReactDOM.render(
            <App userType={config.userType} remoteUri={config.calculator} repository={repository} operators={f} />,
            document.getElementById('root') as HTMLElement
        );
        registerServiceWorker();
},  e => { throw e; });
