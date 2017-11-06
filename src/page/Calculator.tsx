import * as React from 'react';
const Container = require('muicss/lib/react/container');
const Input = require('muicss/lib/react/input');
const Select = require('muicss/lib/react/select');
const Option = require('muicss/lib/react/option');
const Panel = require('muicss/lib/react/panel');
import './Calculator.css';

interface CalculatorProps { }

interface CalculatorState {
    value: string;
}

class Calculator extends React.Component <CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.state = {
            value: 'hello'
        };
    }

    render() {
        return (
            <Container fluid={true}>
                <div className="panel-body mui-col-sm-10 mui-col-sm-offset-1">
                    <div className="mui-col-xs-12 mui-col-sm-3 mui-col-lg-2">
                        <Input defaultValue="1" />
                    </div>
                    <div className="mui-col-xs-12 mui-col-sm-6 mui-col-lg-4">
                        <Select name="operation">
                            <Option name="CombinedWith" label="CombinedWith" />
                            <Option name="Either" label="Either" />
                            {/* TODO: Make this fluid */}
                        </Select>
                    </div>
                    <div className="mui-col-xs-12 mui-col-sm-3 mui-col-lg-2">
                        <Input defaultValue="1" />
                    </div>
                    <div className="mui-col-xs-12 mui-col-lg-4 panel-holder">
                        <Panel>{this.state.value}</Panel>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Calculator;