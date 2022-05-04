import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../useProducts/useProducts';
import ManageInventoryProduct from './ManageInventoryProduct/ManageInventoryProduct';

const ManageInventory = () => {
    const [product, setProduct]=useProducts();
     
    return (
        <div className='container py-5'>
            <h2 className='text-center pb-4   '><Link to="/add-items"  className='text-decoration-none  '>Add New Items +</Link>
</h2>
            <div className="row row-cols-1 row-cols-md-5 g-4" >
                {
                    product.map(pd => <ManageInventoryProduct key={pd._id} singleProduct={pd}></ManageInventoryProduct>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;