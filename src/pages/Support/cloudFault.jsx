import React from 'react';
import qr from '../../assets/Images/barcode.jpeg'
const CloudFault = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-40 mb-40 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <h1 className="text-4xl font-semibold text-gray-700 mb-4">
          Log a <span className="text-red-600">support</span> request
        </h1>
        <p className="text-gray-600 mb-4">
          Scan the below QR code to open a new text message to send our way.
        </p>
        <p className="mb-2">
          E-mail: <a href="mailto:cloud@fidelity-group.co.uk" className="text-red-600">cloud@fidelity-group.co.uk</a>
        </p>
        <p className="mb-4">
          Tel: <span className="text-red-600">03330 15 15 01</span>
        </p>
        <img src={qr} alt="QR Code" className="w-48 h-48" />
      </div>
      <div className="md:w-2/3">
        <form className="space-y-10">
          <input
            type="text"
            placeholder="Your First and Last Name"
            className="w-full p-2 border rounded focus:border-red-600 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            className="w-full p-2 border rounded focus:border-red-600 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Your Company Name"
            className="w-full p-2 border rounded focus:border-red-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your E-mail Address"
            className="w-full p-2 border rounded focus:border-red-600 focus:outline-none"
          />
          <select className="w-full p-2 border rounded text-gray-400  focus:border-red-600 focus:outline-none">
            <option value="">- Fault type: select a option -</option>
            {/* Add more options here */}
          </select>
          <textarea
            placeholder="Fault description"
            className="w-full p-2 border rounded h-32  focus:border-red-600 focus:outline-none"
          ></textarea>
          <div className="flex items-center">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I agree to and have read Fidelity's privacy policy.
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CloudFault;