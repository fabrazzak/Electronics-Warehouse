import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Products from '../Products/Products';
import TopQuantityProduct from '../TopQuantityProduct/TopQuantityProduct';
import TopSoldProduct from '../TopSoldProduct/TopSoldProduct';
import useProducts from '../useProducts/useProducts';

const Home = () => {
    const [products, setProduct] =useProducts();
    const sixProduct= products.slice(0 , 6);
    const topProductQuantiry = [];
    const topProductSold = [];
    let numbers = 1;
    const bigQuantiry = products.filter(pd => {
        if (pd.quantity > numbers) {
            topProductQuantiry.push(pd);
            numbers = pd.quantity;
        }
    })
      let soldnumber=1;
    const bigSold = products.filter(pd => {
        if (pd.sold > soldnumber) {
            topProductSold.push(pd);
            soldnumber = pd.sold;
        }
    })

    const topQuantitySlice = topProductQuantiry.slice(topProductQuantiry.length - 3, topProductQuantiry.length);

    const topSoldSlice = topProductSold.slice(topProductSold.length - 3, topProductSold.length);

 


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
            
            <div className="bg-light">
                <div className='container py-lg-5 '>
                    <h1 className='pb-lg-5 text-info text-center fw-bold'>Top <span className='text-black'>Quantity</span> Items</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4 ">
                        {
                            topQuantitySlice.map(product => <TopQuantityProduct key={product._id} product={product}> </TopQuantityProduct>)
                        }
                    </div>

                </div>
            </div>
            <div className='container py-lg-5'>
                <h1 className='pb-lg-5 text-info text-center fw-bold'>Top <span className='text-black'>Sold</span> Items</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    {
                        topSoldSlice.map(product => <TopSoldProduct key = {product._id} product={product}> </TopSoldProduct>)
                    }
                </div>

            </div>
            
            

            <Footer></Footer>               
          
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;