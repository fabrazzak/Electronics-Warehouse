import React, { useEffect, useState } from 'react';

const useProducts = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://desolate-bastion-81312.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return [product, setProduct];
};

export default useProducts;