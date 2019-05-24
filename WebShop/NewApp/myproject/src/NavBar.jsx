import React from "react";

const NavBar = ({ totalProduktList }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Coop{" "}
        <span className="badge badge-pill badge-secondary">
          {totalProduktList}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
