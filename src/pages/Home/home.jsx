import React, { useState, useEffect } from "react";
import Contact from "../../components/Contact/contact";
import Testimonial from "../../components/Testimonials/testimonials";
import Awards from "../../components/Awards/awards";
import { Link } from "react-router-dom";
import {
  Globe,
  Zap,
  Smartphone,
  Network,
  Cloud,
  Headphones,
  ArrowLeftRight,
  CreditCard,
  Users,
} from "lucide-react";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-red-500" />,
      title: "Connectivity and Data",
      description:
        "Connect to super fast, reliable business broadband and ethernet connectivity across the UK.",
      link: "Connectivity and data →",
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: "Business Energy",
      description:
        "Don't be left in the dark or break the bank with high energy costs. We have the know how. Let us procure and manage energy requirements for your business.",
      link: "Energy →",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: "Business Mobile",
      description:
        "Let your business roam with us. We have business mobile plans that won't let you down. Connect to the UK's biggest networks through us.",
      link: "Business Mobile →",
    },
    {
      icon: <Network className="w-12 h-12 text-red-500" />,
      title: "Internet of Things",
      description:
        "With vM2M, a supplier agnostic, easy to use platform making IoT connectivity management as Simple as 1..2..3",
      link: "IoT →",
    },
    {
      icon: <Cloud className="w-12 h-12 text-red-500" />,
      title: "Cloud",
      description:
        "Let's get your business in the cloud. Bespoke design and implementation of business IT and cloud strategies is our game.",
      link: "Cloud and Hosting →",
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-500" />,
      title: "Voice/VoIP & Hosted Telephony",
      description:
        "Use the latest VoIP technology. Keep your business and customers connected with unified communications.",
      link: "Voice and Hosted Telephony →",
    },
    {
      icon: <ArrowLeftRight className="w-12 h-12 text-red-500" />,
      title: "Billing",
      description:
        "An award winning billing solution. Empower your business with a comprehensive telecoms customer management and billing platform.",
      link: "Billing →",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-red-500" />,
      title: "Payment Solutions",
      description:
        "Improve efficiency and save! We offer a serviced, consultative, and managed approach to merchants payment solutions.",
      link: "Payments →",
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Fidelity Partner Programme",
      description:
        "Join club Fidelity. The most customer-centric reseller partner programme in the UK.",
      link: "Partner Programme →",
    },
  ];
  return (
    <>
      {/* Background */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('src/assets/Images/pexels-mareklevak-2265488.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative flex items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-white text-lg md:text-xl mb-2">
              Business broadband, telecoms, IoT, software, and energy
              procurement solutions.
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="text-red-500">Empowering</span> everything as a{" "}
              <span className="text-red-500">service</span>
            </h1>
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
      
      {/* card heading */}
      <div className="flex items-center justify-center mb-8">
        <span className="text-green-500 font-bold mr-2">Excellent</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-green-500">
              ★
            </span>
          ))}
        </div>
        <span className="ml-2 text-gray-500">Trustpilot</span>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            The X factor for your business
          </h1>
        </div>
      </div>
      {/* cards */}
      <div className="flex items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {service.icon}
              <h2 className="mt-4 mb-2 text-xl font-semibold">
                {service.title}
              </h2>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <a href="#" className="text-red-500 hover:underline">
                {service.link}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* card button */}
      <div className="mt-12 flex justify-center space-x-4">
        <Link to='/quote'> <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-900 transition duration-300">
          Get a Quote
        </button></Link>
        <button className="border border-gray-300 text-red-600 px-6 py-2 rounded-md hover:bg-blue-900 transition duration-300">
          Call us Today
        </button>
      </div>

      {/* Discover Fidelity Group */}
      <div className="mx-auto mt-20 py-20 px-4 bg-gray-200 text-center">
        <h2 className="text-gray-500 uppercase text-sm mb-4">
          DISCOVER FIDELITY GROUP
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-16">
          We've been thriving <span className="text-red-600">since 2008</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 border border-transparent hover:border-red-600">
            <button className="text-gray-700 uppercase text-sm hover:text-red-600">
              OUR MISSION
            </button>
          </div>
          <div className="bg-white shadow-md p-6 border border-transparent hover:border-red-600">
            <button className="text-gray-700 uppercase text-sm hover:text-red-600">
              TECH AND TELECOMS PARTNERS
            </button>
          </div>
          <div className="bg-white shadow-md p-6 border border-transparent hover:border-red-600">
            <button className="text-gray-700 uppercase text-sm hover:text-red-600">
              ENERGY PARTNERS
            </button>
          </div>
        </div>
      </div>
      <Awards />
      <Testimonial />
      {/* media section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Media Section */}
          <div className="space-y-8 md:ml-16">
            <h2 className="text-gray-500 uppercase text-sm mb-2">
              In the media
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Press releases, <span className="text-red-600">blogs</span> and
              videos
            </h1>
            <div className="space-y-4">
              {[
                { text: "What Is IoT Data Pooling?", href: "#" },
                { text: "Channel Champions 2024", href: "#" },
                { text: "How To Avoid IoT Bill Shock", href: "#" },
                { text: "Unlock the power of IoT management", href: "#" },
                { text: "IoT Talks 2023", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 text-red-600 hover:underline"
                >
                  <span className="text-xl">→</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Articles Section */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <img
                src="src/assets/Images/Artboard-2-2.webp"
                alt="IoT Network"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold">
                What Is IoT Data Pooling?
              </h3>
              <p className="text-gray-600">
                In the realm of the Internet of Things (IoT), data usage is
                often predictable ...
              </p>
              <a href="#" className="text-red-600 flex items-center space-x-1">
                <span>Read more</span>
                <span>→</span>
              </a>
            </div>

            <div className="space-y-4">
              <img
                src="src/assets/Images/Artboard-3-2-1170x570@2x.webp"
                alt="Channel Champions 2024"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold">Channel Champions 2024</h3>
              <p className="text-gray-600">
                Fidelity Group scoop 4 major awards at Channel Champions 2024
                ...
              </p>
              <a href="#" className="text-red-600 flex items-center space-x-1">
                <span>Read more</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Contact />
      </div>
    </>
  );
}

export default Home;
