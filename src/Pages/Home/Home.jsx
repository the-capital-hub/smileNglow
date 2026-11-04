import React from "react";
import { motion } from "framer-motion";

import Hero from "../../components/HomeCom/Hero/Hero";
import TrustSection from "../../components/HomeCom/TrustSection/TrustSection";
import DentalServices from "../../components/HomeCom/DentalServices/DentalServices";
import AboutUs from "../../components/HomeCom/AboutSection/AboutUs";
import PatientTestimonials from "../../components/HomeCom/TestimonialsSection/PatientTestimonials";
import BranchesSection from "../../components/HomeCom/BranchesSection/BranchesSection";
import AppointmentCTA from "../../components/HomeCom/AppointmentCTA/AppointmentCTA";

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AnimatedSection = ({ children }) => (
  <motion.div
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <>
      <Hero />

      <AnimatedSection>
        <TrustSection />
      </AnimatedSection>

      <AnimatedSection>
        <DentalServices />
      </AnimatedSection>

      <AnimatedSection>
        <AboutUs />
      </AnimatedSection>

      <AnimatedSection>
        <PatientTestimonials />
      </AnimatedSection>

      <AnimatedSection>
        <BranchesSection />
      </AnimatedSection>

      <AnimatedSection>
        <AppointmentCTA />
      </AnimatedSection>
    </>
  );
};

export default Home;