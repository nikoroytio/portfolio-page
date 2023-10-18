import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SplashScreen from "./components/SplashScreen"
import Hero from "./components/Hero";
import About from "./components/About"


function App() {

   const [showSplash, setShowSplash] = useState(true);
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

