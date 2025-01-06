import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center bg-[#9333ea] h-[694px] rounded-b-3xl'>
            <section className='mt-60 border-2 border-green-400 flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl lg:w-[1000px] leading-tight mb-5 text-white'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='mb-6 lg:w-[700px] text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className='mb-6 bg-white text-[#9538E2] rounded-3xl btn font-bold text-xl px-4'>Shop Now</button>

                <div className='w-[1100px] h-[611px] bg-[#9333ea] rounded-lg p-6 '>
                    <img
                        className='w-full h-full rounded-lg object-cover '
                        src={bannerImg}
                        alt="Gadget Heaven Accessories"
                    />
                </div>
            </section>
        </div>
    );
};

export default Banner;