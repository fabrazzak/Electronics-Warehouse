import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import PagesTitle from '../PagesTitle/PagesTitle';

const AddItems = () => {

    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const { displayName, email } = user;

    const handleOnSubmitForm = event => {
        event.preventDefault();

        const name = event.target.productName.value;
        const description = event.target.description.value;
        const supplierName = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sold = event.target.sold.value;
        const img = event.target.url.value;
        const product = { supplierName, price, email, name, description, quantity, sold, img };
        console.log(product);
        fetch("https://desolate-bastion-81312.herokuapp.com/add-product", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Product Successfully added !!!!!")

                }
                console.log(data)

            })

        event.target.reset();



    }
    return (
        <div className='sigup-form rounded mx-auto mt-lg-5 py-lg-5 px-lg-4'>
            <PagesTitle title="Add-Items"></PagesTitle>
            <h2 className='pb-3'>Please add Items !!!!</h2>
            <form onSubmit={handleOnSubmitForm}>
                <input className='form-control mt-3 py-2' type="text" name="name" placeholder='Supplier Name' required />
                <input className='form-control mt-3 py-2' type="email" name="email" value={email} required readOnly />
                <input className='form-control mt-3 py-2' type="text" name="productName" placeholder='Product Name' required />
                <input className='form-control mt-3 py-2' type="text" name="price" placeholder='Price' required />
                <textarea name="description" className='form-control py-2 mt-3' placeholder='Description' cols="30" rows="5"></textarea>
                <input className='form-control mt-3 py-2' type="number" name="quantity" placeholder='Quantity No.' required />
                <input className='form-control mt-3 py-2' type="number" name="sold" placeholder='Sold No.' required />
                <input className='form-control mt-3 py-2' type="text" name="url" placeholder='Image UR' required />              <input className='form-control mt-3 py-2 btn-info fs-5 fw-bold' type="submit" value="Submit" />
                <ToastContainer></ToastContainer>


            </form>
        </div>
    );
};

export default AddItems;