import React from 'react'
import Hero from '../../components/HomeCom/Hero/Hero'
import TrustSection from '../../components/HomeCom/TrustSection/TrustSection'
import DentalServices from '../../components/HomeCom/DentalServices/DentalServices'
import AboutUs from '../../components/HomeCom/AboutSection/AboutUs'
import PatientTestimonials from '../../components/HomeCom/TestimonialsSection/PatientTestimonials'
import BranchesSection from '../../components/HomeCom/BranchesSection/BranchesSection'
import AppointmentCTA from '../../components/HomeCom/AppointmentCTA/AppointmentCTA'

const Home = () => {
  return (
    <>
    <Hero/>
    <TrustSection/>
    
    <DentalServices/>
    <AboutUs/>
    <PatientTestimonials/>
    <BranchesSection/>
    <AppointmentCTA/>
    </>
  )
}

export default Home