import React from "react";
import bgimage from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import payment1 from "../../assets/Images/PHOTO-2023-06-12-15-25-02-370x230@2x.jpg";
import payment2 from "../../assets/Images/Payments-Blog-370x230@2x.png";
import Contact from "../../components/Contact/contact";
import virtual from "../../assets/Images/Virtual.png";

import { ArrowRight, ChevronDown, Check } from "lucide-react";

const Virtual = () => {
  const faqs = [
    "What costs are involved in a virtual terminal?",
    "How do I connect to my virtual terminal?",
    "What is a MOTO payment?",
    "How quick is it to setup a virtual terminal?",
    "What are my options if a virtual terminal isn't for me?",
    "What card payments can I accept with my virtual terminal?",
    "Why should I choose Fidelity for my virtual terminal?",
  ];
  return (
    <>
      <div className="font-sans">
        {/* Hero Section */}
        <div className="relative h-screen bg-gray-100">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
            <h1 className="text-5xl font-bold mb-4 text-center">
              Take payments anywhere.
            </h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              Seamless Payment Processing: Empowering Businesses with Virtual
              Terminals for MOTO Transactions
            </p>
            <div className="flex space-x-4">
              <button className="bg-red-600 hover:bg-white text-white hover:text-red-600 font-bold py-2 px-4 rounded">
                Speak with an Expert
              </button>
              <button className="bg-white hover:bg-red-600 hover:text-white text-rose-600 font-bold py-2 px-4 rounded">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Curved bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full"
            >
              <path
                fill="#fff"
                fillOpacity="1"
                d="M0,96L1440,224L1440,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Header */}
        <header className="p-4 -mt-10">
          <p className="uppercase text-gray-500 text-xs md:text-sm text-center py-6">
            Virtual Terminal Payment Solutions
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-500 px-4">
            Process payments without the need for physical hardware.
          </h1>
        </header>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 mt-20 mx-8 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {[
          "Quick and easy",
          "Simple to use",
          "Included with every Merchant Panel",
          "Take payments anywhere",
          "Faster Payments",
          "Integration Capabilities",
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="mb-2">
              <Check className="text-red-500" size={24} />
            </div>
            <p className="text-center text-gray-700 font-medium">{feature}</p>
            <a href="#" className="mt-2 text-red-500 hover:underline">
              Apply Now →
            </a>
          </div>
        ))}
      </div>

      {/* pragraph card */}

      <div className="container mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row items-start justify-between mb-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={virtual}
              alt="Virtual Terminal Illustration"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4 text-gray-700">
              Secure and Seamless: How Virtual Terminal Payments Transform the
              Way You Transact
            </h1>
            <p className="text-gray-600 mb-4">
              A virtual terminal is a secure web portal that enables businesses
              to process payments through card details provided over the phone
              or in-person. With this system, payments can be made from anywhere
              the user logs in, making it a convenient and efficient way to
              collect payments. Moreover, multiple users can access the virtual
              terminal, which can be a cost-effective solution for businesses.
            </p>
            <p className="text-gray-600 mb-4">
              Typically, virtual terminals are offered by acquirers on their
              platforms, but at Fidelity Group, our merchant platform includes a
              built-in virtual terminal, which not only saves merchants money
              but also simplifies the payment acceptance process. Additionally,
              your virtual terminal payment page can be customised to reflect
              your branding or that of our white label payments partner.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 mt-10 py-16 sm:py-28 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-500 text-center sm:text-left">
              We can help your business
              <span className="text-red-600"> save money </span>
              <br />
              Book a review today!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-red-600 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-red-700 whitespace-nowrap">
              Request Review
            </button>
            <button className="bg-blue-900 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-blue-800 whitespace-nowrap">
              Call us Now
            </button>
          </div>
        </div>

        {/* mini */}

        <div className="max-w-4xl mx-auto p-6 font-sans mt-14">
          <div className="mb-8">
            <div className="border-l-4 border-blue-900 pl-4 my-14">
              <h1 className="text-3xl text-gray-500 font-bold mb-2">
                Learn more about Virtual Terminals
              </h1>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <button className="flex justify-between items-center w-full p-4 text-left bg-blue-900 text-white rounded-t-lg">
                <span className="font-medium">
                  What is a Virtual Terminal, and the Fidelity merchant panel?
                </span>
                <ChevronDown size={20} />
              </button>
              <div className="p-4 bg-white rounded-b-lg">
                <p className="text-gray-600">
                  The Fidelity merchant panel is software given to all merchants
                  that sign up to us, either directly or through our partner
                  network, giving them their very own virtual terminal for
                  payments at no monthly rental costs.
                </p>
              </div>
            </div>
          </div>
          {/* FQs */}
          <div className="max-w-3xl mx-auto p-4">
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
          </div>
        </div>

        {/* Blog Section */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-10 mt-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mt-8 space-y-4">
                <p className="uppercase text-gray-500 font-semibold text-xs md:text-sm">
                  PAYMENTS AS A SERVICE
                </p>
                <h2 className="text-2xl md:text-3xl text-gray-500 font-bold mb-8">
                  Press releases, <span className="text-red-600">blogs</span>{" "}
                  and videos.
                </h2>
                <BlogLink title="4 Key Factors to Consider When Choosing A Payment Option for Your Business" />
                <BlogLink title="The Evolution of Merchant Payments" />
                <BlogLink title="What is EPOS? | Electronic Point of Sale | Fidelity Group UK" />
                <BlogLink title="What are continuous payment authorities (CPAs)" />
                <BlogLink title="Using EPOS to improve customer retention" />
              </div>
              <BlogCard
                image={payment1}
                date="12/06/2023"
                title="4 Key Factors to Consider When Choosing A Payment Option for Your Business"
              />
              <BlogCard
                image={payment2}
                title="The Evolution of Merchant Payments"
              />
            </div>
          </div>
        </section>
      </div>
      <Contact />
    </>
  );
};

const BlogCard = ({ image, date, title }) => (
  <div className="bg-white shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      {date && <p className="text-gray-500 text-sm mb-2">{date}</p>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <button className="text-red-600 font-semibold flex items-center">
        Read more <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

const BlogLink = ({ title }) => (
  <div className="flex items-center text-red-600 font-semibold">
    <ArrowRight className="w-4 h-4 mr-2" />
    <span>{title}</span>
  </div>
);

export default Virtual;
