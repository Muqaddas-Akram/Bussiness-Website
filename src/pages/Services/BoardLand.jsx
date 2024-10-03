import React, { useState } from "react";
import Image7 from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import Testimonial from "../../components/Testimonials/testimonials";
import Contact from "../../components/Contact/contact";
import logo from "../../assets/Images/SIP-Supply.webp";
import logo1 from "../../assets/Images/sogea-broadband.png";
import { Link } from "react-router-dom";

const SupplierLogo = () => (
  <div className="bg-gray-100 h-12 flex items-center justify-center rounded">
    <img src={logo} />
  </div>
);

const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md mb-2  hover:bg-blue-800 hover:text-white">
      <button
        className="w-full text-left px-4 py-2 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-gray-50">
          {/* Add answer content here */}
          <p>Answer placeholder</p>
        </div>
      )}
    </div>
  );
};

function Boardland() {
  const questions = [
    "What is required to enable the integration of Microsoft Teams with Horizon?",
    "Is a Horizon subscription necessary?",
    "Can Horizon for Microsoft Teams be deployed internationally?",
    "What if there is an office relocation?",
    "Is a Horizon subscription necessary?",
    "What features bundle is available with Horizon for Microsoft Teams?",
    "Does the quality suffer compared to fixed telephony?",
    "If I add the Horizon for Microsoft Teams bolt-on to an existing Horizon subscription, will it initiate a new contract?",
    "What is hosted telephony?",
    "How can phone access be retained in an emergency?",
  ];
  const services = [
    {
      icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
      title: "Flexible Services",
      description:
        "Cloud hosting is a flexible service providing tangible cost-savings from cloud computing, including virtual servers, a virtual shared platform, and Software as a Service (SaaS) provision of services such as Office 365.",
    },
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
      title: "IT Outsourcing",
      description:
        "Fidelity provide IT outsourcing, cloud and managed services. We ensure business continuity and optimization whilst managing existing infrastructure or providing a fully outsourced solution. We understand the importance of day-to-day IT operations helping our customers to embrace innovation and drive growth.",
    },
    {
      icon: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z",
      title: "Applications",
      description:
        "Your company can We can help identify your company goals, assist with a complimentary IT plan and help you to execute it, choosing the right system tools, projects and hardware to help you to get there.",
    },
    {
      icon: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
      title: "Proactive Solutions",
      description:
        "We offer a full range of Application Outsourcing Services covering application management, development and maintenance. Our relationships with the major software and hardware providers enable us to continually incorporate innovations in areas such as cloud, analytics and mobility.",
    },
  ];

  const [activeTab, setActiveTab] = useState("WHAT IS SOGEA BROADBAND?");

  const tabs = [
    "WHAT IS SOGEA BROADBAND?",
    "WHY WAS SOGEA CREATED?",
    "WHY DO YOU NEED SOGEA?",
  ];

  const content = [
    {
      title: "SoGEA stands for Single Order Generic Ethernet Access.",
      description: "",
    },
    {
      title:
        "Until now you needed to have a traditional phone line installed to deliver broadband to a home or office, but SoGEA broadband doesnt run over a phone line; instead, it uses the same fibre/copper network without the WLR (Wholesale Line Rental = Phone line) element.",
      description: "",
    },
    {
      title:
        "SoGEA is offered at the same data rates as FTTC broadband. It delivers the same performance and has the same geographic availability. The only difference is the need for a phone line has been removed.",
      description: "",
    },
    {
      title:
        "SoGEA is a dedicated line that delivers a broadband connection and includes an underlying version of a phone line. This means that customers moving to SoGEA from a phoneline-reliant broadband solution will need a voice call service that uses VoIP (Voice over Internet Protocol) to continue to be able to make and receive phone calls.",
      description: "",
    },
  ];

  return (
    <>
      {/* Background */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${Image7})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white">
              SoGEA Broadband – super fast business broadband for £29 per month
            </h1>
            <p className="text-white text-lg md:text-xl mb-2">
              for a superfast 80/20mbps connection
            </p>
            <button className="bg-red-600 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900">
              Speak with an Expert
            </button>
            <button className="bg-red-600 ml-10 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900">
              Call us
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

      {/* header */}

      <header className="p-4">
        <p className="uppercase text-gray-500 text-base md:text-sm text-center py-6">
          CLOUD SERVICES, CLOUD HOSTING AND STRATEGY IN THE UK
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-500 px-4">
          SoGEA broadband: a{" "}
          <span className="text-red-600">cost-effective</span> business solution
        </h1>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8 mt-8 mx-4 md:mx-16">
        {/* Left column */}
        <div className="md:w-1/2">
          <div className="border-l-4 border-red-600 pl-4">
            <h1 className="text-xl md:text-2xl font-semibold mb-2">
              <span className="text-red-600">SoGEA</span> broadband delivers the
              same performance and data rates as FTTC broadband.
            </h1>
          </div>
        </div>

        {/* Right column */}
        <div className="md:w-1/2">
          <p className="text-gray-500 mb-4 md:mb-6 text-base">
            Discover the best business broadband deals with SoGEA broadband, the
            Single Order Generic Ethernet Access solution from Fidelity Group.
            With speed up to 80Mbps, it’s a top choice for businesses looking
            for affordable broadband. Enjoy the same performance as FTTC (fibre
            to the cabinet) with just one order and no need for an analogue
            phone line. The network availability of SoGEA broadband is
            comparable to fibre broadband. SoGEA provides a more robust and
            future-proof connectivity solution as the United Kingdom transitions
            to an all-IP network. Whether you’re searching for cheap broadband
            deals, the fastest broadband in your area, or the best broadband
            provider, Fidelity Group has you covered, with SoGEA broadband.
          </p>
          <Link to='/quote'><button className="bg-red-600 hover:bg-blue-900 text-white px-4 py-2 rounded">
            Get a Quote
          </button></Link>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-500 text-center py-6 sm:py-8 mb-6 sm:mb-8">
            Why Fidelity for your{" "}
            <span className="text-red-600">Cloud services?</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 shadow-md rounded-lg"
              >
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-3 sm:mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={service.icon} />
                </svg>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SogaBoard Land */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-wrap justify-between mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mb-2 text-sm font-semibold rounded-md ${
                activeTab === tab
                  ? "bg-red-500 text-white border-2 border-red-500"
                  : "bg-white text-gray-700 border-2 border-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-20">
          {/* Content List */}
          <div className="flex items-center mb-8">
            <div className="flex-1 pr-4">
              <p className="text-gray-600">
                Whether your bespoke IoT SIM requirements are simple or complex,
                we're here to help. After all, we've built a fully end-to-end
                IoT ecosystem to cater for all IoT connectivity requirements. To
                discuss your IoT requirements, please call us on the number
                below or complete the form and we'll be in touch.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={logo1}
                alt="SOGEA Network Diagram"
                className="max-w-xs h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Questions */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Horizon Contact: Frequently Asked Questions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {questions.map((question, index) => (
            <FAQItem key={index} question={question} />
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-6 text-center">
          If you have any other questions or need further clarification on the
          benefits of Horizon Contact, reach out to Fidelity Group.
        </p>
      </div>
      {/* Supplier Logo */}
      <div className="max-w-6xl mx-auto p-4 mt-40 mb-40">
        <SupplierLogo />
      </div>
      {/* banner */}

      <div className="bg-gray-100 py-16 sm:py-28 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
        <div className="mb-6 sm:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-500 text-center sm:text-left">
            Connect to our latest{" "}
            <span className="text-red-600"> business Internet </span>deal.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-red-600 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-red-700 whitespace-nowrap">
            Get a Promo
          </button>
          <button className="bg-blue-900 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-blue-800 whitespace-nowrap">
            Call us
          </button>
        </div>
      </div>
      <Testimonial />

      <Contact />
    </>
  );
}

export default Boardland;
