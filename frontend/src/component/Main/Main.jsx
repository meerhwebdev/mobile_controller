import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Image from "../../Image/bg_image.jpg";

function Main() {
  return (
    <>
      <Header />
      <div
        className="main"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <button className="mx-2 btn btn-light">
            <Link
              to="game"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Play Game
            </Link>
          </button>
          <button className="btn btn-light">
            <Link
              to="controller"
              className="text-dark"
              style={{ textDecoration: "none" }}
            >
              Mobile Control
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
