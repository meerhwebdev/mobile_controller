import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import ControlButtons from "./ControlButtons";

function Game({ socket }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    socket.on("move", (direction) => {
      const newPosition = { ...position };
      if (direction === "up") {
        newPosition.y -= 10;
      } else if (direction === "down") {
        newPosition.y += 10;
      } else if (direction === "left") {
        newPosition.x -= 10;
      } else if (direction === "right") {
        newPosition.x += 10;
      }
      setPosition(newPosition);
    });
  }, [position, socket]);

  const handleMove = (direction) => {
    console.log(`Move ${direction}`);
    socket.emit("move", direction);
  };

  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: "#191825",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            width: "50px",
            height: "50px",
            backgroundColor: "#865DFF",
            boxShadow: "2px 1px 5px #865DFF",
          }}
        />

        <ControlButtons handleMove={handleMove} />
      </div>
    </>
  );
}

export default Game;
