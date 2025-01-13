import React from 'react';

const DashBoard = () => {
    return (
        <div className=' h-80 bg-[#9538E2] flex flex-col items-center text-white '>
            <div className='flex flex-col  items-center text-white mt-6'>
                <h2 className=' text-4xl font-bold mb-6'>Dashboard</h2>
                <p className='lg:w-4/5 text-center '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='flex items-center justify-center gap-9 mt-7'>
                <button className='btn w-40 text-center rounded-3xl'>Cart</button>
                <button className='btn w-40 text-center rounded-3xl'>Wishlist</button>
            </div>
        </div>
    );
};

export default DashBoard;