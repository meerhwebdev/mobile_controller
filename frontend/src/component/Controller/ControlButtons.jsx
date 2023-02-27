import React from "react";

function ControlButtons({ handleMove }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "10rem",
          width: "10rem",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: "0px",
            left: "3rem",
          }}
          className="btn btn-light"
          onClick={() => handleMove("up")}
        >
          <i
            className="fa-solid fa-arrow-left"
            style={{ transform: "rotate(90deg)" }}
          ></i>
        </button>
        <br />
        {/* left button */}
        <button
          style={{
            position: "absolute",
            left: "0px",
            top: "3rem",
          }}
          className="btn btn-light"
          onClick={() => handleMove("left")}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        {/* right button */}
        <button
          style={{
            position: "absolute",
            right: "1.2rem",
            top: "3rem",
          }}
          className="btn btn-light"
          onClick={() => handleMove("right")}
        >
          <i
            className="fa-solid fa-arrow-left"
            style={{ transform: "rotate(180deg)" }}
          ></i>
        </button>
        <br />
        {/* down button */}
        <button
          style={{
            position: "absolute",
            bottom: "1.5rem",
            left: "3rem",
          }}
          className="btn btn-light"
          onClick={() => handleMove("down")}
        >
          <i
            className="fa-solid fa-arrow-left"
            style={{ transform: "rotate(270deg)" }}
          ></i>
        </button>
      </div>
    </>
  );
}

export default ControlButtons;
