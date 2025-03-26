import { useState } from 'react'

import Navigation from './components/Naviagtion'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/home'
import Contact from './components/Contact.jsx'



function App() {
  

  

  return (
    <div className='w-full h-screen' style={{ 
      backgroundColor: '#0F172A', 
      padding:'0px 20px'

    }}>
      <Navigation/>
      <Home/>
      <Skills/>
      <Projects/>
      <About/>

      
</div>
  )
}

export default App
