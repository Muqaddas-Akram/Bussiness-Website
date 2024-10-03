import React from "react";
import bgimage from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import payment1 from "../../assets/Images/PHOTO-2023-06-12-15-25-02-370x230@2x.jpg";
import payment2 from "../../assets/Images/Payments-Blog-370x230@2x.png";
import Contact from "../../components/Contact/contact";
import lcd from "../../assets/Images/LCD.png";
import { ArrowRight, ChevronDown } from "lucide-react";

const PayLink = () => {
  const accordionItems = [
    { title: "Functionality", content: "Details about functionality..." },
    {
      title: "Dual connectivity",
      content: "Details about dual connectivity...",
    },
    { title: "Innovation", content: "Details about innovation..." },
    {
      title: "Hands off Agnostics",
      content: "Details about hands off agnostics...",
    },
    {
      title: "5 inch android touch screen",
      content: "Details about the touch screen...",
    },
    { title: "Battery Life", content: "Details about battery life..." },
  ];
  const faqs = [
    "How do i know if a portable payment terminal is for me?",
    "How is a portable terminal connected?",
    "What is a battery life like on your portable card machine?",
    "What type of businesses usually use a portable card machine",
    "What's the procedure if my phone is lost or stolen?",
    "How much a portable payment terminal cost?",
    "When does the number transfer occur?",
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
            <h1 className="text-5xl font-bold mb-4 text-center">Pay by Link</h1>
            <p className="text-xl mb-8 text-center max-w-2xl">
              The Ultimate Solution to collect payments for Order Processing and
              Timed Payments
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

        {/* Main content */}
        <main className="p-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8 mx-4 my-10 md:mx-16">
            {/* Left column */}
            <div className="md:w-1/2">
              <div className="border-l-4 border-blue-900 pl-4">
                <h1 className="text-3xl text-gray-500 font-bold mb-2">
                  Many take-aways and restaurants in the UK use
                  <span className="text-red-600"> Pay-by-link</span> systems to
                  secure deposit payments for reservations.
                </h1>
              </div>
            </div>

            {/* Right column */}
            <div className="md:w-1/2">
              <h1 className="text-3xl text-red-600 font-bold mb-2">
                Contactless Payments
                <span className=" text-gray-500">
                  {" "}
                  Made Easy: discover the advantages of
                </span>{" "}
                Pay-by-Link
              </h1>
              <p className="text-lg md:text-2lg">
                A pay link enables businesses to send their customers a safe and
                encrypted link via email or text message. This pay by link
                empowers customers to conveniently settle any outstanding
                balance at their own convenience. The payment is secure as
                customers not only input their card details but also receive the
                pay link through their preferred communication channel, be it an
                email address or mobile number they provided.
                <div className="mt-5">
                  Normally, pay-by-link transactions are processed through
                  virtual terminals. However, at Fidelity Group, we have
                  developed our own approach within our merchant panel to
                  support pay-by-link functionality. With our merchant panel,
                  you have the ability to customise your page with your
                  business’ brand and colours, creating a tailored online
                  payment experience for your customers.
                </div>
              </p>
              <div className="mt-8">
                <button className="bg-red-600 hover:bg-blue-900 text-white px-10 py-3 text-lg rounded-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </main>

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
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2">
              <img
                src={lcd}
                alt="Pax A920 Pro"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                Pay-by-link is the ultimate solution for effortlessly collecting
                payments from customers, whether it’s for processing orders or
                capturing timely payments.
                <div className="mt-8">
                  With a pay by link, you can swiftly and securely request
                  customers to pay by card, ensuring a smooth, easy and branded
                  payment experience.
                </div>
              </p>
              <button className="bg-red-600 hover:bg-blue-900 text-white px-10 py-3 text-lg rounded-lg">
                Call us Today
              </button>
            </div>
          </div>

          <div className="mb-8">
            <div className="border-l-4 border-blue-900 pl-4 my-14">
              <h1 className="text-3xl text-gray-500 font-bold mb-2">
                Learn more about Pay by Link
              </h1>
            </div>
            <div className="border border-gray-200 rounded-lg">
              <button className="flex justify-between items-center w-full p-4 text-left bg-blue-900 text-white rounded-t-lg">
                <span className="font-medium">What is a pay Link?</span>
                <ChevronDown size={20} />
              </button>
              <div className="p-4 bg-white rounded-b-lg">
                <p className="text-gray-600">
                  A pay link is a secure link that can be sent via email or SMS
                  to your customer, enabling them to make a safe and secure
                  payment.
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

export default PayLink;
