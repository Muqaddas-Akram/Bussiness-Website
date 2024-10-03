import React from "react";
import Contact from "../../components/Contact/contact";
import Testimonial from "../../components/Testimonials/testimonials";
import Image7 from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import Image8 from "../../assets/Images/Artboard-38-1.webp";
import logo from "../../assets/Images/SIP-Supply.webp";

const SupplierLogo = () => (
  <div className="bg-gray-100 h-12 flex items-center justify-center rounded">
    <img src={logo} />
  </div>
);

const NonGeopraphic = () => {
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
        <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16 text-left">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Non Geographic Numbers
            </h1>
            
            <button className="bg-red-600 text-white px-6 py-3 mt-5 rounded hover:bg-blue-900 transition">
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

      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 pr-4">
            <p className="text-gray-400 text-sm md:text-base mb-4">
              Non-geographic numbers are telephone numbers that are not tied to
              a specific geographic location. They allow businesses to have a
              national presence, making it easier for customers to reach them
              from anywhere in the country. Boost new and existing customer
              enquiries to your business with a UK freephone number. Enjoy the
              benefit of no call charges from phone lines and mobiles across the
              UK. 0800 business phone numbers are non-geographic, allowing your
              business to attract calls from any town, city, or region across
              the UK. Additionally, consider 0300 numbers for a cost-effective
              and professional alternative, ideal for public sector and
              non-profit organizations. For businesses looking to monetize their
              calls, premium rate numbers offer a way to generate revenue while
              providing valuable services. Our range of non-geographic numbers
              ensures your business maintains a national presence, enhancing
              customer trust and accessibility.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src={Image8}
              alt="Woman on phone"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Supplier Logo */}
      <div className="max-w-6xl mx-auto p-4 mt-40 mb-40">
        <SupplierLogo />
      </div>

      {/* Testimonials */}
      <Testimonial />

      {/* Contact */}
      <Contact />
    </>
  );
};

export default NonGeopraphic;
