import React, { useState } from "react";
import Contact from "../../components/Contact/contact";
import Testimonial from "../../components/Testimonials/testimonials";
import Image7 from "../../assets/Images/pexels-mareklevak-2265488.jpg";
import Image8 from "../../assets/Images/Wallboard.jpg";
import Image9 from "../../assets/Images/Artboard-81.webp";
import Image10 from "../../assets/Images/User-management.png";
import Image11 from "../../assets/Images/Supervisor-View.png";
import { Briefcase, Globe, ShieldCheck, User } from 'lucide-react'; 

const FAQItem = ({ question }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border border-gray-300 rounded-md mb-2  hover:bg-blue-800 hover:text-white">
        <button
          className="w-full text-left px-4 py-2 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <svg
            className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-4 py-2 bg-gray-50">
            {/* Add answer content here */}
            <p>Answer placeholder</p>
          </div>
        )}
      </div>
    );
  };
  

const ContactSolution = () => {
    const questions = [
        "What is required to enable the integration of Microsoft Teams with Horizon?",
        "Is a Horizon subscription necessary?",
        "Can Horizon for Microsoft Teams be deployed internationally?",
        "What if there is an office relocation?",
        "Is a Horizon subscription necessary?",
        "What features bundle is available with Horizon for Microsoft Teams?",
        "Does the quality suffer compared to fixed telephony?",
        "If I add the Horizon for Microsoft Teams bolt-on to an existing Horizon subscription, will it initiate a new contract?",
        "What is hosted telephony?",
        "How can phone access be retained in an emergency?"
      ];
    
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
              Contact centre solutions{" "}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-white mb-2 mt-2">
              Simplify customer engagement with Horizon Contact. The Cloud-Based
              Contact Centre is built for your business.{" "}
            </p>
            <button className="bg-red-600 text-white px-6 py-3 mt-5 rounded hover:bg-blue-900 transition">
              Speak with an Expert
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
      {/* Contact Section */}
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
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={Image9} alt="Screen 1" className="w-full h-auto" />
          <img src={Image10} alt="Screen 2" className="w-full h-auto" />
          <img src={Image11} alt="Screen 3" className="w-full h-auto" />
        </div>
      </div>

      {/* What makes Horizon Contact great? */}
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold mb-4">WHAT MAKES HORIZON CONTACT GREAT?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-gray-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded">SIMPLE TO USE INTERFACES</button>
          <button className="bg-white text-gray-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded">ENHANCE CUSTOMER EXPERIENCE</button>
          <button className="bg-white text-gray-500 hover:bg-red-600 hover:text-white px-4 py-2 rounded">IMPROVED CUSTOMER SERVICE</button>
        </div>
      </div>

      {/* Features section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start">
          <Briefcase style={{ width: '10vh', height: '100px'}} className="text-gray-500 mr-4" />
          <div>
            <h3 className="font-bold mb-2">Management Insight and Control</h3>
            <p className="text-sm">
              Horizon Contact comes with a powerful real-time management and reporting tool that enables multiple reports to be created with ease, all of which can be saved within the Horizon Contact portal. Reports can also be scheduled and delivered to managers via email when required.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Globe style={{ width: '30vh', height: '100px' }} className="text-gray-500 mr-4" />
          <div>
            <h3 className="font-bold mb-2">Access anytime, anywhere</h3>
            <p className="text-sm">
              Agents can be based anywhere with access to wifi and work anytime, anywhere. Compatible with all Gamma handsets, but agents can also choose to use just a laptop and a headset, because Horizon Contact uses WebRTC technology to provide experience wherever your agents are located. Supervisors get a real-time view of all agent activity and contact center management, no middleware required. Changes to call flow or services can be made on the fly within a matter of minutes, ensuring that both voice and data channels can quickly adapt to your customer queries and ensure the best outcome.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <ShieldCheck style={{ width: '10vh', height: '100px' }} className="text-gray-500 mr-4" />
          <div>
            <h3 className="font-bold mb-2">Guaranteed Service Availability</h3>
            <p className="text-sm">
              It has never been so important to communicate with your customers, which is why we're offering a range of SLAs on architecture that will deliver at least a 99.99% uptime SLA. Rest assured that Gamma data centers, the BroadSoft architecture, have tons of on single site won't impact the ability to service customers.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <User style={{ width: '30vh', height: '100px' }} className="text-gray-500 mr-4" />
          <div>
            <h3 className="font-bold mb-2">CRM Integration</h3>
            <p className="text-sm">
              Horizon Contact's integrated CRM solution allows you to integrate all your current systems into one single easy to use interface, with all associated statistics within a single consolidated database. CRM integration allows the contact center agent not only to quickly find a contact's information and contact history, but will automatically display the relevant customer record when the customer calls. This enables agents to provide an enhanced call experience. Horizon Contact can integrate with many of the mainstream CRM packages with pre-built integrations for Salesforce and Microsoft Dynamics. Other top CRMs will be coming soon.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Testimonials */}
      <Testimonial />
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Horizon Contact: Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questions.map((question, index) => (
          <FAQItem key={index} question={question} />
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-6 text-center">
        If you have any other questions or need further clarification on the benefits of Horizon Contact, reach out to Fidelity Group.
      </p>
    </div>

      {/* Contact */}
      <Contact />
    </>
  );
};

export default ContactSolution;
