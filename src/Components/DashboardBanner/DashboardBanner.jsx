import { Link } from 'react-router-dom';


const DashboardBanner = ({ activeTab, setActiveTab }) => {
    return (
        <div className=' h-80 bg-[#9538E2] flex flex-col items-center text-white '>
                <div className='flex flex-col  items-center text-white mt-6'>
                    <h2 className=' text-4xl font-bold mb-6 mt-5'>Dashboard</h2>
                    <p className='lg:w-4/5 text-center '>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
               
                
                <div className='flex items-center gap-9 mt-7'>
                <button
                    className={`w-40 text-center rounded-3xl py-3 ${
                        activeTab === 'cart' ? 'bg-white text-[#9538E2] font-bold' : 'bg-[#9538E2] text-white border font-bold'
                    }`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart
                </button>

                <button
                    className={`w-40 text-center rounded-3xl py-3 ${
                        activeTab === 'wishlist' ? 'bg-white text-[#9538E2] font-bold' : 'bg-[#9538E2] text-white border font-bold'
                    }`}
                    onClick={() => setActiveTab('wishlist')}
                >
                    Wishlist
                </button>
                </div>
            </div>
    );
};

export default DashboardBanner;