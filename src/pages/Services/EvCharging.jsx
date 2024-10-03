import React from "react";
import logo from "../../assets/Images/bridge.jpg";
import Contact from "../../components/Contact/contact";

const Statistic = ({ value, description }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{value}</div>
    <p className="text-sm md:text-base text-gray-600 uppercase">{description}</p>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="text-center mb-8">
    <div className="text-red-600 text-4xl md:text-5xl mb-2">{icon}</div>
    <h3 className="font-semibold mb-2 text-lg md:text-xl">{title}</h3>
    <p className="text-sm md:text-base text-gray-600">{description}</p>
  </div>
);

const BenefitCard = ({ title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="text-red-600 text-2xl mb-2">✓</div>
    <h3 className="font-semibold mb-2 text-lg">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

function EvCharging() {
  const services = [
    { icon: "👥", title: "Support, Service and Guidance", description: "Benefit from one of the most comprehensive support, maintenance and warranty programmes in the industry." },
    { icon: "💼", title: "Workplace Charging Scheme (WCS)", description: "Provide support for the government backed Workplace Charging Scheme (WCS) that gives your business up to £200 per socket to install EV charging points at workplaces." },
    { icon: "🔌", title: "Custom Designed Solutions", description: "Customise a wide range of charging points to suit your business requirements, specifications and branding, enabling you to provide the best solution for you, your employees or your customers." },
  ];

  const benefits = [
    { title: "Government Grants", description: "Government grants are available to subsidise installation costs." },
    { title: "Build Your Reputation", description: "Build your brand reputation by adopting EVs and reducing emissions." },
    { title: "Competitive", description: "Create a competitive advantage over other businesses who do not have charge points installed." },
    { title: "All-round Satisfaction", description: "Improve customer and employee satisfaction whilst generating indirect profits for your business." },
  ];

  return (
    <>
      {/* Background */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-500">
              <span className="text-white">
                Get £350 support for every socket installed. EV Charging Stations for Business
              </span>
            </h1>
            <p className="text-white text-base md:text-lg lg:text-xl mb-2">
              Electric vehicles are happening. Your workforce wants them, your customers would like them. Support them with EV charging stations at your business.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 mt-4 rounded hover:bg-red-700">
              Get an EV Quote
            </button>
            <button className="bg-white text-red-600 px-6 py-3 ml-10 mt-4 rounded hover:bg-gray-100">
              Speak With an Expert
            </button>
          </div>
        </div>

        {/* Bottom Curve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)",
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto p-4">
        <p className="text-gray-500 text-sm uppercase tracking-wider text-center mb-4">
          EV CHARGING STATIONS IN THE UK.
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-700">
          We work alongside handpicked experts to install <span className="text-red-600">EV charging stations</span> on your premises.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { value: "£14000", description: "Potential government grants" },
            { value: "9m", description: "Electric vehicles predicted to be on the road by 2030" },
            { value: "223000", description: "Businesses plan to introduce more EVs into their fleets" },
            { value: "75%", description: "Of new registrations completed by July 2019 - an increase of 6200% in just six years." }
          ].map((stat, index) => (
            <Statistic key={index} {...stat} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="text-lg md:text-xl font-semibold text-gray-700">
                From 2030 it will no longer be possible to buy new cars and vans powered only by petrol or diesel.
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-600 mb-4">
              With access to Europe's largest and most diverse range of products, you can charge all fully electric and hybrid vehicles – Fidelity has supplied and installed over 150,000 charge points at EV Charging Stations to date. You can also rely on support from one of the most comprehensive maintenance and warranty programmes in the industry.
            </p>
            <p className="text-gray-600 mb-4">
              *To support the installation of EV points at your workplace the WCS government grant provides up to £350 per socket for a maximum of 40 sockets. That is up to £14,000!
            </p>
            <p className="text-gray-600 mb-6">
              26% of all carbon emissions are generated from transport, the largest source in the UK. Some EV solutions allow you to report on expenditure, energy, and CO2 savings.
            </p>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition duration-300">
              Find Out More
            </button>
          </div>
        </div>
      </div>

      {/* Services and Benefits */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          The <span className="text-red-600">benefits</span> of EV Charging Stations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
        <div className="bg-gray-100 py-10 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0 text-gray-500">
            We’ll search for the <span className="text-red-600">best options</span>, and support you through the process.
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 whitespace-nowrap">
              Contact Us
            </button>
            <button className="bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 whitespace-nowrap">
              Call us
            </button>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default EvCharging;
