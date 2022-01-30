import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import LunchCard from './LunchCard';

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
                        lunches.length ? lunches.map(lunch => <LunchCard key={lunch.id} lunch={lunch}></LunchCard>
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