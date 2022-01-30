import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle, user, loginUser, isLoading, authError } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    console.log(user)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)
        reset();
    };
    return (
        <div>
            <Container>
                <div className='login-img'>
                    <img width='200vw' className='mx-auto d-block' src={logo} alt="" />
                </div>
                {!isLoading && <div className="row d-flex justify-content-center mt-5">
                    <div className='col-lg-4 col-10'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='' type="email" {...register("email")} placeholder='Your Email' required />
                            <input className='' type="password" {...register("password")} placeholder='Your Password' required />
                            {authError && <p className='text-danger'>{authError}</p>}
                            <input className='' type="submit" value="Login" />
                        </form>
                    </div>
                    <p className='text-center mb-0'>Or</p>
                    <div className='col-lg-4 col-10 '>
                        <button className='login-btn' onClick={handleGoogleLogin} type="submit"><i className="fab fa-google-plus-g" style={{ fontSize: '20px' }}> &nbsp;Google</i> </button>
                    </div>
                    <p className='text-center'><Link className='text-decoration-none text-danger' to='/register'>New Here? Register</Link></p>
                </div>}
                {isLoading && <div className="d-flex justify-content-center align-items-center" style={{ marginTop: '50px', marginBottom: '50px' }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            </Container >
            {!isLoading && < div className='d-flex justify-content-center'>
                <button className='home-btn '><Link className='text-decoration-none text-black' to='/'>Back To Home</Link></button>
            </div>}
        </div>
    );
};

export default Login;