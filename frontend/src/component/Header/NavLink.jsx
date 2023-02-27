import React from "react";
import { Link, matchRoutes, useLocation, useNavigate } from "react-router-dom";

const useCurrentPath = () => {
  const location = useLocation();
  return location.pathname;
};

function NavLink({ links }) {
  const navigate = useNavigate();
  const currentPath = useCurrentPath();

  return links.map((link, key) =>
    link.route === currentPath ? (
      <Link key={key} to={link.route} style={{ textDecoration: "none" }}>
        <li className="nav-item active">
          <a className="nav-link">
            {link.name} <span className="sr-only">(current)</span>
          </a>
        </li>
      </Link>
    ) : (
      <Link key={key} to={link.route} style={{ textDecoration: "none" }}>
        <li className="nav-item">
          <a className="nav-link">{link.name}</a>
        </li>
      </Link>
    )
  );
}

export default NavLink;
