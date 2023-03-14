import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4">
            <img src="/logo.jpg" alt="" className=" w-1/3 rounded-lg" />
            <h2 className="text-lg font-medium mb-4">EVERGREEN</h2>
            <p className="text-sm mb-4">
              We are a logistics company that provides a wide range of
              transportation and warehousing services to businesses across the
              globe.
            </p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-medium mb-4">Our Services</h2>
            <ul className="text-sm mb-4">
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  Transportation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  Warehousing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  Supply Chain Management
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  Freight Forwarding
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-medium mb-4">Contact Us</h2>
            <ul className="text-sm mb-4">
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  123 Main St.
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  Anytown, USA 12345
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  info@logistics.com
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-500 hover:text-white">
                  555-555-5555
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-medium mb-4">Newsletter</h2>
            <p className="text-sm mb-4">
              Sign up for our newsletter to receive the latest news and updates
              from our team.
            </p>
            <form className="flex">
              <input
                type="email"
               
                placeholder="Enter your email"
                className="w-full rounded-l py-2 px-3 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white rounded-r px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-500">
            &copy; 2023 Logistics Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    );
    };
    
    export default Footer;