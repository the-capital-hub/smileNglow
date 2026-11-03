import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AIFloatingButton from './components/AIFloatingButton/AIFloatingButton'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton/WhatsAppFloatingButton'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <>
    

    <Navbar/>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
    <Footer/>
    <AIFloatingButton/>
    <WhatsAppFloatingButton/>
    </>
  )
}

export default App