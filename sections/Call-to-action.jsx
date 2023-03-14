import React from "react";

const CallToAction = () => {
  return (
    <section
      className="bg-blue-500 py-10"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.59)) , url('/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:'fixed'
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Get Started Today
        </h2>
        <p className="text-lg text-white mb-8">
          Let us help you with your logistics needs
        </p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
          Request a Quote
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
