import React from "react";

const LocationAddress = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-4 mt-40 mb-40 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-4">
            Why location address information is needed?
          </h1>
          <p className="text-gray-600 mb-4">
            Accurate location address information is needed to ensure that
            accurate and precise location information is presented to the 999
            operator (or even an organisational internal safety desk) when an
            emergency call is made from a VoIP telephone. The reason that the
            automatic provision of reliable location information is important is
            to cater for emergency situations where the caller is:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Unable to speak
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Disoriented; or
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Has difficulty making themselves understood due to language or
              dialect issues.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-lg md:text-xl text-gray-600 mb-4">
            Please use this form to provide us with your exact location.
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your First Name"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Last Name"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Associated DDI"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Address Line 3"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Town"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Postcode"
              className="w-full p-3 border rounded focus:border-red-600 focus:outline-none"
            />
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
      </div>

      <div className="max-w-6xl mx-auto p-4 mt-12 text-center mb-40">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-600 mb-4">
          Moral Obligations
        </h1>
        <p className="text-gray-600">
          Irrespective of the regulatory and legal obligations, all
          organisations and home users have a moral duty of care to provide
          maximum protection for their workforce, family, and visitors to their
          premises. Therefore, ensuring that precise and accurate location
          information is delivered with a 999 call from their private telephone
          network is simply the right thing for an organisation to do. Doing the
          right thing ensures that anyone in their workforce who is in the
          unfortunate situation of having to make an emergency call would
          receive the necessary assistance as quickly as possible.
        </p>
      </div>
    </>
  );
};

export default LocationAddress;
