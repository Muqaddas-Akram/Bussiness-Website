import React from "react";
import Bridge from "../../assets/Images/bridge.jpg";
import logo from "../../assets/Images/Energy-Partners_Fidelity-Group-UK.png";
import Contact from "../../components/Contact/contact";

const SupplierLogo = () => (
  <div className="bg-gray-100 h-12 flex items-center justify-center rounded">
    <img src={logo} />
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <div className="text-red-600 text-3xl mb-2">{icon}</div>
    <h3 className="font-semibold mb-2 text-center">{title}</h3>
    <p className="text-sm text-gray-600 text-center">{description}</p>
  </div>
);

const StepCard = ({ number, title, description }) => (
  <div className="relative mb-8">
    <div
      className={`absolute top-0 left-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
        number === 2 ? "bg-red-600" : "bg-gray-200"
      }`}
    >
      {number}
    </div>
    <div className="ml-12">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

function BussinessElectricity() {
  const steps = [
    {
      number: 1,
      title: "Send us a bill",
      description:
        "Using our smart technology, we will search the market on your behalf to find a tariff that best suits your business.",
    },
    {
      number: 2,
      title: "Choose a tariff",
      description:
        "We will send over a selection of the best available rates and help you choose the right tariff and contract length.",
    },
    {
      number: 3,
      title: "Leave the rest to us",
      description:
        "Our energy experts will take care of everything, from supplier negotiations to managing your energy contracts.",
    },
  ];

  const services = [
    {
      icon: "✓",
      title: "Gas Procurement",
      description:
        "We will support you through the energy switching process to reduce business costs and decrease your carbon emissions.",
    },
    {
      icon: "✓",
      title: "Consultancy",
      description:
        "With our unique, customer-focused, consultancy approach we will support you from initial consultation through the entire lifetime of an account.",
    },
    {
      icon: "✓",
      title: "Half Hourly Meterage",
      description:
        "Consume less energy and secure cheaper rates with our half hourly meters.",
    },
   
    
  ];

  return (
    <>
      {/* Background */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${Bridge})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500">
              <span className="text-white">
                Stop paying more for your Business Electricity.
              </span>
            </h1>
            <p className="text-white text-lg md:text-xl mb-2">
              We will make the process of finding and switching tariffs painless.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-7">
              <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-blue-900">
                Speak With an Expert
              </button>
              <button className="bg-white text-red-600 px-6 py-3 rounded hover:bg-blue-600">
                Call Us
              </button>
            </div>
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
          BUSINESS GAS PROCUREMENT AND MANAGEMENT
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-500 font-bold text-center mb-8">
          We manage the whole process so you can focus on your business and
          customers instead of being tied up with gas tariffs and paperwork.
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="md:w-1/3">
            <div className="border-l-4 border-red-600 pl-4">
              <p className="text-lg text-gray-600 font-semibold">
                We work with many{" "}
                <span className="text-red-600">trusted suppliers</span> to help
                find you the best business gas rates.
              </p>
            </div>
          </div>

          <div className="md:w-2/3">
            <p className="text-gray-700 mb-6">
              Working with a wide range of suppliers ensures we have access to
              the best market pricing available. Every supplier picked by
              Fidelity Group has been carefully selected by us based on their
              long-term financial viability, billing accuracy, ease to do
              business with and responsiveness to our customers. Rather than
              have dozens of unproven and untested business gas suppliers, we
              only let the very best partner with us. The cost of placing
              business with a financially unstable or unethical supplier can be
              catastrophic to your business, so let us guide you in this vital
              decision.
            </p>

            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
              Find Out More
            </button>
          </div>
        </div>
      </div>

      {/* Supplier Logo */}
      <div className="max-w-6xl mx-auto p-4  mt-40 mb-40 my-16">
        <SupplierLogo />
      </div>

      {/* Services */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-bold mb-6 text-center">
        How we can help your business
      </h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto p-4 mt-16">
        <p className="text-gray-500 text-sm uppercase tracking-wider mb-4 text-center">
          LET'S GET STARTED
        </p>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Switching is as easy as{" "}
            <span className="text-red-600">3 simple steps</span>
          </h2>
          <div className="text-4xl md:text-6xl font-bold text-gray-200">
            03
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 w-full md:w-auto">
            Switch Today
          </button>
        </div>
      </div>

      <Contact />
    </>
  );
}

export default BussinessElectricity;
