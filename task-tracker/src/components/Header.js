import React from 'react';

const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker App</h1>
            <p>This is { props.name } </p>
        </header>
    )
}

export default Header;