import * as React from 'react';
import './Log.css';
import LogItem from './LogItem';
import LogItemDetails from './LogItemDetails';
const Container = require('muicss/lib/react/container');

interface LogProps {
    items: LogItemDetails[];
}

class Log extends React.Component <LogProps> {
    constructor(props: any) {
        super(props);
    }

    testItems() : LogProps {
        return {
            items: [
                {
                    date: new Date(),
                    author: 'bob',
                    leftOperand: 1.0,
                    operator: '*',
                    rightOperand: 1.0,
                    result: 45
                }, {
                    date: new Date(),
                    author: 'bib',
                    leftOperand: 1.0,
                    operator: '+',
                    rightOperand: 1.0,
                    result: 45
                }, {
                    date: new Date(),
                    author: 'bab',
                    leftOperand: 1.0,
                    operator: '*',
                    rightOperand: 1.0,
                    result: 45
                }, {
                    date: new Date(),
                    author: 'bab',
                    leftOperand: 0.5,
                    operator: '*',
                    rightOperand: 0.5,
                    result: 12
                }
            ]
        };
    }

    render() {
        return (
            <div className="Log">
                <div className="log-spacer" />
                <Container>
                    <div className="filters mui-col-sm-10 mui-col-sm-offset-1">
                        {this.testItems().items.map((l, i) =>
                            <LogItem index={i} details={l} key={i}/>
                        )}
                    </div>
                </Container>
            </div>
        );
    }
}

export default Log;