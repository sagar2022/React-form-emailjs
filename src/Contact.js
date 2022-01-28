import React from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  return (
    <div className="h-screen">
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 bg-blue-300 lg:h-2/3">
        <div className="flex flex-col justify-center text-center lg:p-40 md:text-left">
          <p className="uppercase font-medium opacity-4 text-gray-700">
            Contact Us
          </p>
          <h1 className="lg:text-6xl md:text-5xl text-4xl">Let's Talk</h1>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
