import React from 'react';

// This component displays a circular progress bar with a given value
const CircularProgressBar = ({ value }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  // Calculate offset based on value to create progress effect
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="rgb(20, 20, 20)"
        strokeWidth="4"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#f9004d"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}s
      />
       <text x="50%" y="50%" dy=".3em" textAnchor="middle" fontSize="20px" fill="white">
        {`${value}%`}
      </text>
    </svg>
  );
};

export default CircularProgressBar;