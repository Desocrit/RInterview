import * as React from 'react';
import './LogItem.css';
import LogItemDetails from './LogItemDetails';
const dateFormat = require('dateformat');

interface LogItemProps {
    index: number;
    details: LogItemDetails;
}

/** Each item in the list is handled by this class - mostly for simplification */
class LogItem extends React.Component <LogItemProps> {
    constructor(props: LogItemProps) {
        super(props);
    }

    getCalculation(): string {
        let calc = this.props.details;
        return `${calc.leftOperand} ${calc.operation} ${calc.rightOperand} = ${calc.result}`;
    }

    render() {
        return (
            <div className={'mui-col-xs-12 LogItem l' + (this.props.index + 1)}>
                <div className="mui-col-xs-12 mui-col-sm-5 date">
                    {dateFormat(this.props.details.date, 'dd/mm/yy - HH:MM')}
                </div>
                <div className="mui-col-xs-12 mui-col-sm-3 author">
                    {this.props.details.author}
                </div>
                <div className="mui-col-xs-12 mui-col-sm-4 calculation">
                    {this.getCalculation()}
                </div>
            </div>
        );
    }
}

export default LogItem;