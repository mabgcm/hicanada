import React from "react";
import { AuthContextProvider } from '../context/AuthContext';
import { Routes, Route } from "react-router-dom";
// reactstrap components

// core components
import IndexNavbar from "../Pages/IndexNavbar";
import IndexHeader from "../Pages/IndexHeader";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import Visa from "Pages/Visa/Visa";
import Health from "Pages/Basics/Health/Health";
import Education from "Pages/Basics/Education/Education";
import Employment from "Pages/Employ/Employment";
import Financial from "Pages/Serv/Financial/Financial";
import Government from "Pages/Serv/Government/Government";
import Housing from "Pages/Basics/Housing/Housing";
import Legal from "Pages/Serv/Legal/Legal";
import Lifestyle from "Pages/Basics/Lifestyle/Lifestyle";
import Transport from "Pages/Basics/Transportation/Transport";
import Footer from "../Pages/Footer";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div>
      <AuthContextProvider>
        <IndexNavbar />
        <Routes>
          <Route path='/' element={<IndexHeader />} />
          <Route path='visa' element={<Visa />} />
          <Route path='health' element={<Health />} />
          <Route path='education' element={<Education />} />
          <Route path='employment' element={<Employment />} />
          <Route path='financial' element={<Financial />} />
          <Route path='government' element={<Government />} />
          <Route path='housing' element={<Housing />} />
          <Route path='legal' element={<Legal />} />
          <Route path='lifestyle' element={<Lifestyle />} />
          <Route path='transport' element={<Transport />} />
        </Routes>

        {/* <div className="main">
          <SectionButtons />
          <SectionNavbars />
          <SectionNavigation />
          <SectionProgress />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavaScript />
          <SectionCarousel />
          <SectionDark />
          <SectionLogin />
          <SectionExamples />
          <SectionDownload />
          <DemoFooter />
        </div> */}
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default Index;
