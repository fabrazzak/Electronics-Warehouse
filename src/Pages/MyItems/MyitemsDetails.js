import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const MyitemsDetails = ({ singleProduct }) => {
    const { _id, name, price, description, quantity, sold, supplierName, img } = singleProduct;
    const handleOnClickRemoveItem = id => {
        const confirm = window.confirm("Are you sure delete this item?");
        if (confirm) {
            const url = `https://desolate-bastion-81312.herokuapp.com/product/${id}`;
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
    const handleOnSubmitQuantity = event => {
        event.preventDefault();
        const confirm = window.confirm('Are You Sure? ');
        if (confirm) {
            const newQuantity = parseInt(event.target.number.value);
            const totalQuantity = parseInt(quantity + newQuantity);
            const id = _id;
            const totalSold = sold + 0;
            const user = { id, totalQuantity, totalSold };

            console.log(totalQuantity);
            const url = `https://desolate-bastion-81312.herokuapp.com/product/${id}`
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
            const id = _id;
            const totalSold = parseInt(sold) + 1;
            const user = { id, totalQuantity, totalSold };

            console.log(totalQuantity);
            const url = `https://desolate-bastion-81312.herokuapp.com/product/${id}`
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
            alert("Your Quantity is very low");

        }



    }

    return (

        <div className="col">

            <div className="card h-100">
                <img src={img} className="card-img-top w-75 p-3" alt="..." />
                <div className="card-body">
                    <p className="card-title fw-bold">Name: {name}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Sold: {sold}</p>
                    <span className="text-muted">Supplier :{supplierName}</span>
                </div>
                <form className='d-flex ' onSubmit={handleOnSubmitQuantity}>

                    <input type="number" name="number" className='input-number  w-50 ' placeholder='Type Quantity' required autoComplete='off' />
                    <input type="submit" className='btn-info  ms rounded w-50 ' value="Add Quantity" />

                </form>
                <input onClick={handleOnClickDelivered} type="button" value="Delivered" className='
                px-2 w-75 mx-auto mt-2  btn-info fs-5 ' />
                <div className="card-footer  bg-white border-0">
                    <button className='btn-danger form-control fs-5 fw-bold'
                        onClick={() => handleOnClickRemoveItem(_id)}> Remove Item</button>
                    <ToastContainer></ToastContainer>

                </div>
            </div>
        </div>

    );
};

export default MyitemsDetails;