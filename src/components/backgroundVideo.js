import React from 'react';
import './BackgroundVideo.css';

function BackgroundVideo() {
  return (
    <div className="video-container">
      <video autoPlay="autoplay" muted className="video">
        <source src="src\assets\video\oma-kuva-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;

