import React from 'react';
import Button from './Button';

const Header = ({ title, addTaskFormVisibility, onAdd }) => {
    return (
        <header className="flex justify-between my-3 p-3">
            <h1 className="font-semibold text-2xl text-black">{title}</h1>
            <Button formVisibiliry={addTaskFormVisibility} bgColor={addTaskFormVisibility ? 'bg-red-500' : 'bg-indigo-600'} text={addTaskFormVisibility ? 'Close' : 'Create'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;
