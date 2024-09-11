import React, { useState, useEffect } from "react";
import pikachu from "../assets/pikachu.png";
import "../App.css";

const GRID_SIZE = 10;

const Pikachu = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState("right");
  const [isJumping, setIsJumping] = useState(false);

  const movePikachu = (key) => {
    setPosition((prevPosition) => {
      let { x, y } = prevPosition;

      switch (key) {
        case "ArrowUp":
          y = Math.max(y - 1, 0);
          break;
        case "ArrowDown":
          y = Math.min(y + 1, GRID_SIZE - 1);
          break;
        case "ArrowLeft":
          x = Math.max(x - 1, 0);
          setDirection("left");
          break;
        case "ArrowRight":
          x = Math.min(x + 1, GRID_SIZE - 1);
          setDirection("right");
          break;
        default:
          break;
      }

      return { x, y };
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === " ") {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 300);
    } else {
      movePikachu(event.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const style = {
    position: "absolute",
    left: `${position.x * 50}px`,
    top: `${position.y * 50}px`,
    width: "50px",
    height: "50px",
    transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
  };

  return (
    <img
      src={pikachu}
      alt="Pikachu"
      className={isJumping ? "jumping" : ""}
      style={style}
    />
  );
};

export default Pikachu;
