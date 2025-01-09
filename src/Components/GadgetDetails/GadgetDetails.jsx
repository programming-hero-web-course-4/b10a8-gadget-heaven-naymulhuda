import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetails = () => {

  const { product_id } = useParams();
  const id = parseInt(product_id);

  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.product_id === id);

  const { product_id: currentBookId, product_title, product_image, price, rating, description, specification } = gadget;

  return (
    <div >
      <div className='border-2 border-red-600 h-96 bg-[#9538E2] flex flex-col items-center text-white '>

        <div className='flex flex-col border-2 border-green-300 items-center text-white mt-6'>
          <h2 className=' text-4xl font-bold mb-3'>Product Details</h2>
          <p className='lg:w-4/5 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>




        <div className='flex border-2 border-yellow-500 w-[1280px] mx-auto rounded-3xl mt-12 text-black bg-white p-8 gap-9'>
          <div>
            <img
              className='w-[424px] h-[503px] rounded-3xl border-2 '
              src={product_image}
              alt="" />
          </div>
          <div>
            <h2>{product_title}</h2>
            <p>Price: {price}</p>
            <button className='btn btn-outline bg-lime-200 border border-x-lime-600  w-[87px] h-[20px] rounded-3xl'>In Stock</button>
            <p className='mb-3'>{description}</p>
            <div>
              <h3 className='text-lg font-bold'>Specifications</h3>
              <p>{specification.processor}</p>
              <p>{specification.ram}</p>
              <p>{specification.storage}</p>
              <p>{specification.screen_size}</p>
              <p>{specification.weight}</p>
              <p>{specification.camera}</p>
              <p>{specification.battery}</p>
              <p>{specification.battery_life}</p>
              <p>{specification.display}</p>
              <p>{specification.connectivity}</p>
              <p>{specification.compatibility}</p>
              <p>{specification.charging}</p>
              <p>{specification.additional_features}</p>

            </div>
            <h3>Rating: {rating} </h3>
            <div>
              <button>Add To Cart</button>
              <button>love</button>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default GadgetDetails;