import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button color="green" text="Add Task"/>
            <Button color="grey" text="Update Task"/>
            <Button color="red" text="Delete Task"/>
         
        </header>
    )
}

Header.defaultProps = {
    title: 'Moseti',
}
Header.propTypes = {
    title: PropTypes.string.isRequired, 
}

// const h1Style = {
//     color:'green',
//     backgroundColor:'black',
// }
export default Header;