import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={ h1Style }>Task Tracker App</h1>
            <p>This is { title } </p>
        </header>
    )
}

Header.defaultProps = {
    title: 'Moseti',
}
Header.propTypes = {
    title: PropTypes.string.isRequired, 
}

const h1Style = {
    color:'green',
    backgroundColor:'black',
}
export default Header;