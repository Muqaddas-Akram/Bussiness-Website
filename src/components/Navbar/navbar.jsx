import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdowns, setDropdowns] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleDropdownToggle = (index) => {
    setDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleMouseEnter = (index) => {
    setDropdowns((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setDropdowns((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleSubDropdownToggle = (parentIndex, index) => {
    setDropdowns((prev) => ({
      ...prev,
      [`${parentIndex}-${index}`]: !prev[`${parentIndex}-${index}`],
    }));
  };

  const handleFurtherSubDropdownToggle = (parentIndex, index, subIndex) => {
    setDropdowns((prev) => ({
      ...prev,
      [`${parentIndex}-${index}-${subIndex}`]:
        !prev[`${parentIndex}-${index}-${subIndex}`],
    }));
  };

  const dropdownLinks = [
    {
      label: "Services",
      items: [
        {
          label: "Connectivity",
          subItems: [
            { label: "SoGEA Broadband", link: "/connectivity/sogea-broadband" },
            {
              label: "Fiber to the Premises Broadband",
              link: "/connectivity/fttp-broadband",
            },
            {
              label: "Dedicated Leased Line Fibre",
              link: "/connectivity/dedicated-leased-line",
            },
          ],
        },
        {
          label: "IoT",
          subItems: [
            {label: "IoT Connectivity and Solutions", link: "/iot/connectivity-solutions",},
            { label: "IoT Starter Pack", link: "/iot/starter-pack" },
            { label: "vM2M", link: "/iot/vm2m" },
          ],
        },
        {
          label: "Voice",
          subItems: [
            {
              label: "Voice Over IP",
              furtherSubItems: [
                { label: "VoIP for SME", link: "/voice/voip-sme" },
                {
                  label: "VoIP for Enterprises",
                  link: "/voice/voip-enterprises",
                },
                { label: "Microsoft Teams", link: "/voice/microsoft-teams" },
                { label: "Keep in Touch", link: "/voice/keep-in-touch" },
              ],
            },
            {
              label: "SIP Trunk call manager",
              link: "/voice/sip-trunk-call-manager",
            },
            {
              label: "Non-geographic numbers",
              link: "/voice/non-geographic-numbers",
            },
            {
              label: "Contact center solutions",
              link: "/voice/contact-center-solutions",
            },
          ],
        },
        {
          label: "Payments",
          subItems: [
            {
              label: "Merchant Payment Solutions",
              link: "/payments/merchant-solutions",
            },
            {
              label: "Mobile Card Payment Terminals",
              link: "/payments/mobile-card-terminals",
            },
            { label: "Virtual Terminals", link: "/payments/virtual-terminals" },
            { label: "Pay by Link", link: "/payments/pay-by-link" },
          ],
        },
        {
          label: "Energy",
          subItems: [
            { label: "Business Gas", link: "/energy/business-gas" },
            {
              label: "Business Electricity",
              link: "/energy/business-electricity",
            },
            { label: "EV Charge Points", link: "/energy/ev-charge-points" },
            { label: "Green Energy", link: "/energy/green-energy" },
          ],
        },
        {
          label: "Bussiness Mobile",
          link: "/services/business-mobile",
        },
        {
          label: "Cloud, Hosting and Security",
          link: "/cloud-hosting-security",
        },
        { label: "Billing", link: "https://anvilhub.com/" },
      ],
    },
    {
      label: "Partners Programs",
      items: [
        {
          label: "Partner Programs",
          subItems: [
            { label: "Dealer Programme", link: "/partners/dealerprogramme" },
            {
              label: "Referral Partner Programs",
              link: "/partners/referral-programs",
            },
            {
              label: "Wholesale Partner Programs",
              link: "/partners/wholesale-programs",
            },
          ],
        },
        {
          label: "IoT Connectivity and Solutions",
          link: "/partners/iot-connectivity-solutions",
        },
        { label: "Selling Payments", link: "/partners/selling-payments" },
        {
          label: "Billing, CRM and Provisioning Platform",
          link: "https://anvilhub.com/",
        },
      ],
    },
    {
      label: "Company",
      items: [
        { label: "About Us", link: "/company/about" },
        { label: "Leadership Team", link: "/company/leadership-team" },
        { label: "Careers", link: "/company/careers" },
        { label: "Case Studies", link: "/company/case-studies" },
        { label: "Insights and News", link: "/company/insights-news" },
      ],
    },
    {
      label: "Support",
      items: [
        { label: "Report a Fault", link: "/support/report-fault" },
        { label: "Emergency Location", link: "/support/emergency-location" },
        { label: "Cloud Fault", link: "/support/cloud-fault" },
        { label: "Anvil Login", link: "/support/anvil-login" },
        { label: "RDC Remote Support", link: "/support/rdc-remote-support" },
        { label: "Terms and Conditions", link: "/support/terms-conditions" },
      ],
    },
  ];

  return (
    <header className="text-gray-600 body-font border-gray-200 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a className="flex flex-col title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="w-16 h-20 text-white rounded-full"
              />
              <div className="ml-4">
                <a href="/">
                  <span className="font-bold text-3xl">fidelity</span>
                </a>
                <span className="block text-xs mt-1">
                  group.
                  <a className="text-xs mt-1 text-red-600">empowering xaas</a>.
                </span>
              </div>
            </div>
          </a>
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={sidebarOpen}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:ml-auto items-center">
          {dropdownLinks.map((link, index) => (
            <div
              className="relative mx-6"
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <button
                className="flex items-center text-gray-800 hover:text-red-600 focus:outline-none hover:underline hover:underline-offset-4 hover:decoration-red-600"
                onClick={() => handleDropdownToggle(index)}
                aria-haspopup="true"
                aria-expanded={dropdowns[index]}
              >
                {link.label}
                <FaChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    dropdowns[index] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdowns[index] && (
                <div className="absolute mt-1 w-72 bg-white shadow-lg rounded z-10">
                  {link.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(`${index}-${idx}`)}
                      onMouseLeave={() => handleMouseLeave(`${index}-${idx}`)}
                    >
                      {item.subItems ? (
                        <button
                          className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center w-full text-left hover:underline hover:underline-offset-4 hover:decoration-red-600"
                          onClick={() => handleSubDropdownToggle(index, idx)}
                          aria-haspopup="true"
                          aria-expanded={dropdowns[`${index}-${idx}`]}
                        >
                          {item.label}
                          <FaChevronDown
                            className={`ml-1 transition-transform duration-300 ${
                              dropdowns[`${index}-${idx}`] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <a
                          href={item.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:underline hover:underline-offset-4 hover:decoration-red-600"
                        >
                          {item.label}
                        </a>
                      )}
                      {dropdowns[`${index}-${idx}`] && item.subItems && (
                        <div className="absolute left-full top-0 mt-1 w-72 bg-white shadow-lg rounded z-10">
                          {item.subItems.map((subItem, subIdx) => (
                            <div
                              key={subIdx}
                              className="relative"
                              onMouseEnter={() =>
                                handleMouseEnter(`${index}-${idx}-${subIdx}`)
                              }
                              onMouseLeave={() =>
                                handleMouseLeave(`${index}-${idx}-${subIdx}`)
                              }
                            >
                              {subItem.furtherSubItems ? (
                                <button
                                  className="px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center w-full text-left hover:underline hover:underline-offset-4 hover:decoration-red-600"
                                  onClick={() =>
                                    handleFurtherSubDropdownToggle(
                                      index,
                                      idx,
                                      subIdx
                                    )
                                  }
                                  aria-haspopup="true"
                                  aria-expanded={
                                    dropdowns[`${index}-${idx}-${subIdx}`]
                                  }
                                >
                                  {subItem.label}
                                  <FaChevronDown
                                    className={`ml-1 transition-transform duration-300 ${
                                      dropdowns[`${index}-${idx}-${subIdx}`]
                                        ? "rotate-180"
                                        : ""
                                    }`}
                                  />
                                </button>
                              ) : (
                                <a
                                  href={subItem.link}
                                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:underline hover:underline-offset-4 hover:decoration-red-600"
                                >
                                  {subItem.label}
                                </a>
                              )}
                              {dropdowns[`${index}-${idx}-${subIdx}`] &&
                                subItem.furtherSubItems && (
                                  <div className="absolute left-full top-0 mt-1 w-72 bg-white shadow-lg rounded z-10">
                                    {subItem.furtherSubItems.map(
                                      (furtherSubItem, furtherSubIdx) => (
                                        <a
                                          key={furtherSubIdx}
                                          href={furtherSubItem.link}
                                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:underline hover:underline-offset-4 hover:decoration-red-600"
                                        >
                                          {furtherSubItem.label}
                                        </a>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact">
            <a className="mx-6 text-gray-800 hover:text-red-600 hover:underline hover:underline-offset-2">
              Contact
            </a>
          </Link>
        </nav>

        {/* Mobile Sidebar Navigation */}
        {sidebarOpen && (
          <nav className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-20 p-4 md:hidden">
            <div className="flex justify-between items-center mb-4">
              <a href="/" className="flex items-center">
                <img src={logo} alt="Logo" className="w-16 h-20 rounded-full" />
                <span className="ml-4 text-3xl font-bold text-gray-900">
                  fidelity
                </span>
              </a>
              <button
                className="text-gray-800 hover:text-red-600 focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Close menu"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col bg-red-600 h-full p-2 rounded-lg">
              {dropdownLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <button
                    className="flex items-center text-white hover:text-gray-200 focus:outline-none w-full text-left py-2 px-4 rounded-lg hover:bg-red-700"
                    onClick={() => handleDropdownToggle(index)}
                    aria-haspopup="true"
                    aria-expanded={dropdowns[index]}
                  >
                    {link.label}
                    <FaChevronDown
                      className={`ml-2 transition-transform duration-300 ${
                        dropdowns[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {dropdowns[index] && (
                    <ul className="mt-2 pl-4 bg-red-700 rounded-lg">
                      {link.items.map((item, idx) => (
                        <li key={idx} className="relative mb-2">
                          {item.subItems ? (
                            <button
                              className="px-4 py-2 text-gray-100 hover:bg-red-800 flex items-center w-full text-left rounded-lg hover:underline"
                              onClick={() =>
                                handleSubDropdownToggle(index, idx)
                              }
                              aria-haspopup="true"
                              aria-expanded={dropdowns[`${index}-${idx}`]}
                            >
                              {item.label}
                              <FaChevronDown
                                className={`ml-2 transition-transform duration-300 ${
                                  dropdowns[`${index}-${idx}`]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          ) : (
                            <a
                              href={item.link}
                              className="block px-4 py-2 text-gray-100 hover:bg-red-800 rounded-lg hover:underline"
                            >
                              {item.label}
                            </a>
                          )}
                          {dropdowns[`${index}-${idx}`] && item.subItems && (
                            <ul className="mt-2 pl-4 bg-red-800 rounded-lg">
                              {item.subItems.map((subItem, subIdx) => (
                                <li key={subIdx} className="relative mb-2">
                                  {subItem.furtherSubItems ? (
                                    <button
                                      className="px-4 py-2 text-gray-200 hover:bg-red-900 flex items-center w-full text-left rounded-lg hover:underline"
                                      onClick={() =>
                                        handleFurtherSubDropdownToggle(
                                          index,
                                          idx,
                                          subIdx
                                        )
                                      }
                                      aria-haspopup="true"
                                      aria-expanded={
                                        dropdowns[`${index}-${idx}-${subIdx}`]
                                      }
                                    >
                                      {subItem.label}
                                      <FaChevronDown
                                        className={`ml-2 transition-transform duration-300 ${
                                          dropdowns[`${index}-${idx}-${subIdx}`]
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>
                                  ) : (
                                    <a
                                      href={subItem.link}
                                      className="block px-4 py-2 text-gray-200 hover:bg-red-900 rounded-lg hover:underline"
                                    >
                                      {subItem.label}
                                    </a>
                                  )}
                                  {dropdowns[`${index}-${idx}-${subIdx}`] &&
                                    subItem.furtherSubItems && (
                                      <ul className="mt-2 pl-4 bg-red-900 rounded-lg">
                                        {subItem.furtherSubItems.map(
                                          (furtherSubItem, furtherSubIdx) => (
                                            <li key={furtherSubIdx}>
                                              <a
                                                href={furtherSubItem.link}
                                                className="block px-4 py-2 text-gray-200 hover:bg-red-900 rounded-lg hover:underline"
                                              >
                                                {furtherSubItem.label}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <Link to="/contact">
                <a className="block ml-4 text-white hover:text-gray-800">
                  Contact
                </a>
              </Link>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
