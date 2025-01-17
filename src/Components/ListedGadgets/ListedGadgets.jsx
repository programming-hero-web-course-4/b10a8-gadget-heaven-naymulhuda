import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToWishList } from '../../Utility/addToWishList';
import DashboardBanner from '../DashboardBanner/DashboardBanner';

const ListedGadgets = ({ wishlistGadgets }) => {
    const allGadgets = useLoaderData();

    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredToWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const wishGadgetList = allGadgets.filter(gadget => storedWishListInt.includes(gadget.product_id));

        setWishList(wishGadgetList);
    }, [allGadgets]);

    return (
        <div>
            <DashboardBanner />
            <div className="border-2 border-blue-600">
                <h2 className="text-4xl font-bold text-center my-6">
                    Gadget Wish List: {wishlistGadgets.length}
                </h2>
                <div className=" p-6">
                    {wishList.map(gadget => (
                        <div key={gadget.product_id}className="border border-green-500 rounded-lg shadow-lg flex items-start p-4 mb-7" >
                            <img src={gadget.product_image} alt={gadget.product_title}
                                className="w-72 h-48 object-cover border border-red-500"
                            />
                            <div className="p-4 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{gadget.product_title}</h3>
                                <p className="text-gray-700 mb-4">{gadget.description}</p>
                                <p className="text-lg font-bold text-blue-600">{gadget.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListedGadgets;
