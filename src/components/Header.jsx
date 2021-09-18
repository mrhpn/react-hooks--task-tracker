import React from 'react';

const Header = ({ title }) => {
    return (
        <header className="flex justify-center my-3">
           <h1 className="font-semibold text-2xl text-indigo-600">{ title }</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;
