import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home/home';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import ReportFault from '../pages/Support/reportFault';
import LocationAddress from '../pages/Support/locationAddress';
import CloudFault from '../pages/Support/cloudFault';
import Contact from "../components/Contact/contact"
import RemoteSupport from "../pages/Support/RCD";
import TermsConditions from "../pages/Support/TermsConditions";
import AnvilLogin from "../pages/Support/AnvilLogin";
import Leadership from "../pages/Company/Leadership"
import Careers from "../pages/Company/Career"
import CaseStudies from "../pages/Company/CaseStudies" 
import About from '../pages/Company/about';
import  InsightNews from '../pages/Company/insightNews';
import Dealer from "../pages/PartnerPrograms/Dealer";
import Connectivity from "../pages/PartnerPrograms/connectivity"
import Selling from '../pages/PartnerPrograms/selling';
import Referral from "../pages/PartnerPrograms/Referral"
import Wholesale from "../pages/PartnerPrograms/Wholesale"
import CloudServices from "../pages/Services/cloudServices";
import BussinessMobile from "../pages/Services/businessMobile";
import BussinessGas from "../pages/Services/businessGas";
import BussinessElectricity from "../pages/Services/businessElectricity";
import EvCharging from "../pages/Services/EvCharging";
import GreenEnergy from "../pages/Services/greenEnergy";
import Merchant from "../pages/Services/Merchant"
import MobileCard from "../pages/Services/MobileCard"
import Virtual from "../pages/Services/Virtual"
import PayLink from "../pages/Services/PayLink"
import CallManager from "../pages/Services/callManagr";
import NonGeopraphic from "../pages/Services/nonGeographic";
import ContactSolution from "../pages/Services/contactSolution";
import IoT from "../pages/Services/IoT";
import IoTPack from "../pages/Services/IoTPack";
import M2M from "../pages/Services/M2M";
import Boardland from "../pages/Services/BoardLand";
import Primses from "../pages/Services/Primses";
import LineFibre from "../pages/Services/lineFibre";
import Quote from "../pages/Quote/Quote"

function AppRoutes() {
  const location = useLocation();

  // Determine if the Navbar and Footer should be displayed
  const showNavbarFooter = !['/support/anvil-login', '/support/rdc-remote-support'].includes(location.pathname);

  return (
    <>
      {showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support/report-fault" element={<ReportFault />} />
         <Route path="/support/emergency-location" element={<LocationAddress />} />
        <Route path="/support/cloud-fault" element={<CloudFault/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/support/terms-conditions" element={<TermsConditions />} />
        <Route path="/support/anvil-login" element={<AnvilLogin />} />
        <Route path="/support/rdc-remote-support" element={<RemoteSupport />} />
        <Route path="/company/leadership-team" element={<Leadership />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/case-studies" element={<CaseStudies />} />
        <Route path="/company/about" element={<About />}/>
        <Route path="/company/insights-news" element={< InsightNews/>}/>
        <Route path="/partners/dealerprogramme" element={< Dealer/>}/>
        <Route path="/partners/iot-connectivity-solutions" element={< Connectivity/>}/>
        <Route path="/partners/selling-payments" element={<Selling />} />
        <Route path="/partners/referral-programs" element={<Referral />} />
        <Route path="/partners/wholesale-programs" element={<Wholesale />} />
        <Route path="/cloud-hosting-security" element={<CloudServices />} />
        <Route path="/services/business-mobile" element={<BussinessMobile />} />
        <Route path="/energy/business-gas" element={<BussinessGas />} />
        <Route path="/energy/business-electricity" element={<BussinessElectricity />}/>
        <Route path="/energy/ev-charge-points" element={<EvCharging />} />
        <Route path="/energy/green-energy" element={<GreenEnergy />} />
        <Route path="/payments/merchant-solutions" element={<Merchant />} />
        <Route path="/payments/mobile-card-terminals" element={<MobileCard />} />
        <Route path="/payments/virtual-terminals" element={<Virtual />} />
        <Route path="/payments/pay-by-link" element={<PayLink />} />
        <Route path="/voice/sip-trunk-call-manager" element={<CallManager />} />
        <Route path="/voice/non-geographic-numbers" element={<NonGeopraphic />}/>
        <Route path="/voice/contact-center-solutions" element={<ContactSolution />}/>
        <Route path="/iot/connectivity-solutions" element={<IoT />} />
        <Route path="/iot/starter-pack" element={<IoTPack />} />
        <Route path="/iot/vm2m" element={<M2M />} />
        <Route path="/connectivity/sogea-broadband" element={<Boardland/>}/>
        <Route path="/connectivity/fttp-broadband" element={<Primses/>}/>
        <Route path="/connectivity/dedicated-leased-line" element={<LineFibre/>}/>
        <Route path="/quote" element={<Quote/>}/>


      </Routes>
      {showNavbarFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}