import * as React from 'react';
import Operator from '../operators/Operator';
const Container = require('muicss/lib/react/container');
const Input = require('muicss/lib/react/input');
const Select = require('muicss/lib/react/select');
const Option = require('muicss/lib/react/option');
const Panel = require('muicss/lib/react/panel');
import './Calculator.css';

interface CalculatorProps {
    operators: Operator[];
}

interface CalculatorState {
    leftOperand: number;
    operator: string;
    rightOperand: number;
}

class Calculator extends React.Component <CalculatorProps, CalculatorState> {
    constructor(props: CalculatorProps) {
        super(props);
        this.setLeftOperand = this.setLeftOperand.bind(this);
        this.setOperator = this.setOperator.bind(this);
        this.setRightOperand = this.setRightOperand.bind(this);
        this.state = {
            leftOperand: 0,
            operator: this.props.operators[0].operator,
            rightOperand: 0,
        }
    }

    setLeftOperand(event: HTMLSelectElement) {
        this.setState({leftOperand: +event.target.value});
    }

    setOperator(event: HTMLSelectElement) {
        this.setState({operator: event.target.value});
    }

    setRightOperand(event: HTMLSelectElement) {
        this.setState({rightOperand: +event.target.value});
    }

    getResult(): number {
        return this.props.operators.filter(v => v.operator === this.state.operator)[0]
            .apply(this.state.leftOperand, this.state.rightOperand);
    }

    render() {
        return (
            <Container fluid={true} className="calculator">
                <div className="panel-body mui-col-sm-10 mui-col-sm-offset-1">
                    <div className="mui-col-xs-12 mui-col-sm-3 mui-col-lg-2">
                        <Input defaultValue="0" onChange={this.setLeftOperand} />
                    </div>
                    <div className="mui-col-xs-12 mui-col-sm-6 mui-col-lg-4">
                        <Select name="operation" onChange={this.setOperator}>
                            {
                                this.props.operators.map(o =>
                                    <Option name={o.operator} label={o.operator} key={o.operator} />)
                            }
                        </Select>
                    </div>
                    <div className="mui-col-xs-12 mui-col-sm-3 mui-col-lg-2">
                        <Input defaultValue="0" onChange={this.setRightOperand} />
                    </div>
                    <div className="mui-col-xs-12 mui-col-lg-4 panel-holder">
                        <Panel>{this.getResult()}</Panel>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Calculator;