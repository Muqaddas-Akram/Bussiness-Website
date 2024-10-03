import React, { useRef } from "react";

// Import images
import Award1 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.09 PM (1).jpeg';
import Award2 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.12 PM.jpeg';
import Award3 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.12 PM (1).jpeg';
import Award4 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.11 PM.jpeg';
import Award5 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.11 PM (2).jpeg';
import Award6 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.11 PM (1).jpeg';
import Award7 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.10 PM.jpeg';
import Award8 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.10 PM (3).jpeg';
import Award9 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.10 PM (2).jpeg';
import Award10 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.10 PM (1).jpeg';
import Award11 from '../../assets/Images/WhatsApp Image 2024-08-11 at 12.42.09 PM.jpeg';

function Awards() {
  const awards = [
    Award1,
    Award1,
    Award1,
    Award1,
    Award2,
    Award3,
    Award4,
    Award5,
    Award6,
    Award7,
    Award8,
    Award9,
    Award10,
    Award11,
  ];

  const scrollRef = useRef(null);

  return (
    <>
      {/* Award Section */}
      <div className="bg-gray-100 mt-20 py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-gray-600 font-semibold text-center mb-8">
            Fidelity Group – Multi-award winners
          </h2>

          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex whitespace-nowrap animate-marquee"
            >
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex-none w-1/2 md:w-1/3 lg:w-1/6 px-2"
                >
                  <img
                    src={award}
                    alt={`Award ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300">
              Find out more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Awards;
