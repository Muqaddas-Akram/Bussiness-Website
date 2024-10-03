import React, { useState } from 'react';
import contactimg from "../../assets/Images/Artboard-29.webp"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contactNumber: '',
    email: '',
    message: '',
    agreePolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto mt-20 px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-0 md:pr-8">
          <h2 className="text-3xl font-bold text-gray-500 mb-10">Connect with us</h2>
          <p className="text-gray-600 mb-10">
            If you'd like to find out more, why not call us now on 0800 840 6800 or simply
            fill in our contact form below and we'll be in touch.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="border border-gray-300 p-2 rounded mb-10 focus:border-red-600 focus:outline-none"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="border border-gray-300 p-2 rounded mb-10 focus:border-red-600 focus:outline-none"
                onChange={handleChange}
                value={formData.company}
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className="border border-gray-300 p-2 rounded mb-10 focus:border-red-600 focus:outline-none"
                onChange={handleChange}
                value={formData.contactNumber}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="border border-gray-300 p-2 rounded mb-10 focus:border-red-600 focus:outline-none"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded mb-10 focus:border-red-600 focus:outline-none"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <div className="flex items-center mt-10 mb-10">
              <input
                type="checkbox"
                name="agreePolicy"
                id="agreePolicy"
                className="mr-2"
                onChange={handleChange}
                checked={formData.agreePolicy}
              />
              <label htmlFor="agreePolicy" className="text-sm text-gray-600">
                I agree to and have read Fidelity's privacy policy.
              </label>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white mt-10 px-6 py-2 rounded hover:bg-red-700"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src={contactimg}
            alt="Customer support team"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
