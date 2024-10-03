import React from "react";
import bgimg from "../../assets/Images/Asset-1@4x-8.png";
import logo1 from "../../assets/Images/truevo.png";
import logo2 from "../../assets/Images/logo2-02.png";
import logo3 from "../../assets/Images/logo-colored.png";
import logo4 from "../../assets/Images/paynetics.png";
import payment1 from "../../assets/Images/PHOTO-2023-06-12-15-25-02-370x230@2x.jpg";
import payment2 from "../../assets/Images/Payments-Blog-370x230@2x.png";
import Contact from "../../components/Contact/contact";
import {
  ArrowRight,
  CreditCard,
  MonitorSmartphone,
  ShoppingCart,
} from "lucide-react";

const Merchant = () => {
  return (
    <>
      <div className="font-sans">
        {/* Hero Section */}
        <section className="bg-white p-8">
          <div className="container mx-auto flex items-center justify-between">
            <div className="max-w-2xl">
              <p className="text-gray-500 uppercase tracking-wide mb-2">
                PAYMENT-SOLUTIONS-AS-A-SERVICE
              </p>
              <h1 className="text-4xl font-bold mb-4">
                Comprehensive Payment Solutions
                <br />
                <span className="text-red-600">
                  for Businesses of All Sizes:
                </span>
              </h1>
              <p className="text-xl mb-6">
                Card Machines, ePOS Systems, and more
              </p>
              <button className="bg-red-600 text-white px-6 py-2 rounded">
                Get a Quote
              </button>
            </div>
            <div className="relative w-1/3">
              <img
                src={bgimg}
                alt="Payment device"
                className="w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CreditCard className="w-12 h-12 text-red-600" />}
              title="Accept payments"
              description="Anywhere, anytime with our adaptable fixed, mobile, and portable card machines!"
            />
            <FeatureCard
              icon={<MonitorSmartphone className="w-12 h-12 text-red-600" />}
              title="EPOS"
              description="Elevate your customer experience with our feature-packed EPOS"
            />
            <FeatureCard
              icon={<ShoppingCart className="w-12 h-12 text-red-600" />}
              title="E-Commerce"
              description="Boost your online business with a secure and efficient ecommerce online payment system."
            />
          </div>
        </section>

        {/* Header */}
        <header className="p-4">
          <p className="uppercase text-gray-500 mt-8 text-xs md:text-sm text-center py-6">
            Payment Solutions: Card Machines | Online Payment Gateways | EPOS |
            E-Commerce
          </p>
          <h1 className="text-3xl md:text-5xl mt-8 font-bold text-center text-gray-500 px-4">
            UK Merchant <span className="text-red-600">Payment Solutions </span>
            Specialists
          </h1>
        </header>

        {/* Main content */}
        <main className="p-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8 mx-4 my-10 md:mx-16">
            {/* Left column */}
            <div className="md:w-1/2">
              <div className="border-l-4 border-blue-900 pl-4">
                <h1 className="text-3xl text-gray-500 font-bold mb-2">
                  Improve efficiency and make savings.
                </h1>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                {[
                  "Pay by Link Solution >",
                  "Virtual Terminal Solutions >",
                  "Credit Card Terminals >",
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
              <h1 className="text-xl md:text-2xl font-semibold mb-2">
                Have <span className="text-red-600">Unmatched </span>Merchant
                Services : Choice and reliable payment solutions with Fidelity
                Group
              </h1>
              <p className="text-lg md:text-2lg">
                Discover the Fidelity Group difference in payment solutions as
                we empower our merchant partners with a range of card, ePOS, and
                other payment solution choices.
                <br />
                By offering a diverse selection of products and services, we
                ensure the provision of reliable, payment solutions that add
                value to the entire value chain – banks, our partner network,
                and, most importantly, the end customers.
              </p>
              <div className="mt-8 flex flex-col md:flex-row gap-2">
                <button className="bg-red-600 hover:bg-blue-900 text-white px-4 py-2 rounded">
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </main>

        <p className="uppercase text-gray-500 font-semibold mt-8 text-xs md:text-sm text-center">
          Payment Solutions: Acquiring Banks
        </p>
        <div className="flex flex-wrap justify-center mt-20 mb-20 items-center gap-8">
          <img src={logo1} alt="Castles Technology" className="h-6 md:h-8" />
          <img src={logo2} alt="Transact" className="h-6 md:h-8" />
          <img src={logo3} alt="Paynetics" className="h-6 md:h-8" />
          <img src={logo4} alt="Worldpay" className="h-6 md:h-8" />
          <img src={logo2} alt="Trust Payments" className="h-6 md:h-8" />
          <img src={logo1} alt="Elavon" className="h-6 md:h-8" />
        </div>

        <div className="bg-gray-100 py-16 sm:py-28 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-500 text-center sm:text-left">
              We can help your business
              <span className="text-red-600"> save money </span>
              <br />
              on rates. Book a review today!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-red-600 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-red-700 whitespace-nowrap">
              Request Review
            </button>
            <button className="bg-blue-900 text-white px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-blue-800 whitespace-nowrap">
              Call us Now
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-10 mt-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="mt-8 space-y-4">
                <p className="uppercase text-gray-500 font-semibold text-xs md:text-sm">
                  PAYMENT SOLUTIONS AS A SERVICE
                </p>
                <h2 className="text-2xl md:text-3xl text-gray-500 font-bold mb-8">
                  Press releases, <span className="text-red-600">blogs</span>{" "}
                  and videos about payment solutions
                </h2>
                <BlogLink title="4 Key Factors to Consider When Choosing A Payment Option for Your Business" />
                <BlogLink title="The Evolution of Merchant Payments" />
                <BlogLink title="What is EPOS? | Electronic Point of Sale | Fidelity Group UK" />
                <BlogLink title="What are continuous payment authorities (CPAs)" />
                <BlogLink title="Using EPOS to improve customer retention" />
              </div>
              <BlogCard
                image={payment1}
                date="12/06/2023"
                title="4 Key Factors to Consider When Choosing A Payment Option for Your Business"
              />
              <BlogCard
                image={payment2}
                title="The Evolution of Merchant Payments"
              />
            </div>
          </div>
        </section>
        <div className="mb-8 bg-gray-200 py-20 flex flex-col lg:flex-row justify-between items-center px-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-2 text-gray-500 text-center lg:text-left">
              Unlock the power of payment solutions with Fidelity Group’s
              <span className="text-red-600"> Partner Payments</span>.
            </h2>
          </div>
          <button className="bg-red-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded hover:bg-blue-900 whitespace-nowrap">
            Download our Brochure
          </button>
        </div>
      </div>
      <Contact />
    </>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-red-600 font-semibold flex items-center justify-center mx-auto">
      Get a Quote <ArrowRight className="w-4 h-4 ml-1" />
    </button>
  </div>
);

const BlogCard = ({ image, date, title }) => (
  <div className="bg-white shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      {date && <p className="text-gray-500 text-sm mb-2">{date}</p>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <button className="text-red-600 font-semibold flex items-center">
        Read more <ArrowRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  </div>
);

const BlogLink = ({ title }) => (
  <div className="flex items-center text-red-600 font-semibold">
    <ArrowRight className="w-4 h-4 mr-2" />
    <span>{title}</span>
  </div>
);

export default Merchant;
