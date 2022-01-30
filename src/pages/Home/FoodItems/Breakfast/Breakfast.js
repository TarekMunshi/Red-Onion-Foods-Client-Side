import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Breakfast.css'
import BreakfastCard from './BreakfastCard';

const Breakfast = () => {
    const [breakfasts, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/TarekMunshi/redonionapi.json/main/redonionapi.json')
            .then(res => res.json())
            .then(data => setBreakfast(data[0].breakfast))
    }, []);
    return (
        <>
            <Container>
                <div className="row mt-4 mb-5 gy-3">
                    {
                        breakfasts.length ? breakfasts.map(breakfast => <BreakfastCard key={breakfast.id} breakfast={breakfast}></BreakfastCard>
                        ) : <div class="d-flex justify-content-center">
                            <div class="spinner-grow" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
            </Container>
        </>
    );
};

export default Breakfast;