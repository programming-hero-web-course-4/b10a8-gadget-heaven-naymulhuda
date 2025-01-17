import React, { useEffect, useState } from 'react';
import { getStoredAddToCart } from '../../Utility/addToDB';
import { useLoaderData } from 'react-router-dom';

const CartedGadget = ({ cartGadgets }) => {
    const allGadgets = useLoaderData();
    const [cartList, setCartList] = useState([]);

    useEffect(() => {
        if (allGadgets && allGadgets.length > 0) {
            const storedCartList = getStoredAddToCart() || [];
            const storedCartListInt = storedCartList.map(id => parseInt(id, 10))

            const cartGagdetList = allGadgets.filter(gadget => storedCartListInt.includes(gadget.product_id));

            setCartList(cartGagdetList);
        }
    }, [allGadgets]);

    return (
        <div>
            <DashboardBanner />
            <div>
                <h2>Carted Gadget : {cartList.length}</h2>
            </div>
            {/** Div started */}
            <div className="p-6">
                {cartList.map((gadget) => (
                    <div key={gadget.product_id} className="border border-green-500 rounded-lg shadow-lg flex items-start p-4 mb-7">
                        <img src={gadget.product_image} alt={gadget.product_title} className="w-72 h-48 object-cover" />
                        <div className="p-4 flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">{gadget.product_title}</h3>
                            <p className="text-gray-700 mb-4">{gadget.description}</p>
                            <p className="text-lg font-bold text-blue-600">{gadget.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CartedGadget;