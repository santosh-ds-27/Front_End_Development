import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './Website/Common/Header'
import Footer from './Website/Common/Footer'
import Home from './Website/Page/Home'
import About from './Website/Page/About'
import Courses from './Website/Page/Courses'
import Trainers from './Website/Page/Trainers'
import Events from './Website/Page/Events'
import Pricing from './Website/Page/Pricing'
import Contact from './Website/Page/Contact'

function App() {

   useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, [])

  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/events' element={<Events />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
