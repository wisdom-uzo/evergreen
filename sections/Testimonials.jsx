import { Fragment } from 'react';

function Testimonials() {
  const testimonials = [
    {
      quote:
        "I've been using this logistics company for years and they've never let me down. Their customer service is top-notch and their rates are very competitive.",
      author: 'John Smith',
      company: 'XYZ Corporation',
      logo: '/about.jpg',
    },
    {
      quote:
        "I was impressed with the speed and efficiency of their shipping services. My packages arrived on time and in great condition.",
      author: 'Jane Doe',
      company: 'Small Business Owner',
      logo: '/about.jpg',
    },
    {
      quote:
        "Their warehousing services have been a game changer for our business. We no longer have to worry about storing inventory and can focus on other aspects of our operations.",
      author: 'Bob Johnson',
      company: 'ABC Company',
      logo: '/about.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            What Our Clients Say
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Fragment key={testimonial.author}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-sm font-medium">{testimonial.quote}</p>
                <div className="mt-4 flex">
                  {testimonial.logo && (
                    <img
                      className="h-12 w-12 rounded-full object-cover mr-4"
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                    />
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
