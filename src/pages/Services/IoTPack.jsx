import React from "react";
import Bridge from "../../assets/Images/Artboard-2-2.webp";
import logo from"../../assets/Images/Screenshot 2024-08-12 234029.png"
const SupplierLogo = () => (
    <div className="bg-gray-100 h-12 flex items-center justify-center rounded">
      <img src={logo} />
    </div>
  );;
  
const IoTPack = () => {
  return (
    <>
      {/* Background */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${Bridge})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex items-center justify-left h-full text-left px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="block text-white text-4xl md:text-5xl lg:text-7xl">
                Your FREE 60-Day IoT Starter Pack
              </span>
            </h1>

            <button className="bg-red-600 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900">
              Get Yours Now
            </button>
          </div>
        </div>
        {/* Bottom Curve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
        ></div>
      </div>

      <div className="mt-16 px-4 md:px-8 lg:px-16">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-600 lg:text-left">What is in our IoT starter pack?</h2>

        {/* Supplier Logo */}
      <div className="max-w-6xl mx-auto p-4 mt-40 mb-40">
        <SupplierLogo />
      </div>

        <h3 className="text-xl font-bold mb-4 text-center text-gray-600 lg:text-left">Get started with your FREE 60-day IoT Starter Pack</h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" type="text" placeholder="Name" />
          <input className="border p-2 rounded" type="text" placeholder="Company" />
          <input className="border p-2 rounded" type="tel" placeholder="Contact Number" />
          <input className="border p-2 rounded" type="email" placeholder="Email" />
          <textarea className="border p-2 rounded md:col-span-2" rows="4" placeholder="Message"></textarea>
          <div className="md:col-span-2">
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy">I agree to the privacy policy (Required)</label>
          </div>
          <button
              type="submit"
              className="bg-red-600 text-white mt-10 px-6 py-2 rounded hover:bg-red-700"
            >
              Submit
            </button>        </form>

        <p className="mt-4 text-sm mb-20 text-gray-600">
          Please note:
          <ul className="list-disc list-inside">
            <li>This agreement is for a 60-day term. If you would like to extend it, each SIM will be billed at £6.20+VAT on a 30-day rolling agreement. Tariffs can be changed after the first 60 days.</li>
            <li>Overage charges apply.</li>
            <li>Postage charges are not included in the offer.</li>
          </ul>
        </p>
      </div>
    </>
  );
};
export default IoTPack;
