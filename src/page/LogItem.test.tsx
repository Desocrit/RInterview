import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LogItemDetails from './LogItemDetails';
import LogItem from './LogItem';

let createLogDetails = function() : LogItemDetails {
    return {
        date: new Date(),
        author:'God',
        leftOperand: 4,
        operation: '+',
        rightOperand: 5,
        result:  6
    }
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LogItem index={0} details={createLogDetails()} />, div);
});

it('displays dates correctly', () => {
    const div = document.createElement('div');
    let details = createLogDetails();
    details.date = new Date(10, 11, 12, 13, 14, 15, 0);
    ReactDOM.render(<LogItem index={0} details={details} />, div);
    let itemDate = div
        .getElementsByClassName('LogItem')[0]
        .getElementsByClassName('date')[0]
        .innerHTML;
    expect(itemDate).toBe(`${details.date.getDate()}/${details.date.getMonth() + 1}/` +
        `${details.date.getFullYear() % 100} - ${details.date.getHours()}:${details.date.getMinutes()}`);
});

it('displays author', () => {
    const div = document.createElement('div');
    let details = createLogDetails();
    ReactDOM.render(<LogItem index={0} details={details} />, div);
    let itemDate = div
        .getElementsByClassName('LogItem')[0]
        .getElementsByClassName('author')[0]
        .innerHTML;
    expect(itemDate).toBe(details.author);
});

it('displays calculation correctly', () => {
    const div = document.createElement('div');
    let details = createLogDetails();
    ReactDOM.render(<LogItem index={0} details={details} />, div);
    let itemDate = div
        .getElementsByClassName('LogItem')[0]
        .getElementsByClassName('calculation')[0]
        .innerHTML;
    expect(itemDate).toBe(`${details.leftOperand} ${details.operation}` +
        ` ${details.rightOperand} = ${details.result}`);
});