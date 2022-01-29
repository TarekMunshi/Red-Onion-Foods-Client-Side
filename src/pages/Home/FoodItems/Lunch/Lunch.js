import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Lunch = () => {
    const [lunches, setLunch] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/TarekMunshi/redonionapi.json/main/redonionapi.json')
            .then(res => res.json())
            .then(data => setLunch(data[0].lunch))
    }, [])
    return (
        <div>
            <Container>
                <div className="row mt-4 mb-5 gy-3">
                    {
                        lunches.length ? lunches.map(lunch =>
                            <div className="col-lg-4 d-flex flex-column  align-items-center" key={lunch.id}>
                                <div className=' b-card w-75'>
                                    <div className=' d-flex justify-content-center'>
                                        <img className='w-50' src={lunch.img} alt="" />
                                    </div>
                                    <div className='mt-4'>
                                        <h6 className='text-center'>{lunch.name}</h6>
                                        <p className='text-center text-black-50'>{lunch.shortDescription}</p>
                                        <h6 className='text-center'>${lunch.price}</h6>
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

export default Lunch;