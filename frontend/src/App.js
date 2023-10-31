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
   // state for controlling the visibility of the about section
   const [showAbout, setShowAbout] = useState(false);

   const handleScrollDown = () => {
    setShowAbout(true);
  };

  return (
    <div className="App">
      {showAbout && <Header/>}
      {showSplash ? (
      <SplashScreen onFinished={() => setShowSplash(false)} />
    ) : (
        <Hero onScrollDown={handleScrollDown}/>
    )}
      {showAbout && <About />}
      {showAbout && <Projects/>}
      {showAbout && <Testimonials/>}
      {showAbout && <ContactUs/>}
      {showAbout && <Footer/>}
    </div>
  );
}

export default App;

