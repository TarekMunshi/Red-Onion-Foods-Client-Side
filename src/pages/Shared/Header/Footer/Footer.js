import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../../images/logo.png';
import payment from '../../../../images/payment.png';
const Footer = () => {
    return (
        <div style={{ backgroundColor: '#191919' }}>
            <Container className='p-5'>
                <div className="row">
                    <div className="col-lg-6 col-6 d-flex flex-column">
                        <img className='w-50' src={logo} alt="" />
                        <img className='w-50 mt-3' src={payment} alt="" />
                    </div>
                    <div className="col-lg-6 col-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className='d-flex flex-column'>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">About Online Food</a></p>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">Read Our Blog</a></p>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">Sign Up To Deliver</a></p>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">Add Your Restaurant</a></p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className='d-flex flex-column'>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">Read Faqs</a></p>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">View All Cities</a></p>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">Restaurants Near Me</a></p>
                                    <p><a style={{ color: 'white', textDecoration: 'none' }} href="#redOnionFoods">Get Helps</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex align-items-center mt-lg-5">
                    <div className='col-lg-6 d-flex justify-content-lg-start justify-content-center'>
                        <p style={{ color: '#414141' }}>Copyright &copy; 2021 RED ONION FOODS </p>
                    </div>
                    <div className='col-lg-6 '>
                        <div className='d-flex justify-content-evenly'>
                            <p><a style={{ color: 'white', textDecoration: 'none' }} href="#privacyPolicy">Privacy Policy</a></p>
                            <p><a style={{ color: 'white', textDecoration: 'none' }} href="#termsOfUse">Terms Of Use</a></p>
                            <p><a style={{ color: 'white', textDecoration: 'none' }} href="#pricing">Pricing</a></p>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    );
};

export default Footer;