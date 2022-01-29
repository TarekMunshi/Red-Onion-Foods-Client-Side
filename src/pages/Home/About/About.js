import React from 'react';
import './About.css'
import { Container } from 'react-bootstrap';
import img from '../../../images/adult-blur-blurred-background-687824.png'
import img2 from '../../../images/chef-cook-food-33614.png'
import img3 from '../../../images/architecture-building-city-2047397.png'

const About = () => {
    return (
        <div>
            <Container>
                <div className="row mt-5">
                    <div className="col-lg-6">
                        <h2 className='fw-light'>Why You Choose Us</h2>
                        <h6>Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then RED-ONION-FOODS Bangladesh is the right destination for you!</h6>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-5">
                    <div className="col">
                        <div className="card chef-card border-0">
                            <img src={img} className="card-img-top" alt="..." />
                            <div className="card-body chef-text d-flex ">
                                <div className='pt-3'>
                                    <i className="fas fa-bus me-3 icon"></i>
                                </div>
                                <div>
                                    <h6 className="card-title pt-3 fw-bolder">FAST DELIVERY</h6>
                                    <p className="card-text text-black-50">Keep Your Systems in sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                                    <div className='d-flex align-items-center'>
                                        <strong style={{ color: '#7b98f8' }}> <a target='_blank' href="https://food52.com/" style={{ textDecoration: 'none' }} rel="noreferrer">See More <span style={{ color: '#10e16a' }}><i className="fas fa-arrow-circle-right"></i></span></a> </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card chef-card border-0">
                            <img src={img2} className="card-img-top" alt="..." />
                            <div className="card-body chef-text d-flex ">
                                <div className='pt-3'>
                                    <i className="far fa-bell me-3 icon" ></i>
                                </div>
                                <div>
                                    <h6 className="card-title pt-3 fw-bolder">A Good Auto Responder</h6>
                                    <p className="card-text text-black-50">Keep Your Systems in sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                                    <div className='d-flex align-items-center'>
                                        <strong style={{ color: '#7b98f8' }}> <a target='_blank' href="https://food52.com/" style={{ textDecoration: 'none' }} rel="noreferrer">See More <span style={{ color: '#10e16a' }}><i className="fas fa-arrow-circle-right"></i></span></a> </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card chef-card border-0">
                            <img src={img3} className="card-img-top" alt="..." />
                            <div className="card-body chef-text d-flex ">
                                <div className='pt-3'>
                                    <i className="fas fa-truck me-3 icon" ></i>
                                </div>
                                <div>
                                    <h6 className="card-title pt-3 fw-bolder">Home Delivery</h6>
                                    <p className="card-text text-black-50">Keep Your Systems in sync with automated web hook based notification each time link is paid and how we dream about our future.</p>
                                    <div className='d-flex align-items-center'>
                                        <strong style={{ color: '#7b98f8' }}> <a target='_blank' href="https://food52.com/" style={{ textDecoration: 'none' }} rel="noreferrer">See More <span style={{ color: '#10e16a' }}><i className="fas fa-arrow-circle-right"></i></span></a> </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;