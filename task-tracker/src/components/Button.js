// import React from 'react';
const Button = ({color, text}) => {
    return(
        <button class="btn" style={{backgroundColor: color}}>{ text }</button>
    )
}

Button.defaultProps = {
    color: 'grey',
    text: 'default',
}
export default Button;