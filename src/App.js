import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SplashScreen from "./components/SplashScreen"
import Hero from "./components/Hero";
import About from "./components/About"


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
    </div>
  );
}

export default App;

