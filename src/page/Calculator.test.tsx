import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calculator from './Calculator';
import Operator from '../operators/Operator'

let operator: Operator = {
    operator: 'X',
    apply: (x: number, y: number): Promise <number> => new Promise(r => r(x + y + 1))
};

function getOperators(): Operator[] {
    return [operator];
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculator onCalculate={() => {}} operators={getOperators()} />, div);
});

it('displays operation', () => {
    let operators = getOperators();
    const div = document.createElement('div');
    ReactDOM.render(<Calculator onCalculate={() => {}} operators={operators} />, div);
    let operator = div
        .getElementsByClassName('operation')[0]
        .children[0].children[0].children[0]
        .innerHTML;
    expect(operator).toBe(operators[0].operator);
});

it('calculates correctly', () => {
    const div = document.createElement('div');
    let local: any = '';
    ReactDOM.render(<Calculator onCalculate={() => {}}
                                operators={getOperators()} ref={calc => local = calc || local} />, div);
    let element = div.getElementsByClassName('resultsPanel')[0]
        .children[0] as HTMLElement;
    element.click();
    expect(local.state.result).toBe(1);
});