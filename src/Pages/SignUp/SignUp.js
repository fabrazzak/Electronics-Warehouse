import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import '../SignUp/SignUp.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, errorUP] = useUpdateProfile(auth);
    const [sendEmailVerification, sendingVerify, errorVerify] = useSendEmailVerification(auth);
    const handleOnSubmitForm = async(event)=>{
        event.preventDefault();
        const displayName=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const user={displayName,email,password};
       await createUserWithEmailAndPassword(email,password);
       await updateProfile({displayName});
        await sendEmailVerification();
      
        toast("Please Verify Your Email!");
        event.target.reset();
        if(error){
            return;
        }
        else{
            navigate('/');
        }

    }
    const handleOnClickRegisterLogin = () => {
        navigate("/login")
    }
    console.log(user);
    return (
        <div className='sigup-form rounded mx-auto mt-lg-5 py-lg-5 px-lg-4'>
                <h2 className='pb-3'>Please Register  !</h2>
                <form onSubmit={handleOnSubmitForm}>
                    <input className='form-control mt-3 py-2' type="text" name="name" placeholder='Your Name' required  />
                    <input className='form-control mt-3 py-2' type="email" name="email" placeholder='Your Email' required  />
                    <input className='form-control mt-3 py-2' type="password" name="password" placeholder='Your Password' required />
                    <input className='form-control mt-3 py-2 btn-info fs-5 fw-bold' type="submit" value="Sign Up" />
                <p className='fs-6 my-3 login-toggle-regiter' onClick={handleOnClickRegisterLogin}>Al ready have an account? <span className='text-info'>Please Login!</span></p>
                
                    <SocialLogin></SocialLogin>
                </form>
        </div>
    );
};

export default SignUp;