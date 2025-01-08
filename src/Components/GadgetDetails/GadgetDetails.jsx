import React from 'react';
import { useParams } from 'react-router-dom';

const GadgetDetails = () => {
    const {product_id} = useParams();
    console.log(product_id)
    return (
        <div>
            <h2>Product Details: {product_id} </h2>
        </div>
    );
};

export default GadgetDetails;