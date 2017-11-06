import * as React from 'react';
import './LogItem.css';
import LogItemDetails from './LogItemDetails';
const dateFormat = require('dateformat');

interface LogItemProps {
    index: number;
    details: LogItemDetails;
}

class LogItem extends React.Component <LogItemProps> {
    constructor(props: LogItemProps) {
        super(props);
    }

    getCalculation(): string {
        let calc = this.props.details;
        return `${calc.leftOperand} ${calc.operator} ${calc.rightOperand} = ${calc.result}`;
    }

    render() {
        return (
            <div className={'mui-col-xs-12 LogItem l' + (this.props.index + 1)}>
                <div className="mui-col-xs-12 mui-col-sm-5">
                    {dateFormat(this.props.details.date, 'dd/mm/yy - HH:MM')}
                </div>
                <div className="mui-col-xs-12 mui-col-sm-3">
                    {this.props.details.author}
                </div>
                <div className="mui-col-xs-12 mui-col-sm-4">
                    {this.getCalculation()}
                </div>
            </div>
        );
    }
}

export default LogItem;