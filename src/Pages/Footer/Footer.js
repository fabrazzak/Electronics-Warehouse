import React from 'react';

const Footer = () => {
    const d = new Date();
    const todayYear= d.getFullYear();


    
    return (
        <div className='bg-info py-5 text-center mx-auto'>
            <h5>Copywrite &copy; {todayYear} </h5>
            <p className='fw-bold'>Developer Abdur Razzak</p>
        </div>
    );
};

export default Footer;