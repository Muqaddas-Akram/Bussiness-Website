import React from "react";
import Bridge from "../../assets/Images/bridge.jpg";
import logo from "../../assets/Images/Energy-Partners_Fidelity-Group-UK.png";
import Contact from "../../components/Contact/contact";

const SupplierLogo = () => (
  <div className="bg-gray-100 h-12 flex items-center justify-center rounded">
    <img src={logo} />
  </div>
);

function GreenEnergy() {
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

        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500">
              <span className="text-white">
                Your business needs Green Energy.
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl mb-4">
              Reduce the impact your business has on the environment with green energy.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-green-400 text-white px-8 py-4 rounded hover:bg-green-500 transition duration-300">
                Speak With an Expert
              </button>
              <button className="bg-white text-green-400 px-8 py-4 rounded border border-green-400 hover:bg-gray-100 transition duration-300">
                Call Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
        ></div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-gray-500 text-sm uppercase tracking-wider text-center mb-4">
          GREEN ENERGY IN THE UK.
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-700">
          We Work With Many Trusted Suppliers To Help Find You The Best Business Green Energy Rates.
        </h1>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="text-lg font-semibold text-gray-700">
                Switching to a green energy tariff allows you to meet the GHG Protocol Corporate Standards.
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 mb-4">
              Choose the Green Energy deal you need from our extensive range of tariffs. All Green Energy Products from Fidelity use power generated from 100% renewable sources.
            </p>
            <p className="text-gray-600 mb-6">
              Every Energy tariff comes with a zero emissions rating and is backed by a "Guarantee of Origin", certifying that the electricity has been generated exclusively through wind or hydro assets.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300">
              Find Out More
            </button>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-green-500">
          The business benefits of going green
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: "🌱", title: "Zero Emissions", description: "Your business can report zero emissions for Scope 2 purchased electricity." },
            { icon: "👣", title: "Reduce Your Footprint", description: "Renewable energy tariffs reduce your organisation's overall carbon footprint." },
            { icon: "🌍", title: "Show Your Commitment", description: "Demonstrate your commitment to renewable and sustainable goals, achieving your corporate social responsibility targets." },
            { icon: "🏆", title: "Enhance Your Reputation", description: "Enhance your reputation with customers and other stakeholders, demonstrating best practice in your marketplace." },
          ].map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{benefit.icon}</div>
              <h3 className="font-semibold mb-2 text-lg">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Logo */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <SupplierLogo />
      </div>

      <Contact />
    </>
  );
}

export default GreenEnergy;
