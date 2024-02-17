import React from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img
            src={logo}
            width="118"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
            <li className="nav-item px-2">
              <a className="nav-link" aria-current="page" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#departments">
                Connect
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#findUs">
                Counselling
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#findUs">
                vaccine awareness
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#findUs">
                blogs and papers
              </a>
            </li>
          </ul>
          <a
            className="btn btn-sm btn-outline-primary rounded-pill order-1 order-lg-0 ms-lg-4"
            href="#!"
          >
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
