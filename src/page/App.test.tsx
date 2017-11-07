import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import NullRepository from '../repository/NullRepository'
import Either from '../operators/Either'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App userType={''} remoteUri={''} repository={new NullRepository()}
                         operators={[new Either()]} />, div);
});
