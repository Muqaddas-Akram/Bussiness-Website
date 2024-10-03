import React from 'react';
import logo from "../../assets/Images/logo.png";
import star from "../../assets/Images/1699896717800-removebg-preview.png"
import tag from "../../assets/Images/images__1_-removebg-preview.png"
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="space-y-4 md:space-y-0 text-center md:text-left">
            <a className="flex flex-col items-center md:items-start pb-10 title-font font-medium text-gray-900 mb-2 md:mb-0">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-16 h-20 text-white rounded-full"
                />
                <div className="ml-4">
                  <span className="font-bold text-3xl md:text-5xl">fidelity</span>
                  <span className="block text-xs mt-1">group.<a className="text-xs mt-1 text-red-600">empowering xaas</a>.</span>
                </div>
              </div>
            </a>
            <p className="text-sm text-gray-600">
              Henley: 14 Station Rd, Henley-on-Thames, RG9 1AY
            </p>
            <p className="text-sm text-gray-600">
              London: Fox Court, 14 Grays Inn Rd, London WC1X 8HN
            </p>
            <p className="text-sm text-gray-600">Reg. Number: 06765669</p>
            <a
              href="http://www.fidelity-group.co.uk"
              className="text-red-600 text-sm hover:text-red-600 hover:underline hover:underline-offset-2"
            >
              www.fidelity-group.co.uk
            </a>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Services</h3>
            {[
              { text: 'Connectivity', link: '/connectivity/fttp-broadband' },
              { text: 'Cloud and Hosting', link: '/cloud-hosting-security' },
              { text: 'Energy', link: '/energy/business-electricity' },
              { text: 'IoT', link: '/iot/starter-pack' },
              { text: 'Mobile', link: '/services/business-mobile' },
              { text: 'Voice', link: '/voice/non-geographic-numbers' },
              { text: 'Billing', link: 'https://anvilhub.com/' },
              { text: 'Payments', link: '/payments/pay-by-link' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-red-600 mb-2 block hover:text-red-600 hover:underline hover:underline-offset-2"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            {[
              { text: 'About', link: '/company/about' },
              { text: 'Contact', link: '/contact' },
              { text: 'Media and News', link: '/company/insights-news' },
              { text: 'Careers', link: '/company/careers' },
              { text: 'Terms of Use', link: '/company/leadership-team' },
              { text: 'Privacy Policy', link: 'https://example.com/privacy' },
              { text: 'Cookie Policy', link: 'https://example.com/cookie' },
              { text: 'Code of Practice', link: 'https://example.com/code-of-practice' },
              { text: 'KIT Home VoIP', link: 'https://example.com/kit-home-voip' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-red-600 mb-2 block hover:text-red-600 hover:underline hover:underline-offset-2"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-4">Support</h3>
            {[
              { text: 'Anvil Login', link: '/support/anvil-login' },
              { text: 'RDC Remote Support', link: '/support/rdc-remote-support' },
              { text: 'Report a Fault', link: '/support/report-fault' },
              { text: 'Emergency Location', link: '/support/emergency-location' },
              { text: 'Cloud Fault', link: '/support/cloud-fault' },
              { text: 'Energy Complaints Procedure', link: '/energy/green-energy' }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-red-600 mb-2 block hover:text-red-600 hover:underline hover:underline-offset-2"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0">
            <img src={tag} alt="BSI Certified" className="h-20 w-40" />
            <div className="text-center md:text-left">
              <img src={star} alt="Trustpilot" className="h-20 w-40" />
              <p className="text-sm">TrustScore 4.8 357 reviews</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-600 text-center md:text-left">© 2024 Fidelity Group. All Rights Reserved</p>
          <div className="flex justify-center md:justify-start mt-4 md:mt-0">
            <div className="flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-red-600">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-red-600">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
