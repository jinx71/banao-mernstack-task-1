import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <h1 className="text-info">404 Not Found</h1>
            <Link to="/">Go to home</Link>
        </div>
    );
};

export default NotFound;