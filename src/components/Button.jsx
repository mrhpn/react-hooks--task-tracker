import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ bgColor, classes, text, formVisibiliry,  onClick }) => {
    return (
        <button onClick={onClick} className={classes + ' ' + bgColor} >
            {
                formVisibiliry 
                ?
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
            }
            { ' ' }
            {text}
        </button>
    );
}

Button.defaultProps = {
    bgColor: "bg-indigo-600",
    classes: "rounded-full px-2 text-white py-0 shadow-lg hover:shadow-none text-xs  tracking-wider"
}

Button.propTypes = {
    classes: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button;
