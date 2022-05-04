import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import useProducts from '../useProducts/useProducts';

const Home = () => {
    const [products, setProduct] =useProducts();
    const sixProduct= products.slice(0 , 6);

    return (
        <div >
            <HomeBanner></HomeBanner>
            <div className='container py-lg-5'>
                <h1 className='pb-lg-5 text-info text-center fw-bold'>Inventory</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {
                        sixProduct.map(product => <Products key = {product._id} product={product}> </Products>)
                    }
                </div>

            </div>
            <Footer></Footer>               
          
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;