import React from 'react'
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
      <Portfolio />
      <Contact />

    </div>
  )
}

export default App;