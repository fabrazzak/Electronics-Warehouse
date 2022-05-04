import React, { useEffect, useState } from 'react';

const useProducts = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    return  [product, setProduct];
};

export default useProducts;