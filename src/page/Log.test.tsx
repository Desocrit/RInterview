import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Log from './Log';
import LogItemDetails from './LogItemDetails'

let createLogDetails = function(n: number) : LogItemDetails {
    return {
        date: new Date(n, 1, 2, 3, 4),
        author: `Person{n} `,
        leftOperand: n,
        operator: `+ ${n} +`,
        rightOperand: n + 3,
        result:  (n * 3) + 3
    }
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Log items={[createLogDetails(4)]}/>, div);
});
