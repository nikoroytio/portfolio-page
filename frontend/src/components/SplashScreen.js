// Component for displaying the splash screen with a video.
import React, { useEffect, useState } from 'react';
import "./SplashScreen.css";
import SplashScreenVideo from '../assets/videos/splash-screen.mp4';

function SplashScreen({ onFinished }) {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    // Set overflow to hidden when the splash screen mounts
    document.body.style.overflow = "hidden";

    if (videoEnded) {
      onFinished();
    }

    // Reset overflow when the splash screen unmounts
    return () => {
      document.body.style.overflow = "auto"; // or "visible"
    };
  }, [videoEnded, onFinished]);

  return (
    <div className="splash-screen">
      <video
        width="100%"
        height="100%"
        autoPlay
        muted
        playsInline  // This attribute is necessary for some versions of Safari
        onEnded={() => setVideoEnded(true)}
      >
        <source src={SplashScreenVideo} type="video/mp4" />
         {/* A fallback message for browsers that do not support the video tag. */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SplashScreen;