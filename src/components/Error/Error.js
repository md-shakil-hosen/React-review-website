import React from 'react';
import "./Error.css"

const Error = () => {
    return (
        <div className="err">
            <h1 className='text-center text-danger'>404</h1>
            <h5 className='text-center text-danger'>Page Not Found</h5>
            <img className='error-img' src="https://10minuteschool.com/assets/landing-page/studying.svg" alt="" />
        </div>
    );
};

export default Error;