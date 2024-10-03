import React from "react";
import Bridge from "../../assets/Images/Artboard-2-2.webp";
import Image from "../../assets/Images/Artboard-26-6.webp";
import Image1 from "../../assets/Images/Artboard-23-3.png";
import Image2 from "../../assets/Images/Artboard-21-1.png";
import Image3 from "../../assets/Images/Artboard-38.webp";

const M2M = () => {
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

  <div className="relative flex flex-col items-start justify-center h-full text-left px-4 md:px-8 lg:px-16">
    <div className="max-w-4xl text-center lg:text-left">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        <span className="block text-3xl md:text-4xl lg:text-5xl">
          Global IoT Solutions with a difference
        </span>
      </h1>
      <p className="text-white pt-4 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
        IoT now powered by our latest platform – quote, order and manage
        your IoT SIM estate entirely online, 24/7 – it couldn’t be easier!
      </p>
      <button className="bg-red-600 text-white mb-6 px-6 py-3 mt-6 rounded hover:bg-red-700 transition duration-300">
        Request an Online Demo
      </button>
    </div>
  </div>

  {/* Bottom Curve */}
  <div
    className="absolute bottom-0 left-0 right-0 h-16 bg-white"
    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
  ></div>
</div>


      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-12">
        It's as simple as <span className="text-red-600">1...2...3...</span>
      </h2>

      {/* Content Section */}
      <div className="space-y-12 px-4 md:px-8 lg:px-16">
  {/* Section 1 */}
  <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
      <img
        src={Image1}
        alt="Quote process"
        className="rounded-lg shadow-md w-full max-w-[800px] max-h-[300px] object-cover"
      />
    </div>
    <div className="md:w-1/2 text-center md:text-left md:pl-8">
      <span className="text-4xl md:text-6xl font-bold text-red-600 block mb-4 md:mb-7">
        1
      </span>
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        Get your quote in minutes
      </h3>
      <p className="text-gray-600 text-base md:text-lg">
        Getting a quote for your IoT SIM cards is quick and simple – and
        can be completed at a time that suits you. In fact, you can order
        from us 24 hours a day, 7 days a week thanks to our vM2M platform.
        On our easy-to-use and intuitive platform, you can choose from a
        wide range of options, allowing you to fine-tune your preferences
        to ensure you receive an optimised connectivity solution. Choose
        from geographic coverage requirements, network technologies, data
        tiering, data aggregation and a wide range of additional
        configurable parameters. Whatever you need, we can help.
      </p>
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-12">
    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
      <img
        src={Image}
        alt="Ordering process"
        className="rounded-lg shadow-md w-full max-w-[800px] max-h-[300px] object-cover"
      />
    </div>
    <div className="md:w-1/2 text-center md:text-right md:pr-8">
      <span className="text-4xl md:text-6xl font-bold text-red-600 block mb-4 md:mb-7">
        2
      </span>
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        Easy, one-click ordering
      </h3>
      <p className="text-gray-600 text-base md:text-lg">
        Once you’ve chosen your perfect IoT solution from Fidelity Group’s
        vM2M platform you can place your order, with a simple click. You
        do not need to phone anyone or wait for quote confirmation. The
        price you see is the price you pay. And this includes your own,
        dedicated management platform. With your order placed, you will
        have full visibility of the delivery process, allowing you
        schedule our IoT product delivery around your business
        requirements. Your order will be processed and shipped by Fidelity
        Group’s own Customer Operations team.
      </p>
    </div>
  </div>

  {/* Section 3 */}
  <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
      <img
        src={Image2}
        alt="Management platform"
        className="rounded-lg shadow-md w-full max-w-[800px] max-h-[300px] object-cover"
      />
    </div>
    <div className="md:w-1/2 text-center md:text-left md:pl-8">
      <span className="text-4xl md:text-6xl font-bold text-red-600 block mb-4 md:mb-7">
        3
      </span>
      <h3 className="text-lg md:text-xl font-semibold mb-2">
        Management of your IoT estate
      </h3>
      <p className="text-gray-600 text-base md:text-lg">
        With Fidelity’s vM2M platform, management of your IoT SIM estate
        could not be easier. Incorporating a comprehensive suite of tools
        designed for visualising IoT SIM estates, vM2M will allow you to
        view, at a glance, your connectivity landscape. This includes
        everything from SIM statuses and data consumption trends to usage
        and distribution of SIM packages. With these data-driven,
        decision-making capabilities, our platform also facilitates
        forecasting and optimisation of pools for enhanced IoT management.
        Not only will you have full management access to your data
        reporting but you will also be able to make changes to your IoT
        products and order new products directly through your dashboard.
        Managing your IoT SIM estate could not be easier.
      </p>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            <button className="bg-gray-800 text-white px-6 py-2  hover:bg-gray-700">
              QUOTE
            </button>
            <button className="bg-gray-800 text-white px-6 py-2  hover:bg-gray-700">
              ORDER
            </button>
            <button className="bg-gray-800 text-white px-6 py-2  hover:bg-gray-700">
              MANAGE
            </button>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-12">
            <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
              <img
                src={Image3}
                alt="Ordering process"
                className="rounded-lg shadow-md"
                style={{ maxWidth: "800px", maxHeight: "300px" }}
              />
            </div>
            <div className="md:w-1/2 text-center md:text-right md:pr-8">
              
              <h3 className="text-2xl text-left font-bold mb-2">
                Find out more{" "}
              </h3>
              <p className="text-gray-600 text-left">
                Simply call 0800 840 6800 to speak directly with one of our
                senior IoT specialists. Alternatively, why not book a free,
                no-obligation demonstration of our IoT platform?
              </p>
              <p className="text-gray-600 mt-10 text-left">
                You’ll see for
                yourself how easy it is to use and have the opportunity to ask
                any questions. To book your demonstration please call us on the
                number above or fill in the form below
              </p>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border p-2 rounded w-full"
            type="text"
            placeholder="Name"
          />
          <input
            className="border p-2 rounded w-full"
            type="text"
            placeholder="Phone"
          />
          <input
            className="border p-2 rounded w-full"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="border p-2 rounded w-full md:col-span-2"
            rows="4"
            placeholder="Message"
          ></textarea>
          <button className="bg-red-600 text-white px-6 py-2 rounded md:col-span-2 hover:bg-red-700">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default M2M;
