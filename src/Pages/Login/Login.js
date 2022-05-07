import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "../Login/Login.css"
import Loading from '../Loading/Loading';
import PagesTitle from '../PagesTitle/PagesTitle';
import axios from 'axios';
import auth from '../../firebase.init';


const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate("/");
    }
    if (loading) {
        return <Loading></Loading>
    }

    const handleOnSubmitForm =event => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        event.target.reset();




    }
    const handleOnClickRegisterLogin = () => {
        navigate("/signup")
    }
    const handleOnClickForgetPassword = () => {
        navigate('/reset-password');
    }
    return (
        <div className='sigup-form rounded mx-auto mt-lg-5 py-lg-5 px-lg-4'>
            <PagesTitle title="Login"></PagesTitle>
            <h2 className='pb-3'>Please Login!</h2>
            <form onSubmit={handleOnSubmitForm}>
                <input className='form-control mt-3 py-2' type="email" name="email" placeholder='Your Email' required />
                <input className='form-control mt-3 py-2' type="password" name="password" placeholder='Your Password' required />
                <input className='form-control mt-3 py-2 btn-info fs-5 fw-bold' type="submit" value="Login" />
                <p className='fs-6 my-3 login-toggle-regiter' onClick={handleOnClickRegisterLogin}>Are you new to warehouse ? <span className='text-info fw-bold '>Please Register!</span></p>
                <p className='text-info fw-bold social-cursor' onClick={handleOnClickForgetPassword}>Forget Password?</p>
                {
                    error ? <p className='text-danger '>{error?.message.slice(10, 50)}</p> : " "
                }
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;