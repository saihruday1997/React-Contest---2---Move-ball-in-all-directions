import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  const reset = () => {
    setRenderBall(false);
  };

  const start = () => {
    setRenderBall(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 39) {
      console.log("39");
      let val = x + 5;
      setX(val, () => {
        setBallPosition({
          left: toString(val) + "px",
          right: ballPosition.right
        });
      });
    } else if (event.key === 40) {
      console.log("40");
      setY(y - 5);
    } else if (event.key === 38) {
      console.log("38");
      setY(y + 5);
    } else if (event.key === 37) {
      console.log("37");
      setX(x - 5);
    } else {
      return;
    }
  };

  const renderChoice = () => {
    if (renderBall === false) {
      return (
        <button onClick={start} className="start">
          Click For One Ball
        </button>
      );
    } else {
      return <div className="ball" style={ballPosition}></div>;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
