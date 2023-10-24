import React, { useState } from 'react';
import './App.css';
import SplashScreen from "./components/SplashScreen"
import Hero from "./sections/Hero";
import About from "./sections/About"


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

