import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <header>
            <h1>Task Tracker App</h1>
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
export default Header;