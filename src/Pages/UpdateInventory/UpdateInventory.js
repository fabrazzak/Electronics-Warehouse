import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PagesTitle from '../PagesTitle/PagesTitle';
import "../UpdateInventory/UpdateInventory.css"

const UpdateInventory = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    const { img, name, description, price, quantity, sold, supplierName } = product;
    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])
    const handleOnSubmitQuantity = event => {
        event.preventDefault();
        const confirm = window.confirm('Are You Sure? ');
        if (confirm) {
            const newQuantity = parseInt(event.target.number.value);
            const totalQuantity = quantity + newQuantity;
            const id = inventoryId;
            const totalSold = sold + 0;
            const user = { id, totalQuantity, totalSold };

            console.log(totalQuantity);
            const url = `http://localhost:5000/product/${inventoryId}`
            fetch(url, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            event.target.reset();
            toast("Quantity Successfully added.")

        }


    }
    const handleOnClickDelivered = () => {
        if (quantity > 0) {
            const totalQuantity = quantity - 1;
            const id = inventoryId;
            const totalSold = sold + 1;
            const user = { id, totalQuantity, totalSold };

            console.log(totalQuantity);
            const url = `http://localhost:5000/product/${inventoryId}`
            fetch(url, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            toast("Quantity Successfully Delivered.!!!!")

        } else {
            alert("Your Quantity is very low.");
        }



    }


    return (
        <div>
            <PagesTitle title="Update Inventory"></PagesTitle>
            <h3 className='text-center pt-3'>Product Details !</h3>

            <div className="card-group inventory-card  mx-auto mt-3 mb-5 pb-5" >


                <div className="card">
                    <img src={img} className="card-img-top img-fluid w-75 p-3" alt={inventoryId} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <h5 className="card-text">Price: {price}</h5>
                        <h4 className="card-text">Quantity : {quantity}</h4>
                        <h6 className="card-text">Sold : {sold}</h6>
                        <p className="card-text fw-bold"><small className="text-muted">Supplier Name: {supplierName}</small></p>
                        <form className='d-flex' onSubmit={handleOnSubmitQuantity}>

                            <input type="number" name="number" className='input-number w-50 form-control' id="" placeholder='Type Quantity' required autoComplete='off' />
                            <input type="submit" className='btn-info fw-bold ms rounded w-50  form-control' value="Add Quantity" />

                        </form>
                        <input onClick={handleOnClickDelivered} type="button" value="Delivered" className='form-control my-3 btn-info fs-4 fw-bold' />
                        <ToastContainer></ToastContainer>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpdateInventory;