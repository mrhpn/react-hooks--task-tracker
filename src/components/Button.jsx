import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ bgColor, classes, text, onClick }) => {
    return (
        <button onClick={onClick} className={classes + ' ' + bgColor} >{text}</button>
    );
}

Button.defaultProps = {
    bgColor: "bg-indigo-600",
    classes: "rounded-full text-white px-2 shadow-lg hover:shadow-none text-xs"
}

Button.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
