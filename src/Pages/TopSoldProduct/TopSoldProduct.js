
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TopSoldProduct = ({product}) => {
    const navigate = useNavigate();
    const { _id, name, price, img, description, sold, quantity, supplierName } = product;
    const handleOnClickUpdate = (id) => {
        navigate(`/Inventory/${id}`);

    }
    return (

        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top w-75" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-start">Name: {name}</h5>
                    <p className="card-text text-start">{description}</p>
                    <p className='fs-5 fw-bold'>Price: {price}</p>
                    <h3 className='fs-6 fw-bold'>Quantity: {quantity}</h3>
                    <p className='fs-3 fw-bold'>Sold: <span className='fs-1'>{sold}</span></p>
                    <p className='fs-6 fw-bold'>Supplier name: {supplierName}</p>
                </div>
                <Button onClick={() => handleOnClickUpdate(_id)} className="card-footer  bg-info fs-4 fw-bold  btn-info w-100">
                    Update
                </Button>
            </div>
        </div>




    );
};
export default TopSoldProduct;