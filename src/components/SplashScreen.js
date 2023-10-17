import React, { useEffect, useState } from 'react';
import "./SplashScreen.css";
import SplashScreenVideo from '../assets/videos/splash-screen.mp4';

function SplashScreen({ onFinished }) {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    if (videoEnded) {
      onFinished();
    }
  }, [videoEnded, onFinished]);

  return (
    <div className="splash-screen">
      <video 
        width="100%" 
        height="100%" 
        autoPlay
        muted
        onEnded={() => setVideoEnded(true)}
      >
        <source src={SplashScreenVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SplashScreen;