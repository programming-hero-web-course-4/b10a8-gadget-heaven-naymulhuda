import React, { useState, useEffect } from 'react';
import DashboardBanner from '../DashboardBanner/DashboardBanner';

const DashBoard = () => {
    const [activeTab, setActiveTab] = useState('cart');


    const cartProductIDs = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlistProductIDs = JSON.parse(localStorage.getItem('wishlist')) || [];

    const [cartList, setCartList] = useState([]);
    const [wishlistList, setWishlistList] = useState([]);

    console.log("Stored Cart IDs:", cartProductIDs);
    console.log("Stored Wishlist IDs:", wishlistProductIDs);

  
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Data:", data);

                
                const filteredCart = data.filter(product => cartProductIDs.includes(product.product_id));
                const filteredWishlist = data.filter(product => wishlistProductIDs.includes(product.product_id));

                console.log("Updated Cart List:", filteredCart);
                console.log("Updated Wishlist List:", filteredWishlist);

                setCartList(filteredCart);
                setWishlistList(filteredWishlist);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [activeTab]);

    return (
        <div >
            {/* Dashboard Banner */}
            <DashboardBanner activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main content */}
            <div className="mt-8 p-6 ">
                {/* Cart Section */}
                {activeTab === 'cart' && (
                    <div>
                         <div className=' mb-8 flex items-center justify-between w-[1280px] mx-auto'>
                            <h2 className="text-2xl font-bold ">Cart</h2>
                            <div className='flex items-center gap-5'>
                                <p className='font-bold text-2xl'>Total Cost : 1000</p>
                                <button className='w-48 btn-outline border border-[#9538E2] text-[#9538E2] px-6 py-3.5 rounded-3xl text-lg font-medium'>Sort By Price</button>
                                <button className='w-48 btn-outline border px-6 py-3.5 rounded-3xl bg-[#9538E2] text-white text-lg font-medium'>Purchase</button>
                            </div>
                        </div>
                        {cartList.length === 0 ? (
                            <p>No items in the cart.</p>
                        ) : (
                            cartList.map((gadget, index) => (
                                <div key={index} className="w-[1280px] mx-auto bg-white  border rounded-lg shadow-lg flex items-start p-4 mb-7">
                                    <img src={gadget.product_image} alt={gadget.product_title} className="w-72 h-48 object-cover border  shadow-lg" />
                                    <div className="p-4 flex flex-col">
                                        <h3 className="text-xl font-bold mb-4">{gadget.product_title || "No Title"}</h3>
                                        <p className="text-gray-700 mb-4">{gadget.description || "No description available"}</p>
                                        <p className="text-lg font-bold ">{gadget.price || "$0.00"}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}

                {/* Wishlist Section */}
                {activeTab === 'wishlist' && (
                    <div>
                        <div className=' mb-8 flex items-center justify-between w-[1280px] mx-auto'>
                            <h2 className="text-2xl font-bold ">Wishlist</h2>
                            <div className='flex items-center gap-5'>
                                <p className='font-bold text-2xl'>Total Cost : 1000</p>
                                <button className='w-48 btn-outline border border-[#9538E2] text-[#9538E2] px-6 py-3.5 rounded-3xl text-lg font-medium'>Sort By Price</button>
                                <button className='w-48 btn-outline border px-6 py-3.5 rounded-3xl bg-[#9538E2] text-white text-lg font-medium'>Purchase</button>
                            </div>
                        </div>
                        {wishlistList.length === 0 ? (
                            <p>No items in wishlist.</p>
                        ) : (
                            wishlistList.map((gadget, index) => (
                                <div key={index} className="w-[1280px] mx-auto  border bg-white rounded-xl shadow-lg flex items-start p-4 mb-7">
                                    <img src={gadget.product_image} alt={gadget.product_title} className="w-72 h-48 object-cover rounded-xl border shadow-lg" />
                                    <div className="p-4 flex flex-col">
                                        <h3 className="text-xl font-bold mb-4">{gadget.product_title || "No Title"}</h3>
                                        <p className="text-gray-700 mb-4">{gadget.description || "No description available"}</p>
                                        <p className="text-lg font-bold ">Price : {gadget.price || "$0.00"}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
