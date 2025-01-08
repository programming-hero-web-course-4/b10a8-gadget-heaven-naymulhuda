import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect (() => {
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])
    return (
        <div className='max-w-[1600px] mx-auto'>
            <h2 className='text-4xl font-bold text-center mt-80'>Explore Cutting-Edge Gadgets</h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
                {
                    gadgets.map(gadget => <Gadget gadget={gadget} key={gadget.product_id}></Gadget>)
                }
            </div>
        </div>
    );
};

export default Gadgets;