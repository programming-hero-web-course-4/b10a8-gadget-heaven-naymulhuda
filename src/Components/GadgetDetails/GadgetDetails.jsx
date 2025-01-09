import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetails = () => {
    
    const {product_id} = useParams();
    const id = parseInt(product_id);

    const data = useLoaderData();

    const gadget = data.find((gadget) => gadget.product_id === id);

    const {product_id: currentBookId, product_title, product_image, category, price, rating, description } = gadget;

    return (
        <div className='flex border-2 border-yellow-500'>
            <div>
                <img
                 className='w-[424px] h-[503px]'
                 src={product_image} 
                 alt="" />
            </div>
            <div>
            <h2>{product_title}</h2>
            <p>Price: {price}</p>
            <button className='btn btn-outline bg-lime-200 border border-x-lime-600 w-[87px] h-[20px] rounded-3xl'>In Stock</button>
            <p className='mb-3'>{description}</p>
            <div>
                <h3 className='text-lg font-bold'>Specifications</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <h3>Rating: {rating} </h3>
            <div>
            <button>Add To Cart</button>
            <button>love</button>
            
            </div>
            </div>
        </div>
    );
};

export default GadgetDetails;