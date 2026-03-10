import { useState } from 'react';
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tours from './components/Tours';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
    </React.Fragment>  
  );
}

export default App
