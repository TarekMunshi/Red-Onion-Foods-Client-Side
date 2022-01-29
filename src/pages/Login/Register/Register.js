import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import useAuth from '../../hooks/useAuth';
import './register.css'
const Register = () => {
    const [confirmPassword, setConfirmPassword] = useState('')
    const { signInUsingGoogle, user, registerUser, isLoading, authError } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            setConfirmPassword("your password doesn't match!!")
            return
        }
        registerUser(data.email, data.password, data.name, history)
        reset();
    };
    return (
        <div>
            <Container>
                <div className='mt-5'>
                    <img width='200vw' className='mx-auto d-block' src={logo} alt="" />
                </div>
                {!isLoading && <div className="row d-flex justify-content-center mt-4">
                    <div className='col-lg-4 col-10'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("name")} placeholder='Name' required />
                            <input type="email" {...register("email")} placeholder='Email' required />
                            <input type="password" {...register("password")} placeholder='Password' required />
                            <input type="password" {...register("password2")} placeholder='Confirm Password' required />
                            {authError && <p className='text-danger'>{authError}</p>}
                            <p className='text-danger'>{confirmPassword}</p>
                            <input type="submit" value="Sign In" />
                        </form>
                    </div>
                    <p className='text-center mb-0'>Or</p>
                    <div className='col-lg-4 col-10 '>
                        <button className='login-btn' type="submit" onClick={handleGoogleLogin}><i className="fab fa-google-plus-g" style={{ fontSize: '20px' }}> &nbsp;Google</i> </button>
                    </div>
                    <p className='text-center'><Link className='text-decoration-none text-danger' to='/login'>Already have an account</Link></p>
                </div>}
                {isLoading && <div class="d-flex justify-content-center align-items-center" style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>}
            </Container >
            {!isLoading && < div className='d-flex justify-content-center'>
                <button className='home-btn '><Link className='text-decoration-none text-black' to='/'>Back To Home</Link></button>
            </div>}
        </div >
    );
};

export default Register;