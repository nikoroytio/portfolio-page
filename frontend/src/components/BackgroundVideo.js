import React from 'react';
import "./BackgroundVideo.css";
import videoSrc from '../assets/videos/oma-kuva.mp4';

// This functional component renders a video that plays automatically in the background of hero section
function BackgroundVideo() {
  return (
    <div className="video-container">
      <video autoPlay="autoplay" muted playsInline className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;

