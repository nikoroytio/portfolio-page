import React from 'react';

const CircularProgressBar = ({ value }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="grey"
        strokeWidth="4"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="blue"
        strokeWidth="4"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
};

export default CircularProgressBar;