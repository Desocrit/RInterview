import * as React from 'react';
import './Header.sass';
const Appbar = require('muicss/lib/react/appbar');
const logo = require('../logo.svg');

class Header extends React.Component {
    render() {
        return (
            <Appbar>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </Appbar>
        );
    }
}

export default Header;