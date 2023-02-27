import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Play",
    route: "/game",
  },
];

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <a className="navbar-brand">Super Game</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink links={routes} />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
