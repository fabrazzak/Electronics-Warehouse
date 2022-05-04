import React from 'react';
import '../SocialLogin/SocialLogin.css';
import google from '../images/Social/google.png';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const navigate= useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        navigate(from, { replace: true });
    }
   
    const handelOnClickSocial = ()=>{
        signInWithGoogle();
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center mt-4'>
                <div className='social-div'></div>
                <div><span className='mx-3'>or</span></div>
                <div className='social-div'></div>
            </div>
            <a className='form-control mt-3 py-2 btn-info fs-5 fw-bold text-center text-decoration-none social-cursor' onClick={handelOnClickSocial}><img src={google} alt="" /><span className='ms-2'> Google with </span></a>
            
        </div>
    );
};

export default SocialLogin;