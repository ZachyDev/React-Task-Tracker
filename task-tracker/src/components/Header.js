import React from 'react';

const Header = ({ name }) => {
    return (
        <header>
            <h1>Task Tracker App</h1>
            <p>This is { name } </p>
        </header>
    )
}

Header.defaultProps = {
    name: 'Moseti',
}
export default Header;