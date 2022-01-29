import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/TarekMunshi/redonionapi.json/main/redonionapi.json')
            .then(res => res.json())
            .then(data => setDinners(data[0].dinner))
    }, [])
    return (
        <div>
            <Container>
                <div className="row mt-4 mb-5 gy-3">
                    {
                        dinners.length ? dinners.map(dinner =>
                            <div className="col-lg-4 d-flex flex-column  align-items-center" key={dinner.id}>
                                <div className=' b-card w-75'>
                                    <div className=' d-flex justify-content-center'>
                                        <img className='w-50' src={dinner.img} alt="" />
                                    </div>
                                    <div className='mt-4'>
                                        <h6 className='text-center'>{dinner.name}</h6>
                                        <p className='text-center text-black-50'>{dinner.shortDescription}</p>
                                        <h6 className='text-center'>${dinner.price}</h6>
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

export default Dinner;