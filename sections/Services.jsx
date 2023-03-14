import React from "react";

const services = [
  // {
  //   title: "Warehousing",
  //   description:
  //     "We offer state-of-the-art warehousing and distribution facilities to meet all of your logistics needs.",
  //   image: "https://via.placeholder.com/300",
  // },
  
  // {
  //   title: "Customs Clearance",
  //   description:
  //     "We provide comprehensive customs clearance services to ensure your goods are processed quickly and efficiently.",
  //   image: "https://via.placeholder.com/300",
  // },
  {
    title: "Road Transport",
    description:
      "We offer reliable and efficient road transport services for your domestic and cross-border shipments.",
    image: "/about.jpg",
  },
  {
    title: "Air Freight",
    description:
      "Our air freight services offer fast and cost-effective delivery of your goods to destinations around the world.",
    image: "air.jpg",
  },
  {
    title: "Sea Freight",
    description:
      "We provide comprehensive sea freight services to meet all of your international shipping needs.",
    image: "hero.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h2>
          <p className="text-xl text-gray-600">
            We offer a wide range of logistics services to meet your needs.
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center">
            {services.map((service) => (
              <div
                key={service.title}
                className="max-w-xs rounded overflow-hidden shadow-lg m-4"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={service.image}
                  alt={service.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{service.title}</div>
                  <p className="text-gray-700 text-base">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
