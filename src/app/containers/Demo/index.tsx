import React from 'react';
import { Link } from 'react-router-dom';

const Demo: React.FC = () => {
    return (
        <div>
            <p>This is Demo page</p>
            <Link to="/">Go to Home</Link>
        </div>
    )
};

export default Demo;