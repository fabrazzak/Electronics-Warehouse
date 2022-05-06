import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PagesTitle from '../PagesTitle/PagesTitle';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import ManageInventoryProduct from './ManageInventoryProduct/ManageInventoryProduct';

const ManageInventory = () => {
    const [product, setProduct] = useState([]);
    const [size, setSize] = useState(10);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&pagecount=${size}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [page, size])

    useEffect(() => {
        fetch('http://localhost:5000/page-count')
            .then(res => res.json())
            .then(data => {
                const count = Math.ceil(data.result / size);
                setSize(count);
            })
    }, [])


    return (
        <div className='container py-5'>
            <PagesTitle title="Manage-Inventory"></PagesTitle>
            <h2 className='text-center pb-4   '><Link to="/add-items" className='text-decoration-none  '>Add New Items +</Link>
            </h2>
            <div className="row row-cols-1 row-cols-md-5 g-4" >
                {
                    product.map(pd => <ManageInventoryProduct key={pd._id} singleProduct={pd}></ManageInventoryProduct>)
                }
            </div>

            <div className='d-flex mx-auto justify-content-center py-5 '>
                {
                    [...Array(page).keys()].map(number => <button onClick={setPage(number)} className={page = number ? "btn-link bg-info rounded ms-3 px-3 text-decoration-none fs-5 fw-bold" : "btn-link bg-white rounded ms-3 px-3 text-decoration-none fs-5 fw-bold"}>{number + 1}</button>)
                }
                <select onChange={e => setSize(e.target.value)} className='btn-link bg-white rounded ms-3 px-3 text-decoration-none fs-5 fw-bold' >
                    <option value="5">5</option>
                    <option selected value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>

        </div>
    );
};

export default ManageInventory;