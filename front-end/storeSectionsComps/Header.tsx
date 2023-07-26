// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow z-10  top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-xl text-gray-800">Tchisama</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Market
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                <span>Cart</span>
                <span className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center ml-2">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
