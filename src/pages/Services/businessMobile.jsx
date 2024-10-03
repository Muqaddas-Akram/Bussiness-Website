import React from "react";
import Image1 from "../../assets/Images/image7-1-300x300@2x.jpg";
import Image2 from "../../assets/Images/image2-2-300x300@2x.jpg";
import Image3 from "../../assets/Images/image3-2-300x300@2x.jpg";
import Image4 from "../../assets/Images/image5-2-300x300@2x.jpg";
import Image5 from "../../assets/Images/image4-2-300x300@2x.jpg";
import Image6 from "../../assets/Images/image1-2-300x300@2x.jpg";
import Image7 from "../../assets/Images/pexels-mareklevak-2265488.jpg";

const TariffCard = ({ title, description }) => (
  <div className="bg-red-600 text-white p-4 rounded-lg">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);
const FeatureCard = ({ image, title, description }) => (
  <div className="mb-8">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover mb-4 rounded-lg"
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BussinessMobile = () => {
  const faqs = [
    "How can I retrieve my SIM card's PIN code?",
    "What should I do if my SIM card gets blocked?",
    "What's the number for accessing voicemail?",
    "I'm unable to connect to the internet on my phone. What can I do?",
    "What's the procedure if my phone is lost or stolen?",
    "My device isn't working with the new SIM. What's the solution?",
    "When does the number transfer occur?",
    "How will I know when my number is transferred?",
    "Do I need to be in the UK for the number transfer to work?",
    "What support is provided?",
    "Can I retain my existing number?",
    "What if I have high data usage?",
    "Can I use my mobile overseas?",
    "What mobile tariffs are available?",
  ];
  const features = [
    {
      image: Image1,
      title: "Superior 5G Network",
      description:
        "Experience heightened internet speeds through our trusted business mobile partners. Seamlessly send & receive large files, and stream with uninterrupted connectivity. Enjoy an impressive median 5G download speed of 282Mbps, ensuring swift performance (subject to coverage & local factors).",
    },
    {
      image: Image2,
      title: "99% UK Coverage",
      description:
        "Stay seamlessly connected with network switch capability, ensuring uninterrupted network signals wherever you travel across the country.",
    },
    {
      image: Image3,
      title: "Unlimited UK Texts and Calls",
      description:
        "Wave farewell to unexpected expenses on your business mobile bill and embrace worry-free communication with boundless text and data bundles.",
    },
    {
      image: Image4,
      title: "EU & RoW Roaming",
      description:
        "Embarking on international journeys? Our partner networks ensure you stay connected wherever your work takes you, making global travel a breeze. Just get in touch to check which countries are covered by our roaming bolt-ons, before you travel.",
    },
    {
      image: Image5,
      title: "Effortless Number Transfer",
      description:
        "Adapt your business mobile plan as your needs change. Effortlessly transfer phone number ownership between individuals or plans.",
    },
    {
      image: Image6,
      title: "Versatile Data Sharing",
      description:
        "Why confine data access by user when you can share, flexible, shared data across your entire business? Simplify data management with one plan for multiple devices.",
    },
  ];

  const tariffs = [
    {
      title: "Tailored Solutions",
      description:
        "Understanding the needs of the business mobile user, we offer a comprehensive range of versatile mobile tariffs. Additionally, we can tailor a solution to your specific needs, should you require one.",
    },
    {
      title: "Shared and Pooled Data Bundles",
      description:
        "Effortlessly distribute data throughout your complete business mobile network, or enable colleagues within the company to combine their data quotas to make the very best use of your data.",
    },
    {
      title: "Data Only, Fast Start, and Backup",
      description:
        "Data-exclusive packages tailored for a range of devices, encompassing routers, USB dongles, MiFi units, laptops, and mobile phones.",
    },
    {
      title: "Unlimited UK 01, 02, 03, 07 Calls & SMS",
      description:
        "For a consistent and predictable monthly expense, our business mobile plans offer customers unlimited calls and SMS's to a variety of UK numbers.",
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
            <p className="text-white text-lg md:text-xl mb-2">
              Business Mobile Services in the UK
            </p>
            <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-red-500">
              <span className="text-white">Competitive deals on bespoke</span>{" "}
              business mobile plans{" "}
              <span className="text-white">
                from all the major UK mobile providers.
              </span>
            </h1>
            <button className="bg-red-600 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900">
              Chat to us
            </button>
            <button className="bg-red-600 ml-10 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900">
              Download our Brouche
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
      <div className="bg-white min-h-screen px-8 pt-8 -mb-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-lg font-bold uppercase tracking-wider text-center mb-4">
            CLOUD SERVICES, CLOUD HOSTING AND STRATEGY IN THE UK
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Connect to{" "}
            <span className="text-red-600">limitless possibilities.</span>{" "}
            Limitless opportunities.
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="md:w-1/3">
              <div className="border-l-4 border-red-600 pl-4">
                <p className="text-2xl font-semibold text-gray-600">
                  Get{" "}
                  <span className="text-red-600">
                    business mobile service and support
                  </span>{" "}
                  that won’t let you down.
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-500 mb-6 text-xl">
                Business mobile – experience uninterrupted calls and swift data
                with our bespoke solutions, backed by the strength of the UK’s
                top network providers, including O2, Vodafone, and Three,
                powered by Gamma.
              </p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300">
                Switch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="max-w-6xl mx-auto p-4">
        <p className="text-gray-500 text-lg mb-20 font-bold uppercase tracking-wider text-center ">
          Fidelity Group as your business mobile partner{" "}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      {/* red card */}
      <div className="max-w-6xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-600 text-center">
          Tariffs as adaptable as your Business
        </h2>
        <div className="grid gap-4 mb-8 md:grid-cols-2 lg:grid-cols-4">
          {tariffs.map((tariff, index) => (
            <TariffCard key={index} {...tariff} />
          ))}
        </div>
        <div className="text-center mb-8 bg-gray-200 py-12 flex flex-col lg:flex-row justify-center lg:justify-between items-center px-4 lg:px-8">
          <div className="mb-4 lg:mb-0 lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-500">
              Stay connected, stay productive – Fidelity Group UK is your
              gateway to seamless business mobile communication.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-300 ease-in-out">
              Switch Now
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
              Call Us
            </button>
          </div>
        </div>
      </div>

      {/* FQs */}
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl text-gray-600 font-semibold mb-6 text-center">
          Business Mobile: Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-2 border-b   hover:bg-blue-800 transition duration-300 border-gray-200"
          >
            <button className="w-full text-left py-3 px-4 flex justify-between items-center hover:bg-gray-50">
              <span className="text-gray-700">{faq}</span>
              <svg
                className="w-5 h-5 text-gray-400"
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
          </div>
        ))}
        <p className="text-sm mb-10 text-gray-600 mt-6 text-center">
          If you have any other questions or need further clarification, feel
          free to reach out to Fidelity Group for more information.
        </p>
      </div>
    </>
  );
};

export default BussinessMobile;
