import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";


export const Navbar = () => {
  

  var link;
  var linkmobile;

  const location = useLocation();

  const hideHeader =
    location.pathname === "/reports" || location.pathname === "/wallet";

  if (hideHeader) {
    return null;
  }


    link = (
      <Link
        to = "/incupad"
        className="btn btn-outline-primary text-white fw-500"
      >
        IncuPad
      </Link>
    );
    linkmobile = (
      <Link
        to = "/incupad"
        className="btn btn-sm btn-outline-primary text-white fw-500"
      >
        <small>
          {" "}
          <small>Incupad</small>{" "}
        </small>
      </Link>
    );
  

  return (
    <>
    
      <section
        id="navbar"
        className="position-sticky fixed-top bg-secondary py-3"
      >
        <Container fluid="xxl" className="position-relative">
          <div className="bg-testing-1" />
          <div className="d-flex align-items-center z-10">
            <div className="d-flex align-items-end justify-content-center mb-2">
              <Link to="/">
                <img className="logo-img" src="/assets/logo.svg" alt="Logo" />
              </Link>
            </div>
            <div className="ms-auto d-none d-md-flex align-items-center">
              <ul className="nav">
              
              <li className="nav-item pe-lg-4">
                <a href="https://docs.bscbay.com/" target="_blank"  className="nav-link">
                    Documentation
                </a>  
              </li>

                <li className="nav-item pe-lg-4">
                  <Link to="/information" className="nav-link">
                    Services
                  </Link>
                </li>
                {/* <li className="nav-item pe-lg-4">
                  <Link to="/incupad" className="nav-link">
                    Projects
                  </Link>
                </li>
                <li className="nav-item pe-lg-4">
                  <a href="#investment" className="nav-link">
                    Investment
                  </a>
                </li>
                <li className="nav-item pe-lg-4">
                  <Link className="nav-link">About us</Link>
                </li> */}
                <li className="nav-item">{link}</li>
              </ul>
            </div>
            {/* Mobile button */}
            <div className="ms-auto d-flex d-md-none align-items-center">
              {linkmobile}
            </div>
            {/* Mobile button */}
          </div>
        </Container>
      </section>
      {/* Mobile Navbar */}
      <section className="bg-secondary py-2 fixed-bottom d-block d-md-none">
        <div>
          <ul className="nav justify-content-around">
           
            <li className="nav-item pe-lg-4">
                <a href="https://docs.bscbay.com/" target="_blank"  className="nav-link">
                  <small>Documentation</small>  
                </a>  
            </li>

            <li className="nav-item pe-lg-4">
              <Link to="/information" className="nav-link">
                <small>Services</small>
              </Link>
            </li>
            {/* <li className="nav-item pe-lg-4">
              <Link to="/projects" className="nav-link">
                <small>Projects</small>
              </Link>
            </li>

            <li className="nav-item pe-lg-4">
              <a href="#investment" className="nav-link">
                <small> Investment</small>
              </a>
            </li>
            <li className="nav-item pe-lg-4">
              <Link className="nav-link">
                <small> About us</small>
              </Link>
            </li> */}
          </ul>
        </div>
      </section>
      {/* Mobile Navbar */}
    </>
  );
};
