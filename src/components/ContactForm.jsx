import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextArea from "./TextArea";
import { ChevronRightIcon } from "@heroicons/react/solid";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [values, setVaues] = useState({
    fullName: "",
    email: "",
    role: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setVaues((values) => ({
      ...values,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_oe2c2e6",
        "template_wdtxjyq",
        values,
        "user_lwrXxHvpY81tGbTbpwNXE"
      )
      .then(
        (response) => {
          console.log("SUCCESS", response);
          setVaues({
            fullName: "",
            email: "",
            role: "",
            message: ""
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAIL...", error);
        }
      );
  };

  return (
    <div className="lg:mt-48 lg:mr-48 pt-6 pb-8 bg-white shadow-xl rounded p-5">
      {status && renderAlert()}
      <form onSubmit={handleSubmit}>
        <h3 className="text-gray-700 mb-7 text-xl font-semibold">
          Send us message
        </h3>
        <InputField
          value={values.fullName}
          handleChange={handleChange}
          label="Full Name"
          type="text"
          name="fullName"
          placeholder="John Doe"
        />
        <InputField
          value={values.email}
          handleChange={handleChange}
          label="Email"
          type="email"
          name="email"
          placeholder="john@example.com"
          required
        />
        <SelectField handleChange={handleChange} label="Role" name="role" />
        <TextArea
          value={values.message}
          handleChange={handleChange}
          label="Your message here"
          name="message"
        />
        <button
          type="submit"
          className="mt-4 bg-gray-900 text-gray-100 rounded px-4 py-2 hover:bg-gray-700 focus:outline-none"
        >
          Send <ChevronRightIcon className="w-6 float-right ml-2" />
        </button>
      </form>
    </div>
  );
};

const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your Message Submitted Successfully</p>
  </div>
);

export default ContactForm;
