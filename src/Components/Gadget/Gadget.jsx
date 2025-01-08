import React from 'react';

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price } = gadget;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl mt-10">
                <figure>
                    <img
                        src={product_image}
                        alt={category} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price : {price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline btn-primary rounded-3xl w-40 text-lg">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;