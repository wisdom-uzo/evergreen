"use client"
import React, { useState } from 'react';

const Header = () => {
    const [openNav, setOpenNav] = useState(false)
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="/logo.jpg"
              alt="Logo"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setOpenNav(!openNav)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for the menu button */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu, toggle className based on menu state */}
      {openNav && 
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a       href="#"
          className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
        >
          Services
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact Us
        </a>
      </div>
    </div>
        }
  </header>
  )
}


export default Header
           
