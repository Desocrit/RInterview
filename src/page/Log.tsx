import * as React from 'react';
import './Log.css';
import LogItem from './LogItem';
import LogItemDetails from './LogItemDetails';
const Select = require('muicss/lib/react/select');
const Option = require('muicss/lib/react/option');

interface LogProps {
    items: LogItemDetails[];
}

interface CachedItems {
    dates: string[];
    operators: string[];
    authors: string[];
}

class Log extends React.Component <LogProps> {

    cache: CachedItems;

    static createCache(items: LogItemDetails[]): CachedItems {
        let dates = new Set <string> ();
        let operators = new Set <string> ();
        let authors = new Set <string> ();
        for (let log of items) {
            let dateStr: string = log.date.toLocaleDateString();
            dates.add(dateStr);
            operators.add(log.operator);
            authors.add(log.author);
        }
        return {
            dates: Array.from(dates),
            operators: Array.from(operators),
            authors: Array.from(authors)
        };
    }

    static testItems(): LogItemDetails[] {
        return [{
                    date: new Date(),
                    author: 'bob',
                    leftOperand: 1.0,
                    operator: '-',
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
                    operator: '/',
                    rightOperand: 0.5,
                    result: 12
                }];
    }

    constructor(props: LogProps) {
        super(props);
        this.cache = Log.createCache(props.items);
    }

    render() {
        return (
            <div className="Log">
                <div className="log-spacer" />
                <div className="log-controls mui-col-sm-10 mui-col-sm-offset-1">
                    <div className="mui-col-sm-5">
                        <Select label="Date">
                            <Option key="any" name="any" label="Any" />
                            {this.cache.dates.map(date =>
                                <Option key={date} name={date} label={date} />
                            )}
                        </Select>
                    </div>
                    <div className="mui-col-sm-3">
                        <Select label="Author">
                            <Option key="any" name="any" label="Any" />
                            {this.cache.authors.map(author =>
                                <Option key={author} name={author} label={author} />
                            )}
                        </Select>
                    </div>
                    <div className="mui-col-sm-4">
                        <Select label="Operator">
                            <Option key="any" name="any" label="Any" />
                            {this.cache.operators.map(operator =>
                                <Option key={operator} name={operator} label={operator} />
                            )}
                        </Select>
                    </div>

                </div>
                <div className="filters mui-col-sm-10 mui-col-sm-offset-1">
                    {this.props.items.map((l, i) =>
                        <LogItem index={i} details={l} key={i}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Log;