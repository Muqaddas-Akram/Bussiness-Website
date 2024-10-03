import React from "react";
import Bridge from "../../assets/Images/Artboard-2-2.webp";
import Phone from "../../assets/Images/Artboard-29.webp";
import Hand from "../../assets/Images/Artboard-26-6.webp";
import SIM from "../../assets/Images/Artboard-27-2.webp";
import Contact from '../../components/Contact/contact';
import Testimonial from "../../components/Testimonials/testimonials";
import { Smartphone, Users, ShoppingCart, Clipboard, Shield } from 'lucide-react';


const IoT = () => {
    const features = [
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          ),
          title: 'IoT connectivity',
          description: 'Our multi-network SIM cards provide optimised network coverage, ensuring you can connect to anything, anywhere, at any time.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
            </svg>
          ),
          title: 'Aggregated Data',
          description: 'Our SIMs can share pooled data allowances across your IoT SIM estate, helping to eliminate unwelcome data overage charges.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
            </svg>
          ),
          title: 'Partner Programme',
          description: 'Benefit from a compelling margin share by reselling market-disrupting, customer centric IoT connectivity.',
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          ),
          title: 'vM2M IoT Platform',
          description: 'In simple terms weve made IoT as easy as; Quote – Order – Manage - 24/7',
        },
      ];
      const features1 = [
        {
          icon: <Smartphone />,
          title: "24/7 Online Quoting",
          description: "You've selected your ideal IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away."
        },
        {
          icon: <Users />,
          title: "Outstanding customer support",
          description: "vM2M allows you to do everything online but there are real people behind our IoT solutions. If you need to talk to one of our experts you can be sure that you can pick up the phone and speak to one of them 24/7!"
        },
        {
          icon: <ShoppingCart />,
          title: "24/7 Online Ordering",
          description: "A few clicks on the keyboard and your IoT SIMs will be on the way. Your order will be processed and shipped by Fidelity Group's own customer operations team."
        },
        {
          icon: <Clipboard />,
          title: "Choose your ideal IoT SIM solution",
          description: "We won't tell you what to order or which data provider to use – the choice is entirely your own. However, if you'd like assistance, we're always here to help."
        },
        {
          icon: <Users />,
          title: "24/7 Online Management",
          description: "Do you need to order more SIMs? Do you want to check data usage, check for connectivity issues and more? No problem. vM2M will provide you with the ability to do that anytime, anywhere."
        },
        {
          icon: <Shield />,
          title: "Secure SIMs",
          description: "Your data is as important to us as it is to you and in today's IoT environment security threats can be impact everything from your assets and IPR to data and privacy."
        }
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

        {/* Content */}
        <div className="relative flex items-center justify-start h-full text-left px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl">
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Global IoT Solution – Data everywhere for everything
            </h1>
            <p className="text-white pt-4 mb-2 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed">
              Our IoT solutions are driving connectivity and growth everywhere,
              from CCTV cameras to hand held payment devices. And from the UK to
              the farthest reaches of the globe.
              <br />
              If your business needs the very best in IoT connectivity, choosing
              our solution will be the easiest decision you’ll ever make.
            </p>
            <button className="bg-red-600 text-white px-5 mb-14 py-3 md:mt-7 rounded hover:bg-blue-900 transition duration-300">
              Find Out More
            </button>
          </div>
        </div>

        {/* Bottom Curve */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 sm:h-14 md:h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 85%, 0 0)" }}
        ></div>
      </div>
      {/* Frist */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold text-gray-500 mb-8">
          <p className="text-5xl font-bold text-red-600 mb-8">
            {" "}
            Quote, order & manage –
          </p>{" "}ENTIRELY ONLINE!
        </h1>

        <div className="flex flex-col  mt-20 md:flex-row gap-8">
          <div className="md:w-1/2  space-y-10">
            <p className="mb-4">
              Fidelity’s new platform, named vM2M, allows you to create your
              perfect IoT solution and get a quote whenever you need it. No
              phone calls, no waiting for pricing to come back to you. It’s all
              in your hands. And once you have your quote, you can order your
              IoT SIM cards, entirely online too.
            </p>
            <p className="mb-4">
              Need more SIM cards or just want to keep track of your data usage?
              No problem, just log into your vM2M account and you can do that,
              quickly, simply and easily. Getting started with IoT has never
              been easier for you. Find out more about vM2M here.
            </p>
            <p className="mb-4">
              Or enjoy our outstanding customer service. vM2M is the only
              totally online IoT management portal but we recognise that for
              some people, talking directly to one of our IoT specialists is
              preferable.
            </p>
            <p className="mb-4">
              With a team of Fidelity’s experts on hand to help you get started
              on your IoT journey and answer any questions you may have you can
              rest assured that we’ll help you get started with vM2M and our
              leading IoT connectivity technology.
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
      </div>
      {/* Block */}
      <div className="bg-gray-100 py-12 mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-2 text-center">
          IoT SIMs from Fidelity Group with vM2M
        </h2>
        <h3 className="text-xl text-gray-600 mb-8 text-center">
          – Data with a difference
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features1.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <span className="text-2xl text-red-600">{feature.icon}</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-600 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      {/* Hand SIM */}
      <div className="flex flex-col md:flex-row ml-4 sm:ml-8 md:ml-12 lg:ml-56 gap-8 my-16">
  <div className="md:w-80">
    <img
      src={Hand}
      alt="Person using laptop"
      className="w-full rounded-lg shadow-lg"
    />
  </div>
  <div className="md:w-1/2">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-500 mb-4">
      We're completely <span className="text-red-500">independent</span> ...
    </h2>
    <p className="mb-4">
      There are a huge range of IoT solutions available to you, from a wide
      range of suppliers. Find the ideal solution for you and your business by
      using our vM2M platform. Just log in, select the SIM specification of your
      choice, and you'll get an instant quote. Our independence means that we
      always ensure that you make the best possible choice.
    </p>
    <p>
      At Fidelity Group, our trusted network provides you with the peace of
      mind that you will always be making the best choice for you and your
      business.
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row ml-4 sm:ml-8 md:ml-12 lg:ml-60 gap-8 my-16">
  <div className="md:w-1/2">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-500 mb-4">
      ...trusted in telecoms for over{" "}
      <span className="text-red-500">40 </span>years
    </h2>
    <p className="mb-4">
      IoT may be relatively new to the telecoms marketplace but we’ve been here
      much longer than that. With over 40 years of telecoms experience and
      success, working closely with some of the UK’s leading companies to
      supporting tens of thousands of end users, Fidelity Group’s network
      expertise is trusted by businesses everywhere.
    </p>
    <p>
      Your decision to work with us will not only provide you with the very best
      IoT solution but also give you access to a wide range of other outstanding
      telecoms solutions to help your business.
    </p>
  </div>
  <div className="md:w-80">
    <img
      src={SIM}
      alt="Person using laptop"
      className="w-full rounded-lg shadow-lg"
    />
  </div>
</div>

<Testimonial />

     <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
      The future is now and <span className="text-red-600">IoT is changing</span> how business is done
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"
        >
          <div className="mb-4 text-4xl sm:text-5xl">{feature.icon}</div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      <Contact/>
    </>
  );
};

export default IoT;
