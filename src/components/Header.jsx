import React from 'react';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = (e) => {
        console.log("click");
    }

    return (
        <header className="flex justify-between my-3 p-3">
            <h1 className="font-semibold text-2xl text-indigo-600">{title}</h1>
            <Button text="Create" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;
