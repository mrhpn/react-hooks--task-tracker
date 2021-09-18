import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classes, text, onClick }) => {
    return (
        <button onClick={onClick} className={classes} >{text}</button>
    );
}

Button.defaultProps = {
    classes: "bg-indigo-600 rounded-xl text-white px-2 shadow-lg hover:shadow-none text-xs"
}

Button.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
