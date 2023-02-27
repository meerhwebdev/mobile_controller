import React from "react";
import ControlButtons from "./ControlButtons";

function Controller({ socket }) {
  const handleMove = (direction) => {
    console.log(`Move ${direction}`);
    socket.emit("move", direction);
  };

  return (
    <>
      <div
        className="row"
        style={{
          width: "100%",
          height: "100vh",
          color: "white",
          backgroundColor: "#191825",
        }}
      >
        <div className="col-12 col-md-6 controller">
          <ControlButtons handleMove={handleMove} />
        </div>
        <div className="col-12 col-md-6 controller_text">
          <div>
            <h2>Super Game</h2>
            <p>Mobile Controller</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Controller;
