import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import SplashScreen from "./components/SplashScreen"
import Hero from "./components/Hero";


function App() {

  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinished={() => setShowSplash(false)} />
      ) : (
        <Hero />
      )}
    </div>
  );
}

export default App;

