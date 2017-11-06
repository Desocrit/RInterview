import * as React from 'react';
import './Header.css';
const Appbar = require('muicss/lib/react/appbar');

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <Appbar>
                    <div className="mui-col-sm-10 mui-col-sm-offset-1">
                        <table>
                            <tr className="mui--appbar-height">
                                <td className="mui-container-fluid mui--text-title left-text">
                                    Calculator
                                </td>
                                <td className="mui--text-right" />
                            </tr>
                        </table>
                    </div>
                </Appbar>
            </header>
        );
    }
}

export default Header;