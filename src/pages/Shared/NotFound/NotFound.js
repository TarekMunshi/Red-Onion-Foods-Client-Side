import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notFound from '../../../images/3828540-ai.png'
const NotFound = () => {
    return (
        <div className='container notFound'>
            <div className='d-flex justify-content-center notFound align-items-center flex-column'>
                <img className='w-25' src={notFound} alt="" />
                <Link to='/'> <button className='border-0 text-danger fw-bold'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default NotFound;