import React, { useState } from "react";
import Bridge from "../../assets/Images/Artboard-2-2.webp";
import Phone from "../../assets/Images/Artboard-29.webp";
import Hand from "../../assets/Images/Artboard-26-6.webp";
import SIM from "../../assets/Images/Artboard-27-2.webp";
import Contact from "../../components/Contact/contact";

const testimonials = [
  {
    name: "GEORGE /",
    text: "I used to be a customer of one of the major UK networks. Billing or tech queries took a hours of waiting. Each time I contact Fidelity Group they get back to me promptly with the answer. The service is impeccable.",
  },
  {
    name: "GWEN S /",
    text: "We moved to Fidelity 2yrs ago. Moving to Fidelity was extremely simple and the saving was significant. The service received from you is amazing. You always deal with everything in the a professional manner responding to all queries in no time.",
  },
  {
    name: "GEORGE SERBANESCU /",
    text: "My old supplier took hours of me waiting on hold and I was never able to get a clear answer. Each time I contact Fidelity Group they get back to me promptly with the answer regardless if this is about billing, a technical issue, roaming. The service from Fidelity is impeccable.",
  },
];

const features = [
  {
    icon: "M",
    title: "Mobile",
    description:
      "Our multi-network SIM cards provide optimised network coverage, ensuring you can connect to anything, anywhere, at any time.",
  },
  {
    icon: "A",
    title: "Aggregated Data",
    description:
      "Our SIMs share a pooled data allowance across your business, helping to eliminate unwelcome data overage charges.",
  },
  {
    icon: "B",
    title: "Built for Business",
    description:
      "With Fidelity, you will have access to the very best business-grade networks in the UK.",
  },
  {
    icon: "M",
    title: "M2M",
    description:
      "If a machine can signal its requirements without intervention, processes can be streamlined significantly.",
  },
];

function Connectivity() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <>
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${Bridge})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="text-5xl block lg:inline">
                Join our IoT Provider Partner Program
              </span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-4">
              Unlock advanced collaboration opportunities to propel your IoT
              solutions forward
            </h2>
            <h3 className="text-base md:text-lg lg:text-xl text-white mb-6">
              Become a partner | Download our brochure
            </h3>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-blue-900 transition duration-300">
                Become a Partner
              </button>
              <button className="bg-red-600 text-white px-6 py-3 rounded hover:bg-blue-900 transition duration-300">
                Download our Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Curve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
        ></div>
      </div>

      {/* Frist */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-gray-500 mb-8">
          Staying ahead of the curve means more than just keeping pace — it’s
          about embracing cutting-edge technologies that drive transformation.
        </h1>

        <div className="flex flex-col  mt-20 md:flex-row gap-8">
          <div className="md:w-1/2  space-y-10">
            <p className="mb-4">
              As a valued partner, you'll have a unique opportunity to elevate
              your offerings by providing comprehensive global IoT solutions to
              your customers.
            </p>
            <p className="mb-4">
              Powered by our latest platform, vM2M, our integrated suite
              includes IoT SIM management, robust IoT software and a wide range
              of IoT supplier services — all conveniently housed under one roof.
            </p>
            <p className="mb-4">
              Whether your clients are seeking reliable IoT connectivity,
              scalable management solutions or innovative hardware options, our
              platform ensures they have access to everything they need, 24/7.
            </p>
            <p className="mb-4">
              Partnering with us means delivering unparalleled value and staying
              at the forefront of the IoT revolution.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src={Phone}
              alt="Office workers"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
          <div className="flex items-center text-2xl text-gray-500 font-bold">
            <span className="text-red-500 mr-2">■</span>
            Manage data overages
          </div>
          <div className="flex items-center text-2xl text-gray-500 font-bold">
            <span className="text-red-500 mr-2">■</span>
            Quote live in seconds
          </div>
          <div className="flex items-center text-2xl text-gray-500 font-bold">
            <span className="text-red-500 mr-2">■</span>
            True SIM estate management
          </div>
          <div className="flex items-center text-2xl text-gray-500 font-bold">
            <span className="text-red-500 mr-2">■</span>
            Create additional revenue
          </div>
          <div className="flex items-center text-2xl text-gray-500 font-bold">
            <span className="text-red-500 mr-2">■</span>
            Data driven insights
          </div>
          <div className="flex items-center text-2xl text-gray-500 font-bold">
            <span className="text-red-500 mr-2">■</span>
            Secure SIMs
          </div>
        </div>

        {/* <div className="my-8">
        <p className="text-gray-600 mb-4">Powered by</p>
        <div className="flex flex-wrap gap-8 items-center">
          <img src="/path-to-telefonica-logo.png" alt="Telefonica" className="h-8" />
          <img src="/path-to-kpn-iot-logo.png" alt="KPN IoT" className="h-8" />
          <img src="/path-to-tele2-logo.png" alt="Tele2" className="h-8" />
          <img src="/path-to-deutsche-telekom-logo.png" alt="Deutsche Telekom" className="h-8" />
          <img src="/path-to-ee-logo.png" alt="EE" className="h-8" />
        </div>
      </div> */}
      </div>

      <div className="flex flex-col md:flex-row gap-8 my-16 px-4 md:px-8 lg:px-16">
  <div className="md:w-80 flex justify-center mb-6 md:mb-0">
    <img
      src={Hand}
      alt="Person using laptop"
      className="w-full rounded-lg shadow-lg"
    />
  </div>
  <div className="flex-1">
    <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
      We're completely <span className="text-red-500">independent</span> ...
    </h2>
    <p className="mb-4 text-base md:text-lg">
      There are a huge range of IoT solutions available to you, from a wide
      range of suppliers. Find the ideal solution for you and your business
      by using our vM2M platform. Just log in, select the SIM specification
      of your choice and you'll get an instant quote. Our independence means
      that we always ensure that you make the best possible choice.
    </p>
    <p className="text-base md:text-lg">
      At Fidelity Group, our trusted network provides you with the peace of
      mind that you will always be making the best choice for you and your
      business.
    </p>
  </div>
</div>


      
      <div className="flex flex-col md:flex-row gap-8 my-16 px-4 md:px-8 lg:px-16">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
            …trusted in telecoms for over{" "}
            <span className="text-red-500">40 </span>years
          </h2>
          <p className="mb-4 text-base md:text-lg">
            IoT may be relatively new to the telecoms marketplace but we’ve been
            here much longer than that. With over 40 years of telecoms
            experience and success, working closely with some of the UK’s
            leading companies to support tens of thousands of end users,
            Fidelity Group’s network expertise is trusted by businesses
            everywhere.
          </p>
          <p className="text-base md:text-lg">
            Your decision to work with us will not only provide you with the
            very best IoT solution but also give you access to a wide range of
            other outstanding telecoms solutions to help your business.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={SIM}
            alt="Person using laptop"
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second */}
      <div className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
            What our customers have to say
          </h2>
          <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full md:w-1/3 p-4 ${
                  index === currentTestimonial ? "block" : "hidden md:block"
                }`}
              >
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <h3 className="font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentTestimonial ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-8">
            The future is now and{" "}
            <span className="text-red-500">IoT is changing</span> how business
            is done
          </h2>
          <div className="flex flex-wrap justify-center">
            {features.map((feature, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="text-red-500 text-3xl font-bold mb-4 border-2 border-red-500 rounded-full w-12 h-12 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Contact />
    </>
  );
}

export default Connectivity;
