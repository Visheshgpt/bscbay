import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { poolData } from "../../../data";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";

import Web3 from "web3";
import BSCBAYICOabi from "../../../shared/BSCBAYICO.json";

const IncupadFeaturedSection = () => {
  const upcomingData = [
    { title: "Apply as a project", img: "./assets/is-1.svg" },
    { title: "Buy on Pancakeswap", img: "./assets/is-2.svg" },
    // { title: "Buy on Kucoin", img: "./assets/is-3.svg" },
    // { title: "Buy on Gate.io", img: "./assets/is-4.svg" },
  ];

  const [receivedBNB, setreceivedBNB] = useState(0);
  const [Minallocation, setMinallocation] = useState(0);
  const [Maxallocation, setMaxallocation] = useState(0);
  const [StartTime, setStartTime] = useState(0);
  const [EndTime, setEndTime] = useState(0);
  const [MaxDistributedTokens, setMaxDistributedTokens] = useState(0);
  const [allocatedToken, setallocatedToken] = useState(0);

  function web3apis() {
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYICOabi;
    var contractAddress = "0xB9D447A70f3B7C0115040760832B960cb29f25b4";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // get BNB balance of ICO
    web3.eth
      .getBalance("0xB9D447A70f3B7C0115040760832B960cb29f25b4")
      .then((balance) => {
        // console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setreceivedBNB(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get MAX DISTRIBUTED TOKENS
    contract.methods
      .maxDistributedTokenAmount()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMaxDistributedTokens(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get DISTRIBUTED TOKENS
    contract.methods
      .tokensForDistribution()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setallocatedToken(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // user MIN allocation
    contract.methods
      .minInvestment()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMinallocation(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // user MAX allocation
    contract.methods
      .maxInvestment()
      .call()
      .then((amount) => {
        //  console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMaxallocation(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // ICO start Time
    contract.methods
      .startTimestamp()
      .call()
      .then((time) => {
        // console.log(time);
        setStartTime(time);
      });

    // ICO End Time
    contract.methods
      .finishTimestamp()
      .call()
      .then((time) => {
        setEndTime(time);
      });
  }

  useEffect(() => {
    web3apis();
  });

  const ICOcompletePercentage = (
    (allocatedToken / MaxDistributedTokens) *
    100
  ).toFixed(2);

  const featuredPoolData = poolData.filter((item) => item.featured === true);

  const options = {
    dots: false,
    loop: false,
    autoplay: true,
    margin: 20,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 3,
      },
      1900: {
        items: 3,
      },
    },
  };

  return (
    <Container as="section" fluid="xxl" className="incupad-upcoming-section">
      <Container>
        <Row className="incupad-card">
          {upcomingData.map((item, index) => (
            <Col
              xs={6}
              lg={4}
              key={index}
              className="d-flex justify-content-center"
            >
              <div className="incupad-upcoming-card">
                <a
                  href="https://my.forms.app/crptoprojects/bscbaylaunch"
                  target="_blank"
                >
                  {" "}
                  <img src={item.img} alt={item.title} />{" "}
                </a>
                <span>{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} className="p-5 mt-5">
            <h2 className="text-white text-center">Featured Pools</h2>
          </Col>
          <OwlCarousel options={options}>
            {featuredPoolData.map((item) => (
              <Link to={`/launchpad/${item.title.replaceAll(" ", "-")}`}>
                <div className="incupad-upcoming-pool-card">
                  <span className="card-tag">{item.tag}</span>
                  <img src={item.img} alt={item.title} />
                  <span className="card-title">{item.title}</span>
                  <p className="card-description">{item.description}</p>
                  <div className="card-time">
                    <img src="./assets/is-time-1.svg" alt="time icon" />
                    <span>{item.time}</span>
                  </div>
                  <span className="card-time-status">remaining</span>
                  <div className="incupad-upcoming-pool-card-lower">
                    <ProgressBar
                      now={ICOcompletePercentage}
                      className="progress-bar-sectionn"
                      label={`${Math.round(ICOcompletePercentage)}%`}
                    />

                    <div className="min-allocation">
                      <span className="lower-card-name">Min Allocation</span>
                      {/* <span>{Minallocation}</span> */}
                      <span>TBA</span>
                    </div>
                    <div className="min-allocation">
                      <span className="lower-card-name">Max Allocation</span>
                      {/* <span>{Maxallocation}</span> */}
                       <span>TBA</span>
                    </div>
                    <div className="min-allocation">
                      <span className="lower-card-name">Access Type</span>
                      <span>{item.accessType}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadFeaturedSection;
