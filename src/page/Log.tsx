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

interface LogState {
    filters: {[id: string]: string};
}

class Log extends React.Component <LogProps, LogState> {
    cache: CachedItems;

    static createCache(items: LogItemDetails[]): CachedItems {
        let dates = new Set<string>();
        let operators = new Set<string>();
        let authors = new Set<string>();
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

    constructor(props: LogProps) {
        super(props);
        this.state = {
            filters: {}
        };
        this.cache = Log.createCache(props.items);
        this.filterItem = this.filterItem.bind(this);
    }

    createUpdateClosure(key: string): Function {
        return (event: HTMLSelectElement) => this.update(key, event.target.value);
    }

    update(key: string, value: string): void {
        let currentFilters = this.state.filters;
        if (value === 'Any') {
            delete currentFilters[key];
        } else {
            currentFilters[key] = value;
        }
        this.setState({
            filters: currentFilters
        });
    }

    createPicker(items: string[], name: string): JSX.Element {
        return (
            <Select label={name} onChange={this.createUpdateClosure(name)}>
                <Option key="any" name="any" label="Any" />
                {items.map(i =>
                    <Option key={i} name={i} label={i} />
                )}
            </Select>
        );
    }

    filterItem(item: LogItemDetails) {
        return (!this.state.filters.Author || this.state.filters.Author === item.author)
            && (!this.state.filters.Date || this.state.filters.Date === item.date.toLocaleDateString())
            && (!this.state.filters.Operator || this.state.filters.Operator === item.operator);
    }

    render() {
        return (
            <div className="Log">
                <div className="log-spacer" />
                <div className="log-controls mui-col-sm-10 mui-col-sm-offset-1">
                    <div className="date mui-col-sm-5">
                        {this.createPicker(this.cache.dates, 'Date')}
                    </div>
                    <div className="author mui-col-sm-3">
                        {this.createPicker(this.cache.authors, 'Author')}
                    </div>
                    <div className="operator mui-col-sm-4">
                        {this.createPicker(this.cache.operators, 'Operator')}
                    </div>
                </div>
                <div className="filters mui-col-sm-10 mui-col-sm-offset-1">
                    {this.props.items.filter(this.filterItem).map((l, i) =>
                        <LogItem index={i} details={l} key={i}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Log;