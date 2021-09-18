import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <div className="text-center">
            <h4>Version 1.0.0</h4>
            <Link to="/" className="block underline text-blue-500">Go Back</Link>
        </div>
    );
}

export default About;
