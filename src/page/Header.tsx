import * as React from 'react';
import './Header.css';
const Appbar = require('muicss/lib/react/appbar');

class Header extends React.Component {
    render() {
        return (
            <Appbar>
                <table>
                    <tr className="mui--appbar-height">
                        <td className="mui-container-fluid mui--text-title">
                            Calculator
                        </td>
                        <td className="mui--text-right">
                        </td>
                    </tr>
                </table>
            </Appbar>
        );
    }
}

export default Header;