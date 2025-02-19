import { NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineHeart } from "react-icons/hi";


const Navbar = () => {
    const location = useLocation();

    // Determine styles based on the current route
    const isHomePage = location.pathname === "/";
    const navbarBgColor = isHomePage ? "bg-[#9333ea]" : "bg-white";
    const textColor = isHomePage ? "text-white" : "text-black";
    const iconColor = isHomePage ? "text-black" : "text-black";

    const Links = <>

        <div className="flex items-center gap-5">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </div>

    </>



    return (
        <div className={`navbar ${navbarBgColor} mt-6 rounded-t-3xl ${isHomePage ? "max-w-[1600px] mx-auto" : "w-full"} ${textColor}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content ${navbarBgColor} rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                        {Links}
                    </ul>
                </div>
                <a className={`btn btn-ghost text-xl ${textColor} lg:ml-40`}>Gadget Heaven</a>
            </div>
            <div className={`menu menu-sm navbar-center hidden lg:flex lg:ml-32 ${textColor}`}>
                <ul>
                    {Links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4 lg:mr-40">
                <div className="bg-white p-2 rounded-full border">
                <CiShoppingCart className={`w-5 h-5 ${iconColor}`}/>
                </div>
                <div className="bg-white p-2 rounded-full border">
                <HiOutlineHeart className={`w-5 h-5 ${iconColor}`}/>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;