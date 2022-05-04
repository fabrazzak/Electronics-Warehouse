import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleOnSubmitForm = async(event)=>{
        event.preventDefault();
        const email =event.target.email.value;
        await sendPasswordResetEmail(email);
        toast("Sent Email");
        event.target.reset();

    }
    return (
        <div className='sigup-form rounded mx-auto mt-lg-5 py-lg-5 px-lg-4'>
            <h2 className='pb-3'>Reset Password !</h2>
            <form onSubmit={handleOnSubmitForm}>
                <input className='form-control mt-3 py-2' type="email" name="email" placeholder='Your Email' required />
                <input className='form-control mt-3 py-2 btn-info fs-5 fw-bold' type="submit" value="Sign Up" />
                <ToastContainer></ToastContainer>
            </form>
            
        </div>
    );
};

export default ResetPassword;