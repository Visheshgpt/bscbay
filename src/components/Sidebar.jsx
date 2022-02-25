import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Button } from "react-bootstrap";
 
import LaunchStepThree from '../elements/launch-steps/LaunchStepThree';

// import Web3Modal from "web3modal";
// import Cookies from 'universal-cookie';

import Web3 from "web3";
import BSCBAYabi from "../shared/BSCBAYabi.json";

// import contractService from '../../shared/LMcontractservice'
import WalletConnectProvider from "@walletconnect/web3-provider";

import CoinGecko from "coingecko-api";

// icons
import { ReactComponent as BNBIcon } from "../assets/BNBIcon.svg";
import { ReactComponent as Menu } from "../assets/sidebar-icons/menu.svg";
import { ReactComponent as Icon0 } from "../assets/sidebar-icons/icon-0.svg";
import { ReactComponent as Icon1 } from "../assets/sidebar-icons/icon-1.svg";
import { ReactComponent as Icon2 } from "../assets/sidebar-icons/icon-2.svg";
import { ReactComponent as Icon3 } from "../assets/sidebar-icons/icon-3.svg";
import { ReactComponent as Icon4 } from "../assets/sidebar-icons/icon-4.svg";
import { ReactComponent as Icon5 } from "../assets/sidebar-icons/icon-5.svg";

export const Sidebar = () => {
 
  let address = window.sessionStorage.getItem("walletAddress"); 

  const [showConnect, setShowConnect] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onHideHandler = () => {
    setShowConnect(false);
  };

  const [userbalance, setuserbalance] = useState(0);
 

  const [show, setShow] = React.useState(false);
  const linksArr = [
    { link: "/", icon: <Icon0 />, name: "Homepage" },
    { link: "/dashboard", icon: <Icon1 />, name: "Wallet", className: "active" },
    { link: "/dashboard", icon: <Icon2 />, name: "Documentation" },
    { link: "https://bscscan.com/token/0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6", icon: <Icon3 />, name: "Contract" },
    { link: "https://www.dextools.io/app/bsc/pair-explorer/0x30e3a76f435908414d42a92505497b3681f5504a", icon: <Icon4 />, name: "Reports & Charts" },
    // { link: "/dashboard", icon: <Icon5 />, name: "Disclaimer" },
  ];


  function web3apis() {
   
    address =  window.sessionStorage.getItem("walletAddress");

     if(!address) return;
    
    const web3 = new Web3("https://bsc-dataseed.binance.org/");
    var contractABI = BSCBAYabi;
    var contractAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
    var contract = new web3.eth.Contract(contractABI, contractAddress);
     
    // user Balance
      contract.methods
      .balanceOf(address)
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        setuserbalance(Number(web3.utils.fromWei(tokens, "ether")));
      });
  }

  useEffect(() => {
    web3apis();
  });


  async function logoutUser() {
    if (window.sessionStorage.getItem("walletName") == "walletconnect") {
      const provider = new WalletConnectProvider({
        rpc: {
          1: "https://bsc-dataseed.binance.org/",
          56: "https://bsc-dataseed.binance.org/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545",
        },
      });

      await provider.disconnect();
      /// --------------------------------------------
    }

    localStorage.removeItem("provider");
    window.sessionStorage.removeItem("walletAddress");
    window.sessionStorage.removeItem("walletName");
    window.location.assign("/");
  }

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        type="button"
        className="sidebar-btn rounded-circle btn  btn-color"
      >
        <Menu />
      </button>
      <section
        className={`sidebar-width  ${show ? "sidebar-show" : "sidebar-hide"}`}
      >
        {/* Logo */}
        {/* <div className="mb-4">
          <Link to="/">
            <img height={45} src="./assets/logo.png" alt="Logo" />
          </Link>
        </div> */}
        {/* Sidebar */}
        <div className="sidebar-container text-white p-4 text-truncate">
          <div>
            <ul className="nav flex-column">
              {linksArr.map((data) => (
                <li className="nav-item pb-3">
                  <a
                    
                    className={`nav-link ${data.className}`}
                    href={data.link} 
                  >
                    <div className="d-flex">
                      <span className="me-2">{data.icon}</span>
                      <span>{data.name}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <ul className="nav flex-column px-3">
              <li className="nav-item py-3">
                <div>
                  <div className="text-primary heading-secondary-3">
                    Your Balance
                  </div>
                  <div className="title-small fw-normal">
                    BSCB: {userbalance}
                  </div>
                </div>
              </li>
              <li className="nav-item py-3">
                <p className="mb-0 ">
                  <div className="text-light">Your Address</div>
                  <div className="text-truncate">
                    {" "}
                    {address?(address.slice(0, 20) + ". . ."):""}{" "}
                    {/* TBA */}
                  </div>
                </p>
              </li>
            { !address &&  <li className="nav-item py-4 w-100 align-self-baseline">
                  <Button onClick={() => setShowConnect(true)} className='btn btn-primary'>Connect Wallet</Button>   
              </li> }
            </ul>
          { address &&  <div className="mt-5 px-3">
              <Link onClick={logoutUser}>
                <img src="/assets/logout.png" alt="logout" />
              </Link>
            </div> }
          </div>
        </div>
        {/*  */}
        <LaunchStepThree show={showConnect} onHide={onHideHandler} />
        {/* <Row
          className="justify-content-lg-center z-10 pt-4 mx-0"
          style={{ opacity: 0.7 }}
        >
          {socialMediaArr.map((data, i) => (
            <a
              key={i}
              href={data.link}
              target="_blank"
              rel="noreferrer"
              className="mx-2 d-flex justify-content-center icon-hover-3 "
            >
              <img
                className="d-block"
                height={18}
                width={18}
                src={`/assets/icons/b-icon-${i}.svg`}
                alt=".."
              />
            </a>
          ))}
          
          
        </Row> */}
      </section>
    </>
  );
};
