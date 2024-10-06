import React, { useState } from "react";
import "./EightBall.css"; // For styling the ball

const EightBall = ({ answers }) => {
  // State for current message and background color
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  // Function to handle the ball click
  const handleClick = () => {
    // Choose a random answer from the array
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    // Set the message and color to the chosen answer
    setMessage(randomAnswer.msg);
    setColor(randomAnswer.color);
  };

  return (
    <div
      className="eightball"
      onClick={handleClick}
      style={{ backgroundColor: color }}
    >
      <p className="eightball-message">{message}</p>
    </div>
  );
};

export default EightBall;
