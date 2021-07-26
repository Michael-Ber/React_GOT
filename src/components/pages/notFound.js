import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="app__notfound">
            <h2>This page is not exist</h2>
            <button><Link to="/home"></Link></button>
        </div>
    )
}
export default NotFound;