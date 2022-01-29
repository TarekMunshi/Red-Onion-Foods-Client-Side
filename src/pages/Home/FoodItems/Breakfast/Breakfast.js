import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Breakfast.css'

const Breakfast = () => {
    const [breakfasts, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/TarekMunshi/redonionapi.json/main/redonionapi.json')
            .then(res => res.json())
            .then(data => setBreakfast(data[0].breakfast))
    }, [])
    return (
        <div>
            <Container>
                <div className="row mt-4 mb-5 gy-3">
                    {
                        breakfasts.length ? breakfasts.map(breakfast =>
                            <div className="col-lg-4 d-flex flex-column  align-items-center" key={breakfast.id}>
                                <div className=' b-card w-75'>
                                    <div className=' d-flex justify-content-center'>
                                        <img className='w-50' src={breakfast.img} alt="" />
                                    </div>
                                    <div className='mt-4'>
                                        <h6 className='text-center'>{breakfast.name}</h6>
                                        <p className='text-center text-black-50'>{breakfast.shortDescription}</p>
                                        <h6 className='text-center'>${breakfast.price}</h6>
                                        <div className='d-flex justify-content-center'>
                                            <div>
                                                <button className='add-btn'><i class="fas fa-cart-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : <div class="d-flex justify-content-center">
                            <div class="spinner-grow" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </div>
    );
};

export default Breakfast;