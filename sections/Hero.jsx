import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/hero.jpg"
          alt="Logistics services"
        />
        <div
          className="absolute inset-0 bg-gray-900 opacity-60"
          aria-hidden="true"
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
        <span className="block xl:inline text-5xl">EVER<span className='text-green-600'>GREEN</span></span> <br />  
        <span className="block xl:inline">Efficient Logistics</span>{' '}
          <span className="block text-green-600 xl:inline">
            Solutions for Your Business
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-100">
          We offer a full range of logistics services to help your business
          thrive. From transportation and warehousing to customs clearance and
          freight forwarding, we`&lsquo;`ve got you covered.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="text-base font-medium text-green-600 bg-white px-8 py-3 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


