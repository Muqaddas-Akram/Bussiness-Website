import React from 'react';

const ReportFault = () => {
  return (
    <div className="container mx-auto px-4 mt-20 mb-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="max-w-3xl p-4">
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">
          Log a <span className="text-red-600">support</span> request
        </h1>
        
        <p className="mb-4 text-gray-600">
          You can also report faults by calling our freephone number 0800 
          840 6800 or 0333 323 0404. Your fault will be logged and 
          responded to within the terms of your service level agreement.
        </p>
        
        <p className="mb-4">
          E-mail: <a href="mailto:support@fidelity-group.co.uk" className="text-red-600">support@fidelity-group.co.uk</a><br />
          Tel: <span className="text-red-600">0800 840 6800</span>
        </p>
      </div>
      
      <form className="space-y-4 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Your First and Last Name"
          className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Your Company Name"
          className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
        />
        <input
          type="tel"
          placeholder="Your Contact Number"
          className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
        />
        <textarea
          placeholder="Description of fault"
          className="w-full p-3 border rounded h-32 focus:border-red-600 focus:outline-none"
        ></textarea>
        
        <div className="flex items-start">
          <input type="checkbox" id="privacy" className="mr-2 mt-1" />
          <label htmlFor="privacy" className="text-sm text-gray-600">
            I agree to and have read Fidelity's privacy policy.
          </label>
        </div>
        
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportFault;
