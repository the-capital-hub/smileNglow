import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AIFloatingButton from "./components/AIFloatingButton/AIFloatingButton";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton/WhatsAppFloatingButton";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Doctors from "./Pages/Doctors/Doctors";
import Contact from "./Pages/Contact/Contact";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import Gallery from "./Pages/Gallery/Gallery";
import TermsAndConditions from "./Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <AIFloatingButton />
      <WhatsAppFloatingButton />
    </>
  );
};

export default App;
