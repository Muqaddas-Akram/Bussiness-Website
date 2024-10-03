import React from "react";
import bgimg from "../../assets/Images/Asset-1@4x-8.png";
import payment1 from "../../assets/Images/PHOTO-2023-06-12-15-25-02-370x230@2x.jpg";
import payment2 from "../../assets/Images/Payments-Blog-370x230@2x.png";
import Contact from "../../components/Contact/contact";
import pax from "../../assets/Images/pax-a920-terminal_4.png";
import device from "../../assets/Images/Pax-Device.jpg";
import android from "../../assets/Images/Android.png"
import pci from "../../assets/Images/PCI.png"
import display from "../../assets/Images/Display.png"
import camera from "../../assets/Images/Camera.png"
import connect from "../../assets/Images/Connectivity.png"
import { ArrowRight, ChevronDown } from "lucide-react";

const MobileCard = () => {
  const features = [
    { icon: android, text: "Powered by Android 7.1" },
    { icon: pci, text: "PCI 5 SRED" },
    { icon: display, text: '5" HD Display' },
    { icon: camera, text: "Dual-Cameras" },
    { icon: connect, text: "Advanced Connectivity" },
  ];

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
        <section className="bg-white p-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-gray-500 uppercase tracking-wide mb-2">
                Pax a920 smart mobile card machine
              </p>
              <h1 className="text-4xl font-bold my-5">
                The Best Payment Terminals
                <br />
                <span className="text-red-600">
                  For a Seamless Checkout Experience
                </span>
              </h1>
              <p className="text-xl my-10">
                Tap, Swipe or Insert: Card Machine That Cater To Every Payment
                Preference
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded">
                Get Started
              </button>
            </div>
            <div className="relative w-1/3">
              <img
                src={bgimg}
                alt="Payment device"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <div className="flex flex-wrap justify-center gap-10 mx-10">
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex flex-col items-center border rounded-lg p-4 max-w-xs w-full lg:w-auto"
    >
      <img
        src={feature.icon}
        alt={feature.text}
        className="w-12 h-12 mb-4"
      />
      <p className="text-center text-gray-700">{feature.text}</p>
    </div>
  ))}
</div>


        {/* Header */}
        <header className="p-4">
          <p className="uppercase text-gray-500 mt-8 text-xs md:text-sm text-center py-6">
            The PAX A920 Card Payment Machine: Sleek Design, App driven,
            Powerful Performance
          </p>
          <h1 className="text-3xl md:text-5xl mt-8 font-bold text-center text-gray-500 px-4">
            The Ultimate Flexibility: Take card payments from
            <span className="text-red-600"> anywhere in your building </span>.
          </h1>
        </header>

        {/* Main content */}
        <main className="p-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8 mx-4 my-10 md:mx-16">
            {/* Left column */}
            <div className="md:w-1/2">
              <div className="border-l-4 border-blue-900 pl-4">
                <h1 className="text-3xl text-gray-500 font-bold mb-2">
                  The{" "}
                  <span className="text-red-600">
                    portable card payment machine
                  </span>
                  is perfect for hospitality venues such as bars, restaurants,{" "}
                  <br />
                  and pubs.
                </h1>
              </div>
            </div>

            {/* Right column */}
            <div className="md:w-1/2">
              <p className="text-lg md:text-2lg">
                The PAX A920, Card Payment Machine, a cutting-edge Android-based
                portable card machine, boasts a touch screen interface and is
                exceptionally user-friendly. Ideal for various settings such as
                hospitality, retail, and beauty, this versatile device
                seamlessly integrates into any environment. Designed with
                merchant convenience in mind, the compact PAX A920 can be easily
                held or carried in a pocket, allowing for effortless mobility
                around a venue to process faster payments. Alternatively, it can
                be placed in its holder on a countertop, ready to accept
                transactions with just a few taps on its 5-inch Android display.
                Experience unparalleled ease and efficiency with the PAX A920
                Card Payment Machine.
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-4">
                <button className="bg-red-600 hover:bg-blue-900 text-white px-10 py-3 text-lg rounded-lg">
                  Apply Now
                </button>
                <button className="hover:bg-red-600 bg-blue-900 text-white px-10 py-3 text-lg rounded-lg">
                  Date Sheet
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* pax a920 */}
        <div className="flex space-x-8 p-8">
          {/* Left Side */}
          <div className="w-1/2 flex flex-col items-center">
            <img src={pax} alt="Phone" className="w-3/4" />
            <h2 className="text-4xl font-bold text-gray-600 mt-8">
              Faster card payments on the go
            </h2>
            <p className="text-gray-400 mt-4 ml-5">
              The A920 card payment machine provides GPRS connectivity for
              on-the-go faster payments for any occasion, making it perfect for
              businesses that require a feature-rich, high-speed processing
              device.
            </p>
          </div>

          {/* Right Side */}
          <div className="w-1/2">
            <div className="bg-blue-900 text-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold">How it looks</h3>
              <p className="mt-2">
                In our expert view, this portable card machine currently
                available on the market exudes an undeniable sense of allure,
                making it the epitome of elegance. Its visually appealing design
                has garnered immense popularity among beauty salons and hair
                salons, seamlessly blending with their captivating environments.
              </p>
            </div>
            {accordionItems.map((item, index) => (
              <div key={index} className="border-t border-gray-300">
                <button
                  className="w-full text-left p-4 font-semibold text-gray-700"
                  onClick={() =>
                    document
                      .getElementById(`accordion-content-${index}`)
                      .classList.toggle("hidden")
                  }
                >
                  {item.title}
                </button>
                <div
                  id={`accordion-content-${index}`}
                  className="hidden p-4 text-gray-600"
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 py-16 sm:py-28 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-500 text-center sm:text-left">
              We can help your business
              <span className="text-red-600"> save money </span>
              <br />
              on rates. Book a review today!
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

        <div className="max-w-4xl mx-auto p-6 font-sans">
          <h1 className="text-3xl font-bold text-gray-700 mb-6">
            The Perfect Fit for Mini-POS Solutions: Introducing the Pax A920 Pro
          </h1>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="md:w-1/2">
              <img
                src={device}
                alt="Pax A920 Pro"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 mb-4">
                The Pax A920 offers multifunctionality, serving as both a mini
                EPOS system and a payments device. With its swift processor,
                payments can be processed in a matter of seconds. For those
                seeking a mini-POS solution, the A920 Pro version comes equipped
                with a larger processor and a slightly larger screen.
              </p>
              <p className="text-gray-600 mb-4">
                The true game-changer, however, is the Pax Store – similar to
                Apple's App Store for payment devices. The Pax Store is a
                treasure trove of value-added apps, including loyalty apps and
                mini epos software, that can be remotely pushed to your payment
                terminal, transforming your Pax A920 into an exceptional payment
                gateway.
              </p>
            </div>
          </div>

          <div className="mb-8">
          <div className="border-l-4 border-blue-900 pl-4 my-14">
                <h1 className="text-3xl text-gray-500 font-bold mb-2">
                Frequently Asked Questions
                </h1>
              </div>
            <div className="border border-gray-200 rounded-lg">
              <button className="flex justify-between items-center w-full p-4 text-left bg-blue-900 text-white rounded-t-lg">
                <span className="font-medium">
                  How do I know if a portable payment terminal is for me?
                </span>
                <ChevronDown size={20} />
              </button>
              <div className="p-4 bg-white rounded-b-lg">
                <p className="text-gray-600">
                  Portable terminals are perfect for venues that do not have an
                  extensive reach within the building. They rely on a signal
                  from the base that is plugged into the Ethernet, so if you
                  need to move around lots within your building then a mobile
                  might be a better fit. However, if you run a business that is
                  serving clients at a counter then a portable terminal might be
                  the correct solution for you. With fast transaction speed and
                  a base to ensure battery life is always retained, a portable
                  terminal is perfect for busy hospitality venues.
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

export default MobileCard;
