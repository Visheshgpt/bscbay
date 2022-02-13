import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const IncupadNavBar = () => {
  // var link;
  // var linkmobile;
  var linklogout;
  var linkmobilelogout;

  let address = window.sessionStorage.getItem("walletAddress");

  const location = useLocation();
 
  

  
 if (address) {
  linklogout = (
    <Link onClick={logoutUser} className="btn btn-outline-primary text-white fw-500">
     {address.slice(0,6)}...{address.slice(-4)} | Logout
    </Link>
  );
  linkmobilelogout = (
    <Link onClick={logoutUser} className="btn btn-sm btn-outline-primary text-white fw-500">
      <small>
        {" "} 
        {address.slice(0,6)}...{address.slice(-4)} | Logout
      </small>
    </Link>
  );
 }
 else {
  linklogout = (
    <Link to="/" className="btn btn-outline-primary text-white fw-500">
    Home
    </Link>
  );
  linkmobilelogout = (
    <Link to="/" className="btn btn-sm btn-outline-primary text-white fw-500">
      <small>
        {" "}
        <small>Home</small>{" "}
      </small>
    </Link>
  );
 }



 async function logoutUser() {
  if (window.sessionStorage.getItem("walletName") == "walletconnect") {
    //   ---------------working code ------------------
    // const provider = new WalletConnectProvider({
    //   rpc: {
    //     1: "https://bsc-dataseed.binance.org/",
    //     56: "https://bsc-dataseed.binance.org/",
    //     97: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //   },
    // });

    // await provider.disconnect();
    // / --------------------------------------------
  }

  localStorage.removeItem("provider");
  window.sessionStorage.removeItem("walletAddress");
  window.sessionStorage.removeItem("walletName");
  window.location.reload();
}


 



  // link = (
  //   <Link to="/" className="btn btn-outline-primary text-white fw-500">
  //     Home
  //   </Link>
  // );
  // linkmobile = (
  //   <Link to="/" className="btn btn-sm btn-outline-primary text-white fw-500">
  //     <small>
  //       {" "}
  //       <small>Home</small>{" "}
  //     </small>
  //   </Link>
  // );

  return (
    <>
      <section
        id="navbar"
        className={`position-fixed fixed-top bg-transparent  py-3 incupad__navbar`}
      >
        <Container
          fluid="xxl"
          className={`position-relative navbar__background`}
        >
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
                  <a
                    href="https://docs.bscbay.com/"
                    target="_blank"
                    className="nav-link"
                  >
                    Documentation
                  </a>
                </li>
                <li className="nav-item pe-lg-4">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
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
                {/* <li className="nav-item">{link}</li> */}
                <li className="nav-item">{linklogout}</li>
              </ul>
            </div>
            {/* Mobile button */}
            <div className="ms-auto d-flex d-md-none align-items-center">
              {linkmobilelogout}
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
              <a
                href="https://docs.bscbay.com/"
                target="_blank"
                className="nav-link"
              >
                <small>Documentation</small>
              </a>
            </li>
            <li className="nav-item pe-lg-4">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>

            <li className="nav-item pe-lg-4">
              <Link className="nav-link">
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
            </li> */}
            {/* <li className="nav-item pe-lg-4">
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

export default IncupadNavBar;
