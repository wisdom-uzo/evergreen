import React from 'react';
import { FaShippingFast, FaShieldAlt, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8 lg:mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 rounded-full p-4">
              <FaShippingFast className="text-white text-2xl" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mt-4">
              Fast and Free Shipping
            </h3>
            <p className="text-gray-600 text-center mt-2">
              We understand how exciting it is to receive your purchase, so we
              offer fast and free shipping on all orders. With our reliable
              shipping partners, we ensure that your package arrives at your
              doorstep in no time.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 rounded-full p-4">
              <FaShieldAlt className="text-white text-2xl" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mt-4">
              Safe and Secure Transactions
            </h3>
            <p className="text-gray-600 text-center mt-2">
              We take security seriously and use the latest encryption and
              fraud detection technology to protect your information. Shop with
              peace of mind knowing that your personal and payment information
              is safe and secure.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 rounded-full p-4">
              <FaHeadset className="text-white text-2xl" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mt-4">
              Excellent Customer Service
            </h3>
            <p className="text-gray-600 text-center mt-2">
              We pride ourselves on providing exceptional customer service. Our
              team is available 24/7 to assist with any questions or concerns
              you may have. We are committed to making your shopping experience
              as easy and enjoyable as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
