
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ManageInventory from '../ManageInventory/ManageInventory';
import ManageInventoryProduct from '../ManageInventory/ManageInventoryProduct/ManageInventoryProduct';
import MyitemsDetails from './MyitemsDetails';

const MyItems = () => {
    const [myItems,setMyitems]=useState([]);
    const [user,loading]=useAuthState(auth);
    const { inventoryId } = useParams();
    const id=inventoryId;
    if(loading){
        return <Loading></Loading>
    }
    const {  email } = user;
    console.log(email)
    const url =`http://localhost:5000/add-product?email=${email}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
        console.log(data);
        setMyitems(data);
    })
    const handleOnClickRemoveItem =()=>{
        const confirm = window.confirm("Are you sure delete this item?");
        if (confirm) {
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
        <div className='container'>
            <h3 className='text-center py-lg-4'>List of all my added items </h3>
            <h3 className='text-center '>Total Items {myItems.length}</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    myItems.map(pd => <MyitemsDetails key={pd._id}  singleProduct={pd}></MyitemsDetails>)
                }
                

            </div>
           
        </div>
    );
};

export default MyItems;


