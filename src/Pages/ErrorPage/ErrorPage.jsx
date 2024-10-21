import React from 'react';
import error from "../../assets/error/error.json"
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';

const ErrorPage = () => {
    return (
        <div className='max-h-screen flex flex-col'>
            <div className=''>
                <div className='max-w-md mx-auto'>
                    <Lottie animationData={error} loop={true} />
                </div>
                <div className='text-center py-2'>
                    <Link to="/">
                        <button className='btn bg-red-600 hover:bg-red-400  text-white'>Go to Home</button></Link></div>
            </div>

        </div>

    );
};

export default ErrorPage;