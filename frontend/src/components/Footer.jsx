import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#070617] text-white">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-between max-md:items-center max-md:align-center ">
        {/* Company Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
          <h1 className="text-xs uppercase tracking-widest text-white/20 mb-4">Company</h1>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mission</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Social</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Get in touch</li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
          <h1 className="text-xs uppercase tracking-widest text-white/20 mb-4">Products</h1>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Mission</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Social</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Get in touch</li>
          </ul>
        </div>

        {/* Accounts Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
          <h1 className="text-xs uppercase tracking-widest text-white/20 mb-4">Account</h1>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">My account</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Login</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Register</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Social</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Get in touch</li>
          </ul>
        </div>


        {/* Support Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
          <h1 className="text-xs uppercase tracking-widest text-white/20 mb-4">Support</h1>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact us</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Web chat</li>
            <li className="text-gray-400 hover:text-white transition-colors cursor-pointer">Open ticket</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-8">
          <h1 className="text-xs uppercase tracking-widest text-white/20 mb-4">Social</h1>
          <ul className="flex space-x-2">
            <li>
              <img src="https://svgshare.com/i/5fq.svg" alt="Social Icon" className="w-8" />
            </li>
            <li>
              <img src="https://svgshare.com/i/5eA.svg" alt="Social Icon" className="w-8" />
            </li>
            <li>
              <img src="https://svgshare.com/i/5f_.svg" alt="Social Icon" className="w-8" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;