import React from "react";
import Contact from "../../components/Contact/contact";
import Testimonial from "../../components/Testimonials/testimonials";
import Image7 from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import Image8 from "../../assets/Images/Artboard-38-1.webp";
import Image9 from "../../assets/Images/Artboard-39-1.webp";
import Image10 from "../../assets/Images/Artboard-38.webp";
import logo from '../../assets/Images/SIP-Supply.webp';

const SupplierLogo = () => (
  <div className="bg-gray-100 h-12 flex items-center justify-center rounded">
    <img src={logo} />
  </div>
);;

const CallManager = () => {
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
              Dependable voice services with instant call management
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white mb-2 mt-2">
              Offering unmatched flexibility and seamless continuity
            </p>
            <button className="bg-red-600 text-white px-6 py-3 mt-5 rounded hover:bg-blue-900 transition">
              Find out more
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
              SIP trunk services provide a highly-flexible alternative to ISDN, compatible 
              with all leading IP PBX brands in the UK market, ensuring your PBX hardware 
              works seamlessly with our network service. Compared to ISDN, Fidelity's SIP 
              trunk services are more cost-effective on a per-channel basis and offer greater 
              flexibility in terms of telephone numbers and locations. Additionally, they are 
              quicker to install and deliver robust business continuity, ensuring your business 
              never loses calls.
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              Any business with a PBX can switch to our SIP solutions and immediately 
              benefit from a more flexible, affordable, and resilient phone service.
            </p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img src={Image8} alt="Woman on phone" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Middle section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 pr-4">
            <img src={Image9} alt="Man on phone" className="w-full h-auto object-cover" />
          </div>
          <div className="md:w-2/3 mt-4 md:mt-0">
            <h2 className="text-xl font-bold text-gray-600 mb-2">SIP Trunk Call Manager</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Delivers a robust business continuity solution, consolidating all your numbers 
              onto a single platform to ensure you never miss a call. Our cloud-based call 
              control system allows you to automatically route calls to predefined 
              destinations such as colleagues, mobile devices, hunt groups, or call queues. 
              Equip yourself with a powerful tool that not only enhances your business 
              communications but also provides peace of mind through comprehensive fraud 
              protection and advanced call reporting capabilities. Optimize your business 
              operations and never miss a critical call again.
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 pr-4">
            <h2 className="text-xl font-bold text-gray-600 mb-4">
              A comprehensive portfolio of business features, combined with user-friendly control via a mobile 
              app, creating a powerful solution for modern enterprises.
            </h2>
            <div className="flex flex-col md:flex-row">
              <ul className="list-disc list-inside md:w-1/2 pr-4 text-gray-400">
                <li>Call Queuing: Efficiently manage incoming calls with advanced call queuing.</li>
                <li>Voicemail: Ensure no call goes unanswered with integrated voicemail.</li>
                <li>Announcements: Keep callers informed with customizable announcements.</li>
                <li>Call Divert: Seamlessly divert calls on busy, no reply, or failure conditions.</li>
                <li>Day and Time of Day Routing: Automate call routing based on specific times of the day.</li>
                <li>Date Routing: Manage calls effectively with date-specific routing.</li>
                <li>Interactive Voice Response (IVR): Enhance caller experience with IVR menus.</li>
                <li>Shortcuts: Quickly access key features and functions with customizable shortcuts.</li>
                <li>Hunt Groups: Distribute calls across multiple lines with hunt groups.</li>
              </ul>
              <ul className="list-disc list-inside md:w-1/2 mt-4 md:mt-0 text-gray-400">
                <li>Destination/Pass-Through: Direct calls to specific destinations or pass them through as needed.</li>
                <li>Notification: Stay informed with real-time call notifications.</li>
                <li>Advanced Statistics: Gain insights with detailed call reporting and statistics.</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <img src={Image10} alt="Call center" className="w-full h-auto object-cover" />
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

export default CallManager;
