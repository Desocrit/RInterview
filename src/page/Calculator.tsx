import * as React from 'react';
import Operator from '../operators/Operator';
const Container = require('muicss/lib/react/container');
const Input = require('muicss/lib/react/input');
const Select = require('muicss/lib/react/select');
const Option = require('muicss/lib/react/option');
const Button = require('muicss/lib/react/button');
const Panel = require('muicss/lib/react/panel');
import './Calculator.css';

interface CalculatorProps {
    operators: Operator[];
    onCalculate: Function;
}

export interface CalculatorState {
    active: boolean;
    valid: boolean;
    leftOperand: number;
    operator: string;
    rightOperand: number;
    result: number;
}

class Calculator extends React.Component <CalculatorProps, CalculatorState> {
    static isValid(val: number): boolean {
        return val <= 1 && val >= 0;
    }

    constructor(props: CalculatorProps) {
        super(props);
        this.setLeftOperand = this.setLeftOperand.bind(this);
        this.setOperator = this.setOperator.bind(this);
        this.setRightOperand = this.setRightOperand.bind(this);
        this.getResult = this.getResult.bind(this);
        this.state = {
            active: false,
            valid: true,
            leftOperand: 0,
            operator: this.props.operators[0].operator,
            rightOperand: 0,
            result: this.props.operators[0].apply(0, 0)
        };
    }

    setLeftOperand(event: HTMLSelectElement) {
        this.setState({leftOperand: +event.target.value, active: false});
    }

    setOperator(event: HTMLSelectElement) {
        this.setState({operator: event.target.value, active: false});
    }

    setRightOperand(event: HTMLSelectElement) {
        this.setState({rightOperand: +event.target.value, active: false});
    }

    getResult(): void {
        if (!(Calculator.isValid(this.state.leftOperand)
                && Calculator.isValid(this.state.rightOperand))) {
            return;
        }
        let result = this.props.operators.filter(v => v.operator === this.state.operator)[0]
            .apply(this.state.leftOperand, this.state.rightOperand);
        this.setState({result: result, active: true}, () => this.props.onCalculate(this.state));
    }

    render() {
        return (
            <Container fluid={true} className="calculator">
                <div className="panel-body mui-col-sm-10 mui-col-sm-offset-1">
                    <div className="leftOperand mui-col-xs-12 mui-col-sm-3 mui-col-lg-2">
                        <Input
                            defaultValue="0"
                            onChange={this.setLeftOperand}
                            invalid={!Calculator.isValid(this.state.leftOperand)}
                        />
                    </div>
                    <div className="operator mui-col-xs-12 mui-col-sm-6 mui-col-lg-4">
                        <Select name="operation" onChange={this.setOperator}>
                            {
                                this.props.operators.map(o =>
                                    <Option name={o.operator} label={o.operator} key={o.operator} />)
                            }
                        </Select>
                    </div>
                    <div className="rightOperand mui-col-xs-12 mui-col-sm-3 mui-col-lg-2">
                        <Input
                            defaultValue="0"
                            onChange={this.setRightOperand}
                            invalid={!Calculator.isValid(this.state.rightOperand)}
                        />
                    </div>
                    <div className="resultsPanel mui-col-xs-12 mui-col-lg-4 panel-holder">
                        {
                            this.state.active ?
                                <Panel>{this.state.result}</Panel> :
                                <Button variant="raised" onClick={this.getResult} > Solve </Button>
                        }
                    </div>
                </div>
            </Container>
        );
    }
}

export default Calculator;