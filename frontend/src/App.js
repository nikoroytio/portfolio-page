import React, { useState } from 'react';
import './App.css';
import SplashScreen from "./components/SplashScreen"
import Header from './sections/Header';
import Hero from "./sections/Hero";
import About from "./sections/About"
import Projects from "./sections/Projects"
import Testimonials from './sections/Testimonials';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';


function App() {

  // state for controlling the visibility of the splash screen 
   const [showSplash, setShowSplash] = useState(true);
   // state for controlling the visibility of the sections
   const [showSection, setShowSection] = useState(false);

   const handleScrollDown = () => {
    setShowSection(true);
  };

  return (
    <div className="App">
      {showSection && <Header/>}
      {showSplash ? (
      <SplashScreen onFinished={() => setShowSplash(false)} />
    ) : (
        <Hero onScrollDown={handleScrollDown}/>
    )}
      {showSection && <About />}
      {showSection && <Projects/>}
      {showSection && <Testimonials/>}
      {showSection && <ContactUs/>}
      {showSection && <Footer/>}
    </div>
  );
}

export default App;

