import React from 'react';
import Contact from "../../components/Contact/contact";

const TermsLink = ({ text }) => (
  <a href="#" className="block text-red-600 hover:underline text-xl mb-2">
    {text}
    <span className="ml-1">→</span>
  </a>
);

const TermsConditions = () => {
  return (
    <>
      <div className="max-w-xl mx-auto p-4 my-20">
        <h2 className="text-3xl text-gray-700 font-semibold mb-6 text-center">
          Please make your selection:
        </h2>
        <div className="text-center">
          <TermsLink text="Fidelity Group Main Terms" />
          <TermsLink text="Broadband Terms" />
          <TermsLink text="Broadband Router Protect Terms" />
          <TermsLink text="IoT Terms" />
          <TermsLink text="Mobile Equipment Terms" />
          <TermsLink text="Mobile Leasing Terms" />
          <TermsLink text="Rental Leasing Terms" />
          <TermsLink text="VoIP Terms" />
        </div>
      </div>
      <Contact />
    </>
  );
};

export default TermsConditions;
