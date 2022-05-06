import React from 'react';

const AboutUs = () => {
    return (
        <div className="container">
            <h1 className='text-info text-center pb-3'>About Us</h1>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">

                <div className="card h-100">
                    <img src='' className="card-img-top w-75 p-3" alt="..." />
                    <div className="card-body">
                        <p className="card-title fw-bold">Name:</p>
                        <p className="card-text">Quantity: </p>
                        <p className="card-text">Sold: </p>
                        <span className="text-muted">Supplier </span>
                    </div>
                    

                    </div>
                    </div>
                </div>
            </div>
        
    );
};

export default AboutUs;