import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ManageInventoryProduct = ({singleProduct}) => {
    const {_id, name, price, description, quantity, sold, supplierName,img}=singleProduct;
    const handleOnClickRemoveItem =id=>{
        const confirm=window.confirm("Are you sure delete this item?");
        if(confirm){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                toast("Remove item successful!!!")


        }
        

    }
    return (
        
            <div className="col">
                
                <div className="card h-100">
                    <img src={img} className="card-img-top w-75" alt="..."/>
                        <div className="card-body">
                            <p className="card-title fw-bold">Name: {name}</p>
                            <p className="card-text">Quantiry: {quantity}</p>
                            <p className="card-text">Sold: {sold}</p>
                    <span className="text-muted">Supplier :{supplierName}</span>
                        </div>
                        <div className="card-footer py-4 bg-white border-0">
                            <button className='btn-danger form-control fs-5 fw-bold'
                             onClick={()=>handleOnClickRemoveItem(_id)}> Remove Item</button>
                             <ToastContainer></ToastContainer>
                            
                        </div>
                </div>
            </div>
       
    );
};

export default ManageInventoryProduct;