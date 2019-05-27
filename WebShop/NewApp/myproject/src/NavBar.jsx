import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="link">
        Coop
      </a>
      {/* <a href="#" className="btn btn-light">
        <span className="badge badge-pill badge-secondary">
          {props.totalProduktList}
        </span>
        Cart
      </a> */}
      <button className="btn btn-light" onClick={props.onCart}>
        <span className="badge badge-pill badge-secondary">
          {props.totalProduktList}
        </span>
        Cart
      </button>
    </nav>
  );
};

export default NavBar;
