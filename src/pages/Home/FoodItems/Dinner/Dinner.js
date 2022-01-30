import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DinnerCard from './DinnerCard';

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
                        dinners.length ? dinners.map(dinner => <DinnerCard key={dinner.id} dinner={dinner}></DinnerCard>
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