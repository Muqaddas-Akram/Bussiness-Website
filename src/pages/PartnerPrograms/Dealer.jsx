import React from "react";
import {
  BarChart2,
  Users,
  Book,
  ServerCog,
  UserCheck,
  PieChart,
  Map,
  Activity,
  MonitorCog,
} from "lucide-react";
import dealer from "../../assets/Images/Fidelity-Partner-Programme.png";

const Dealer = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="p-4">
        <p className="uppercase text-gray-500 text-xs md:text-sm text-center py-6">
          Cultivating Success Together: Unleash Profits with Our Dealer
          Partnership Model
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-500 px-4">
          Unlock <span className="text-red-600">New Revenue Streams</span> with
          Our Decades of Channel Partner Expertise
        </h1>
      </header>

      {/* Main content */}
      <main className="p-4">
        <div className="flex flex-col md:flex-row gap-4 mb-8 mx-4 md:mx-16">
          {/* Left column */}
          <div className="md:w-1/2">
            <div className="border-l-4 border-blue-900 pl-4">
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Have <span className="text-red-600">full visibility </span>into
                your customers'
                <br /> year-round performance
              </h1>
              <p className="mb-4">
                with Avail, our innovative management, ticketing, <br /> and
                billing platform.
              </p>
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
              In today's business landscape, reliable and efficient tools such
              as broadband, telephony systems, and mobile solutions are
              indispensable for managing workflows operations. With our Dealer
              programme, you can offer these services without the need for
              significant capital outlay for day-to-day management.
            </p>
            <div className="mt-8 flex flex-col md:flex-row gap-2">
              <button className="bg-red-600 hover:bg-blue-900 text-white px-4 py-2 rounded">
                Become a Partner
              </button>
              <button className="hover:bg-blue-900 hover:text-white text-red-600 border border-red-600 px-4 py-2 rounded">
                Speak with a Channel Consultant
              </button>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 text-lg md:text-xl px-4 md:px-16 py-10 md:py-20">
          {[
            { icon: <BarChart2 />, text: "Incentive & Growth Programs" },
            { icon: <Users />, text: "Sales & Product Training" },
            { icon: <Book />, text: "Full Product Suite Access" },
            { icon: <ServerCog />,text: "24/7/365 Customer Support Service"},
            { icon: <UserCheck />, text: "Dedicated Account Management" },
            { icon: <PieChart />, text: "Dule branded Customer Pricing" },
            { icon: <Map />, text: "Inside Track Market Updates" },
            { icon: <Activity />, text: "Monitoring & Fault Management" },
            { icon: <MonitorCog />, text: "Anvil Access and Training" },
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
        <div className="flex flex-wrap justify-center text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-16 my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12">
  {["Referral", "Dealer", "White Label", "Wholesale"].map((item, index) => (
    <div
      key={index}
      className={`flex items-center ${
        item === "Dealer" ? "text-red-500" : "text-gray-400"
      }`}
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-5 2xl:mr-6"
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

        <p className="uppercase text-red-600 text-xs md:text-sm font-semibold text-center py-4">
          Join us today and experience the benefits of our Dealer Partner
          Program.
        </p>

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

export default Dealer;
