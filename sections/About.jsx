import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are a logistics company that is dedicated to providing the best
            possible shipping and delivery services for businesses and
            individuals alike. With years of experience in the industry, we have
            built a reputation for being reliable, efficient, and affordable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is simple: to make shipping and delivery easy for our
            customers. Whether you are a small business looking to expand your
            reach or an individual who needs to send a package across the
            country, we have the expertise and resources to get the job done
            quickly and efficiently.
          </p>
          <a
            href="#"
            className="text-blue-500 font-bold hover:text-blue-700 text-lg"
          >
            Learn More
          </a>
        </div>
        <div className="lg:w-1/2">
          <img
            src='ab.jpg'
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
