import React from "react";
import Contact from "../../components/Contact/contact"
const Careers = () => {
  return (
    <>
    <div className="text-center mb-8 bg-gray-100 py-36 flex justify-between items-center px-16">
      <div>
        <h2 className="text-7xl mb-2 text-gray-500">
        Do you have the <span className="text-red-600">X factor?</span> Check back soon for any new open positions 
        to become part of our family of professional experts that are leading change
         and making our customers smile.
        </h2>
      </div>
    </div>
    <Contact/>
    </>
  );
};
export default Careers;
