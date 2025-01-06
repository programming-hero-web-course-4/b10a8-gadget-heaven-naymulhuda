import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-80 flex flex-col items-center space-y-10">
      {/* Upper Section: Logo */}
      <div className="flex flex-col items-center justify-center text-center m-0">
         <h2 className='text-4xl font-bold'>Gadget Heaven</h2>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr className="border-t border-gray-400 w-full max-w-4xl m-0" />
      {/* Lower Section: Services, Company, Legal */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-52 gap-8 w-full text-center sm:text-left">
        {/* Services */}
        <nav>
          <h6 className="text-lg font-bold text-black text-center">Services</h6>
          <div className="flex flex-col gap-2 text-center">
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover"> Returns</a>
          </div>
        </nav>
        {/* Company */}
        <nav>
          <h6 className="text-lg font-bold text-black text-center">Company</h6>
          <div className="flex flex-col gap-2 text-center">
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </div>
        </nav>
        {/* Legal */}
        <nav>
          <h6 className="text-lg font-bold text-black text-center">Legal</h6>
          <div className="flex flex-col gap-2 text-center">
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </div>
    </footer>

  );
};

export default Footer;