import React from 'react';
import image from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={image} alt={'error'}></img>
            <span style={{color: '#fff'}}>Something goes wrong :(</span>
        </>
    )
}

export default ErrorMessage;