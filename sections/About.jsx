import React from 'react';

function AboutUs() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Who We Are
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are a full-service logistics company dedicated to providing reliable, customized solutions to our clients.
            Our team of experienced professionals has the knowledge and expertise to handle all your logistics needs,
            whether you need transportation, warehousing, or supply chain management.
          </p>
        </div>
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-xl font-medium text-gray-900">Our Values</h3>
            <div className="mt-4">
              <ul className="list-disc list-inside mt-4 text-lg text-gray-500">
                <li>Reliability - we pride ourselves on delivering on-time, every time</li>
                <li>Customized solutions - we work with our clients to develop tailored logistics solutions</li>
                <li>Exceptional customer service - our team is available 24/7 to answer your questions and address your concerns</li>
                <li>State-of-the-art technology - we leverage the latest technology to ensure maximum efficiency and visibility</li>
                <li>Competitive pricing - we offer competitive rates without sacrificing quality</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            
            <img src='/about.jpg' alt="Company Headquarters" className="h-64 w-full object-cover md:h-full  rounded-lg mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
