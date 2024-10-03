import React from "react";
import {
  BarChart2,
  Users,
  Book,
  ServerCog,
  Receipt ,
  Map,
  Play,
} from "lucide-react";
import dealer from "../../assets/Images/Fidelity-Partner-Programme.png";

const Referral= () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="p-4">
        <p className="uppercase text-gray-500 text-xs md:text-sm text-center py-6">
        Partner inspired software, telecoms, energy and billing solutions.
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-500 px-4">
         <span className="text-red-600">Offer Telecom Services</span> to Your Contacts and 
         Customers without the Support Burden
        </h1>
      </header>

      {/* Main content */}
      <main className="p-4">
        <div className="flex flex-col md:flex-row gap-4 my-8 mx-4 md:mx-16">
          {/* Left column */}
          <div className="md:w-1/2">
            <div className="border-l-4 border-blue-900 pl-4">
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
              Gain  <span className="text-red-600">upfront commissions </span><br/>across all our products.
              </h1>
            </div>
            <div className="flex flex-col gap-2 mb-8">
              {[
                "Dealer Programme >",
                "Referral Partner Programme >",
                "Wholesale Partner Programme >",
                "White-label Partner Programme >",
              ].map((program) => (
                <span
                  key={program}
                  className="text-red-600 px-2 py-1 rounded text-sm"
                >
                  {program}
                </span>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="md:w-1/2">
            <p className="text-lg md:text-2lg">
            Reselling our services provides you with an attractive margin share 
            and contributes to the growth of your digital revenues. There is no 
            limit to how much revenue you can generate by becoming a referral partner.<br/>
            <div className="mt-10">Our relationships with top industry suppliers ensure you receive the latest
            technology and tools for business success. We pride ourselves on staying at
            the forefront of innovation, empowering you to offer cutting-edge solutions 
            to your customers.<br/></div> 
            <div className="mt-10">When you join our referral program, you unlock many advantages:</div>
            </p>
           
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg md:text-xl px-4 md:px-16 py-10 md:py-20">
          {[
            { icon: <BarChart2 />, text: "Incentive & Growth Programs" },
            { icon: <Users />, text: "Sales & Product Training" },
            { icon: <Book />, text: "Full Product Suite Access" },
            { icon: <Receipt />, text: "Fidelity branded customer billing" },
            { icon: <ServerCog />,text: "24/7/365 Customer Support Service"},
            { icon: <Map />, text: "Inside Track Market Updates" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-red-600 text-white p-4 flex items-center gap-2 rounded"
            >
              {feature.icon}
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        <div className=" flex flex-col text-center justify-center md:flex-row gap-2">
              <button className="bg-red-600 hover:bg-blue-900 text-white px-4 py-2 rounded">
                Become a Partner
              </button>
              <button className="hover:bg-blue-900 hover:text-white text-red-600 border border-red-600 px-4 py-2 rounded">
                Speak with a Channel Consultant
              </button>
            </div>
       

        {/* Brochure CTA */}
        <div className="p-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start uppercase text-center md:text-left">
            <p className="mb-8 text-sm md:text-base">
              do not settle for less. partner with the best.
            </p>
            <p className="font-semibold text-3xl md:text-4xl mb-8 text-gray-500">
              Get your copy of our channel <br />
              <span className="text-red-600">partner brochure.</span>
            </p>
            <button className="bg-red-600 hover:bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2">
              Get Copy Now
            </button>
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <img
              src={dealer}
              alt="Channel Partner Brochure"
              className="w-full max-w-xs"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 pb-10 mt-24">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2 relative">
          <video src="/youtube-videolink" alt="Company video" className="w-full rounded-lg shadow-lg" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-4">
              <Play className="text-white" size={32} />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded">
            <p className="font-bold">Daryl Pile.</p>
            <p className="text-sm">Managing Director - Channel</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">To be the UK's most customer-centric communications company, helping businesses grow by providing and supporting them with innovative and trusted solutions.</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              Industry leading service against global benchmarks (ISO 9001 Certified)
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              Partnered with the best-of-the best industry suppliers
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              Delivering the latest technology and tools for business success
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">✓</span>
              Over 30 years of experience in the channel partner space
            </li>
          </ul>
          <p className="text-red-600 font-bold mt-4">Partner with the best</p>
        </div>
      </div>
      
      <div className="my-12 bg-gray-200 py-20 px-10">
        <h2 className="text-5xl font-bold text-center my-10">
          What <span className="text-red-600">our providers</span> have to say about us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
          {['Gamma', 'Virgin', 'TalkTalk', 'BT'].map((provider, index) => (
            <div key={index} className={`aspect-video rounded-lg flex items-center justify-center relative ${
              ['bg-purple-600', 'bg-blue-400', 'bg-blue-600', 'bg-yellow-400'][index]
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full p-2">
                  <Play className="text-white" size={24} />
                </div>
              </div>
              <span className="text-white font-bold text-xl">{provider}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex flex-wrap justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 my-4 sm:my-6 md:my-8 lg:my-10">
  {["Referral", "Dealer", "White Label", "Wholesale"].map((item, index) => (
    <div
      key={index}
      className={`flex items-center ${
        item === "Referral" ? "text-red-500" : "text-gray-400"
      }`}
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {item}
    </div>
  ))}
</div>

        <hr />
        {/* Final CTA */}
        <div className="my-8 text-center">
          <button className="bg-red-600 hover:bg-blue-900 text-white px-4 py-2 rounded">
            Become a Partner
          </button>
          <button className="hover:bg-blue-900 hover:text-white text-red-600 border border-red-600 px-4 py-2 rounded ml-2">
            Speak with a Channel Consultant
          </button>
        </div>
      </main>
    </div>
  );
};

export default Referral;
