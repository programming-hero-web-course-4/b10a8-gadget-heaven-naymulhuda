import React from 'react';
import { Link } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, product_title, product_image, category, price, rating } = gadget;
    const handleGadgetDetails = () => {

    }
    return (
        <div>
            <div className="card bg-base-100 w-96 h-[450px] shadow-xl mt-10 ">
                <figure className='px-5 py-5 '>
                    <img
                        className='bg-cover rounded-xl '
                        src={product_image}
                        alt={category} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price : {price}</p>
                    <Link to={`/gadgets/${product_id}`}>
                        <div className="card-actions justify-start">
                            <button className="btn btn-outline btn-primary rounded-3xl w-40 text-lg">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gadget;