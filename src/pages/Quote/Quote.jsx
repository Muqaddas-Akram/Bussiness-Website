import React from 'react';
import quote from "../../assets/Images/Artboard-38.webp"

const Quote = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Talk to us today</h1>
      <p className="mb-8 text-gray-600">
        We'd love to talk you if you are considering using one of our outstanding services. Or if you'd like to
        find out how you can become one of our trusted partners. We have a team of experts ready to help
        you.
      </p>
      
      <form className="bg-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="text" placeholder="Company name" className="p-2 border rounded" />
          <input type="email" placeholder="E-mail address" className="p-2 border rounded" />
          <input type="tel" placeholder="Contact number" className="p-2 border rounded" />
        </div>
        
        <p className="mb-2 text-gray-700">Required Business Services:</p>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            'IoT Connectivity Management',
            'Payment Solutions',
            'Energy Procurement',
            'Hosted Telephony/ VoIP/ MS Teams',
            'Business Mobile',
            'Billing and CRM Platform',
            'Cloud and Hosting',
            'Connectivity and Data',
            'Partner/ Reseller Programme'
          ].map((service, index) => (
            <label key={index} className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
        
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">
          Send
        </button>
      </form>
      
      <div className="mt-8 flex items-center">
        <img src={quote} alt="Call center" className="w-1/3 mr-4 rounded" />
        <div>
          <h2 className="text-xl font-semibold mb-2">Prefer to pick up the phone and talk to us?</h2>
          <p className="text-gray-600">
            0800 840 6800 to talk to us about any of our services or partnerships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;