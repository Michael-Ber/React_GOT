import React from 'react';
import image from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={image} alt={'error'}></img>
            <span>Something goes wrong :(</span>
        </>
    )
}

export default ErrorMessage;