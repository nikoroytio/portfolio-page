import React, { useState } from 'react';
import './App.css';
import SplashScreen from "./components/SplashScreen"
import Hero from "./sections/Hero";
import About from "./sections/About"
import Projects from "./sections/Projects"
import Testimonials from './sections/Testimonials';
import ContactUs from './sections/ContactUs';


function App() {

  // state for controlling the visibility of the splash screen 
   const [showSplash, setShowSplash] = useState(true);
   // state for controlling the visibility of the about section
   const [showAbout, setShowAbout] = useState(false);

   const handleScrollDown = () => {
    setShowAbout(true);
  };

  return (
    <div className="App">
      {showSplash ? (
      <SplashScreen onFinished={() => setShowSplash(false)} />
    ) : (
        <Hero onScrollDown={handleScrollDown}/>
    )}
      {showAbout && <About />}
      {showAbout && <Projects/>}
      {showAbout && <Testimonials/>}
      {showAbout && <ContactUs/>}
    </div>
  );
}

export default App;

