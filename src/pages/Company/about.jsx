import React, { useState, useEffect } from "react";
import Bridge from "../../assets/Images/bridge.jpg";
import Journey from '../../assets/Images/Journey.png';
import Contact from "../../components/Contact/contact";
import Awards from '../../components/Awards/awards';

const StatItem = ({ prefix, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 100;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="w-[100%] md:w-[100%] lg:w-[100%] text-center border p-4 bg-gray-100 rounded shadow-md">
      <div className="text-gray-500 text-xl mb-1">{prefix}</div>
      <div className="text-red-600 text-4xl md:text-5xl font-bold mb-1">
        {count.toLocaleString()}
      </div>
      <div className="text-gray-600  text-xl">{label}</div>
    </div>
  );
};

const About = () => {
  const stats = [
    { prefix: "Over", value: 51356, label: "Hosted seats" },
    { prefix: "Over", value: 7198, label: "Customers being billed" },
    { prefix: "Average of", value: 2249990324, label: "Call minutes" },
    { prefix: "Over", value: 3391, label: "Data circuits" },
  ];
 
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

        <div className="relative flex items-center justify-left h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              <span className="text-white text-7xl">About us</span>
            </h1>
            <button className="bg-red-600 text-white px-8 py-4 mt-7 rounded hover:bg-blue-900">
              Talk to us
            </button>
          </div>
        </div>
        {/* Bottom Curve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
        ></div>
      </div>

      {/* Paragraphs */}
      <div className="max-w-[90%]  mt-20 mb-20 mx-auto px-4 py-8 text-gray-600 text-xl">
        <p className="mb-8">
          At Fidelity Group, we are dedicated to transforming the way people
          connect. Founded over 30 years ago, with a vision to bring
          unparalleled communication services to our clients, we pride ourselves
          on being at the forefront of technological innovation and customer
          satisfaction.
        </p>

        <p className="mb-8">
          Our team comprises seasoned industry professionals with extensive
          expertise in designing, deploying, and managing advanced telecom
          infrastructure.
        </p>

        <p className="mb-8">
          We are committed to offering reliable, high-quality services that meet
          the diverse needs of businesses and individuals alike.
        </p>
      </div>

      {/* Our Mission */}
      <div className="max-w-[90%] mt-20 mb-20 mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-500 mb-4">
            Our mission
          </h2>
          <p className="text-gray-700 text-xl mb-4">
            Our mission is to empower our clients with seamless, efficient, and
            secure communication solutions. We strive to:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 font-bold text-xl text-gray-500 gap-4">
            {[
              "Deliver state-of-the-art telecom services that enhance connectivity and productivity.",
              "Maintain the highest standards of customer service and support.",
              "Continuously innovate to stay ahead in the ever-evolving telecom landscape.",
              "Create a complementary suite of associated high quality products.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Our Values */}
        <section className="bg-gray-200 mt-20 mb-20 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-500 mb-4">
            Our values
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 text-xl text-gray-700 font-bold gap-6">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace innovation and are always exploring new technologies to improve our services and deliver the best solutions to our clients.",
              },
              {
                title: "Integrity",
                description:
                  "Integrity is at the core of our business. We believe in transparency, honesty, and ethical practices in all our business operations.",
              },
              {
                title: "Customer Focus",
                description:
                  "Our customers are our top priority. We listen to their needs and work tirelessly to exceed their expectations with our services and support.",
              },
              {
                title: "Reliability",
                description:
                  "We understand the importance of dependable communication services. Our commitment to reliability ensures that our clients can count on us for consistent, high-quality service.",
              },
            ].map((value, index) => (
              <li key={index} className="flex flex-col">
                <div className="flex items-start mb-2">
                  <svg
                    className="w-6 h-6 text-red-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <h3 className="font-semibold text-gray-700">{value.title}</h3>
                </div>
                <p className="text-gray-600 ml-8">{value.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* Awards */}
       <Awards/>
      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mt-20 mb-20 bg-gray-50 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-500 text-center mb-8">
          Fidelity Group in numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
      {/* Our Journey */}
      <div className="max-w-[90%] mx-auto mt-20 mb-20 px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-500 mb-4">
            Our journey
          </h2>
          <p className="text-gray-700 text-xl mb-4">
            At Fidelity Group, we have been creating meaningful connections for
            decades. Whether you are a business looking to enhance your
            communication infrastructure or a residential customer seeking
            reliable services, we are here to help. Join us and experience the
            difference that comes with every service from Fidelity Group.
          </p>
        </section>
        <img src={Journey} />
      </div>
      <Contact/>
    </>
  );
};

export default About;
