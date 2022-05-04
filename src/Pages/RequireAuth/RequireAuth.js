import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

function RequireAuth({ children }) {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    let [user,loading]= useAuthState(auth);
    let location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user?.emailVerified){
        return <div className='text-center my-lg-5 py-lg-5'>
            <h1 className='text-danger'>You email is not verified.</h1>
            <h1 className='text-warning'>please verify your email.</h1>
            <button className='btn-info rounded fs-4 fw-bold my-3 '
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >Send verify Email</button>
            <ToastContainer></ToastContainer>
        </div>
    }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;