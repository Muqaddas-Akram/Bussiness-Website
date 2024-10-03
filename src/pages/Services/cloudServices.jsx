import React from "react";
import Contact from "../../components/Contact/contact";
import Testimonial from "../../components/Testimonials/testimonials";
import Image7 from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import { Phone } from "lucide-react";

const CloudServices = () => {
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
        <div className="relative flex items-center h-full px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-white mb-2 uppercase">
              Empowering everything as a service.
            </p>
            <h1 className="text-5xl font-semibold space-x-5 text-white">
              Get your business in <br /> the
              <span className="underline">cloud</span>
            </h1>
            <button className="bg-red-600 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900 flex items-center">
              <Phone className="mr-2" />
              Speak with an Expert
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
      <div className="bg-white min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-lg font-bold uppercase tracking-wider text-center mb-4 pb-10">
            CLOUD SERVICES, CLOUD HOSTING AND STRATEGY IN THE UK
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 pb-10">
            Connect to{" "}
            <span className="text-red-600">limitless possibilities.</span>{" "}
            Limitless opportunities.
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/3">
              <div className="border-l-4 border-red-600 pl-4">
                <p className="text-2xl font-semibold text-gray-600">
                  Our relationships with the major{" "}
                  <span className="text-red-600">
                    cloud technology providers
                  </span>{" "}
                  enable us to continually innovate.
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-500 mb-10 text-xl">
                Bespoke design and implementation of IT and cloud strategies for
                flexible working, data storage, and data security; including
                desktop support, hosted email services, and data backup.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
                Get a Quote
              </button>
            </div>
          </div>
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
        <div key={index} className="bg-white p-4 sm:p-6 shadow-md rounded-lg">
          <svg
            className="w-10 h-10 sm:w-12 sm:h-12 text-red-600 mb-3 sm:mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d={service.icon} />
          </svg>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h2>
          <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="bg-gray-100 py-16 sm:py-28 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
  <div className="mb-6 sm:mb-0">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-500 text-center sm:text-left">
      Bespoke design and implementation of{" "}
      <span className="text-red-600">cloud strategies </span>
    </h2>
  </div>
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
    <button className="bg-red-600 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-red-700 whitespace-nowrap">
      Get a Quote
    </button>
    <button className="bg-blue-900 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-blue-800 whitespace-nowrap">
      Call us
    </button>
  </div>
</div>

      {/* Testimonials */}
      <Testimonial />
      {/* Contact */}

      <Contact />
    </>
  );
};

export default CloudServices;
