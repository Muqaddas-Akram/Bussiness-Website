import React from 'react';
import Device1 from '../../assets/Images/card.jpg'
import Device2 from '../../assets/Images/card-2.jpg'
import logo1 from '../../assets/Images/truevo.png'
import logo2 from '../../assets/Images/logo2-02.png'
import logo3 from '../../assets/Images/logo-colored.png'
import logo4 from '../../assets/Images/paynetics.png'

const Selling = () => {
  return (
    <>
      <div className="container mx-auto px-4 mt-20 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-500 text-center mb-8">Maximise Your Profits with Fidelity Payment Solutions</h1>
        
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="border-l-4 border-gray-800 pl-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-500 mb-2">Unleash <span className="text-red-600">Unlimited Earnings</span></h2>
              <h2 className="text-xl md:text-2xl font-bold text-gray-500">with Our Revolutionary</h2>
              <h2 className="text-xl md:text-2xl font-bold text-gray-500">Payment Solutions</h2>
            </div>
            <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4">
              <img src={Device1} alt="Payment Device 1" className="w-full md:w-1/3" />
              <img src={Device2} alt="Payment Device 2" className="w-full md:w-1/3" />
            </div>
          </div>
          <div className="md:w-2/3">
            <p className="mb-4 text-gray-400">The UK payment industry, valued at an impressive £12 billion, is experiencing a remarkable surge as innovative payment providers and cutting-edge solutions continue to emerge.</p>
            <p className="mb-4 text-gray-400">Every UK-based business necessitates a payment acceptance method, such as a Chip and Pin machine, a website gateway, a pay-by-link system, or an ordering app connected to a QR code, as customers increasingly opt for cashless transactions. Debit and credit cards have emerged as the favoured means of conducting payments.</p>
            <p className="mb-4 text-gray-400">To process these card payments, customers must secure authorization from an acquiring bank, which assesses multiple factors before granting approval. Acquiring banks subsequently impose flat-rate fees for both business and personal bank cards, with these charges being deducted monthly via a statement.</p>
            <p className="mb-4 text-gray-400">Fidelity Group has established strategic partnerships with industry-leading software providers and acquiring banks, ensuring enhanced value for both your customers and your business.</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-blue-600">Become a Partner</button>
              <button className="bg-white text-red-600 border border-red-600 px-6 py-2 rounded hover:bg-blue-600">Speak with a Channel Consultant</button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-20 mb-40 items-center gap-8">
          <img src={logo1} alt="Castles Technology" className="h-6 md:h-8" />
          <img src={logo2} alt="Transact" className="h-6 md:h-8" />
          <img src={logo3} alt="Paynetics" className="h-6 md:h-8" />
          <img src={logo4} alt="Worldpay" className="h-6 md:h-8" />
          <img src={logo2} alt="Trust Payments" className="h-6 md:h-8" />
          <img src={logo1} alt="Elavon" className="h-6 md:h-8" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-500 mb-8">Reasons to sell <span className="text-red-600">Fidelity Payment Solutions</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '📊', text: 'We share our residuals with you, including revenue from ancillary services and paper statements.' },
            { icon: '%', text: 'Earn upfront commissions from payment terminal sales.' },
            { icon: '£', text: 'Receive ongoing transaction commissions for every purchase made by your customers.' },
            { icon: '🏢', text: 'Access a network of 15 acquiring banks, allowing us to cater to all business types and offer the most competitive rates in the market.' },
            { icon: '🖥️', text: 'We share our residuals with you, including revenue from ancillary services and paper statements.' },
            { icon: '📱', text: 'Earn upfront commissions from payment terminal sales.' },
            { icon: '🖨️', text: 'Receive ongoing transaction commissions for every purchase made by your customers.' },
            { icon: '🎧', text: 'Access a network of 15 acquiring banks, allowing us to cater to all business types and offer the most competitive rates in the market.' },
          ].map((item, index) => (
            <div key={index} className="bg-red-600 text-white p-4 md:p-6 rounded-lg flex flex-col items-center text-center">
              <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
              <p className="text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="font-sans">
        <div className="bg-red-500 text-white py-6 md:py-8 px-4 text-left">
          <h1 className="text-xl md:text-3xl font-bold mb-2">Clear and Comprehensive:</h1>
          <h2 className="text-lg md:text-2xl font-semibold">Our Dual-Faceted Commission Structure</h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
          <p className="text-left mb-6 md:mb-8">
            We distribute commissions in a two-part structure and take great pride in maintaining full transparency regarding all commission reports and payments, including the methods by which they are generated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Residuals",
                content: "We share our residuals with you, encompassing ancillary fees, paper statement charges, and any additional revenue we obtain. Our aim is to encourage proper pricing for all merchants, as we strive to secure a mutually beneficial margin for both parties.",
                bgColor: "bg-indigo-400",
              },
              {
                title: "Terminal Commissions",
                content: "Terminal commissions are provided upfront and calculated based on a 48-month matrix. Should you sell contracts for 12, 24, or 36 months, the commissions will be proportionally adjusted to reflect the respective durations.",
                bgColor: "bg-indigo-500",
              },
              {
                title: "Bonus",
                content: "As a performance incentive, delivering ten new live deals each month will increase your residual by 5% up to a maximum of 75%. However, if you have two consecutive months without meeting this target, your percentage will decrease by 5% each consecutive month until it reaches a minimum of 50%.",
                bgColor: "bg-indigo-600",
              },
            ].map((item, index) => (
              <div key={index} className={`${item.bgColor} text-white p-4 md:p-6 rounded-lg`}>
                <h3 className="font-bold text-lg md:text-xl mb-3">{item.title}</h3>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center text-5xl space-x-8 mb-8">
          {["Referral", "Dealer", "White Label", "Wholesale"].map((item, index) => (
            <div key={index} className={`flex items-center ${item === "Wholesale" ? "text-red-500" : "text-gray-400"}`}>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-blue-900 hover:text-white">
            Speak with a Channel Consultant
          </button>
        </div>
      </div>

      <div className="bg-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Empowering <span className="text-red-500">Partners.</span>
          </h2>
          <h3 className="text-3xl font-bold mb-6">Join Club Fidelity</h3>
          <p className="mb-8">The most customer centric reseller partner programme in the United Kingdom.</p>
          <button className="bg-red-500 text-white px-6 py-3 rounded font-bold hover:bg-blue-900">
            Download Our Brochure
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Selling;
