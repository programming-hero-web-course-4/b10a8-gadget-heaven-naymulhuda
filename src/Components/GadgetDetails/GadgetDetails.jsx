import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineHeart } from "react-icons/hi";

const GadgetDetails = () => {

  const { product_id } = useParams();
  const id = parseInt(product_id);

  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.product_id === id);

  const { product_id: currentBookId, product_title, product_image, price, rating, description, specification } = gadget;

  return (
    <div>
      <div className='border-2 border-red-600 h-96 bg-[#9538E2] flex flex-col items-center text-white '>

        <div className='flex flex-col  items-center text-white mt-6'>
          <h2 className=' text-4xl font-bold mb-3'>Product Details</h2>
          <p className='lg:w-4/5 text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        </div>




        <div className='flex  w-[1280px] mx-auto rounded-3xl mt-12  text-black bg-white p-8 gap-9 '>
          <div>
            <img
              className='w-[424px] h-[503px] rounded-3xl border-2 '
              src={product_image}
              alt="" />
          </div>
          <div>
            <h2 className='text-3xl font-bold'>{product_title}</h2>
            <p className='text-xl font-semibold my-3'>Price: {price}</p>
            <button className='btn btn-outline  bg-lime-200 border border-x-lime-600  w-[100px] rounded-3xl'>In Stock</button>
            <p className='my-3 '>{description}</p>
            <div>
              <h3 className='text-lg font-bold'>Specifications</h3>
              <ol className=''>
                <li>{specification.processor}</li>
                <li>{specification.ram}</li>
                <li>{specification.storage}</li>
                <li>{specification.screen_size}</li>
                <li>{specification.weight}</li>
                <li>{specification.camera}</li>
                <li>{specification.battery}</li>
                <li>{specification.battery_life}</li>
                <li>{specification.charging}</li>
                <li>{specification.display}</li>
                <li>{specification.connectivity}</li>
                <li>{specification.compatibility}</li>
                <li>{specification.additional_features}</li>
                <li></li>
              </ol>
            </div>
            <h3>Rating </h3>
            <div className='flex items-center gap-2 mb-3'>
              <div className="rating rating-md gap-2">

                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400"
                  defaultChecked />
              </div>
              <div className='bg-gray-200 w-14 p-2 text-center rounded-3xl'>
                <p>{rating}</p>
              </div>

            </div>

            <div className='flex items-center  gap-7'>
              <button className='btn font-bold font-lg bg-[#9538E2] text-white rounded-3xl'>Add To Cart <CiShoppingCart size={24}></CiShoppingCart> </button>
              <button className='btn'>
                <HiOutlineHeart size={24}></HiOutlineHeart>
              </button>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default GadgetDetails;