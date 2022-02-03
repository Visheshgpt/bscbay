import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { ReactComponent as Ellipse1 } from "../../../assets/Ellipse-1.svg";
import { ReactComponent as Ellipse2 } from "../../../assets/Ellipse-2.svg";
import { ReactComponent as Arrow } from "../../../assets/next.svg";
import { ReactComponent as Rocket } from "../../../assets/rocket.svg";
import CoinGecko from "coingecko-api";
import Web3 from "web3";
import BSCBAYabi from "../../../shared/BSCBAYabi.json";

const HomeSectionOne = () => {
  var link;

  const [maxTransactionAmount, setmaxTransactionAmount] = useState(0);
  const [TotalbnbinrewardPool, setTotalbnbinrewardPool] = useState(0);
  const [LMbalanceLPpool, setLMbalanceLPpool] = useState(0);
  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [circulatingSupply, setcirculatingSupply] = useState(0);
  const [distributedBnb, setdistributedBnb] = useState(0);
  const [totalreinvested, settotalreinvested] = useState(0);
  const [rewardhardCap, setrewardhardCap] = useState(0);
  const [totalreflectionFees, settotalreflectionFees] = useState(0);
  const [activeColor, setActiveColor] = useState(0);
  const boxArr = [
    // { name: "Max Tx Amount", number: "8210" },
    { name: "BSCB MarketCap", number: "TBA " },
    { name: "Per Million BCBS", number: "TBA" },
    { name: "Liquidity Pool", number: "TBA" },
    // { name: "Reward Pool", number: "$13,231" },
    // { name: "Reward Pool Limit", number: "$13,231" },
    { name: "Total USDT Distributed", number: "TBA" },
    { name: "Total Buyback", number: "TBA" },
    { name: "Total Users", number: "TBA" },
  ];

  const socialMediaArr = [
    { link: "https://twitter.com/bscbayofficial" },
    { link: "https://t.me/bscbayofficial" },
    // { link: "https://google.com" },
    // { link: "https://google.com" },
    { link: "https://www.reddit.com/r/BSCBay/" },
  ];

  function web3apis() {
    // let address = window.sessionStorage.getItem("walletAddress");

    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYabi;
    var contractAddress = "0x8b4202C2026C77e99f84805644bdcE2B9541598c";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    contract.methods
      ._maxTxAmount()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        setmaxTransactionAmount(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get BNB balance of reward POOl
    web3.eth
      .getBalance("0x8b4202C2026C77e99f84805644bdcE2B9541598c")
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setTotalbnbinrewardPool(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get reward Hard CAP limit
    contract.methods
      .rewardHardcap()
      .call()
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setrewardhardCap(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get total BNB distributed
    // total claimed BNb
    contract.methods
      .totalClaimedBNB()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setdistributedBnb(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // total reinvested
    contract.methods
      .totalreinvested()
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        settotalreinvested(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // total  reflection Fees
    contract.methods
      .totalFees()
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        settotalreflectionFees(Number(web3.utils.fromWei(tokens, "ether")));
      });

    //     // get BNB balance of charity Pool
    //     web3.eth.getBalance("0xb6266d43F3E319e884E31075a36fDE8ceAeEf1C8")
    //     .then(balance => {
    //         ////console.log(balance);
    //         var tokens = web3.utils.toBN(balance).toString();
    //         setcharityBnb(web3.utils.fromWei(tokens, 'ether'))

    //     });

    // get TotalBNB in liquidity Pool
    var wrappednBNBABI = [
      {
        constant: true,
        inputs: [{ name: "", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ];
    var wrappedBNBcontractAddress =
      "0xae13d989dac2f0debff460ac112a837c89baa7cd";

    var wrappedBNBcontract = new web3.eth.Contract(
      wrappednBNBABI,
      wrappedBNBcontractAddress
    );

    wrappedBNBcontract.methods
      .balanceOf("0xDd25d5c356Ff41feB5846c6E2960995925ED7938")
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setLPbnb(Number(web3.utils.fromWei(tokens, "ether")));
        //console.log("lpbnb",LPbnb);
      });

    // get token in LP
    contract.methods
      .balanceOf("0xDd25d5c356Ff41feB5846c6E2960995925ED7938")
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        setLMbalanceLPpool(Number(web3.utils.fromWei(tokens, "ether")));
      });

    //  circulating Supply LM token
    contract.methods
      .balanceOf("0x000000000000000000000000000000000000dEaD")
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, "Gwei");
        var csupply =
          Number(1000000) - Number(web3.utils.fromWei(tokens, "ether"));
        setcirculatingSupply(Number(csupply));
      });

    // fetch latest 1 BNB price
    const CoinGeckoClient = new CoinGecko();
    // fetch price of 1 BNB
    CoinGeckoClient.simple
      .price({
        ids: ["binancecoin"],
        vs_currencies: ["usd"],
      })
      .then((data) => {
        setoneBNBprice(Number(data.data.binancecoin.usd));
      });

    //   console.log("lpbnb",LPbnb);
    //   console.log("Lm",LMbalanceLPpool);

    //   var pricep = ((( Number(1000000) * Number(LPbnb) ) / Number(LMbalanceLPpool)))/Number(1000000);
    //   setonebnb(Number(1/pricep));
  }

  // useEffect(() => {
  //   web3apis();
  // });

  // useEffect(() => {
  //   colorFunction();
  // });

  // const colorFunction = () => {
  //   // if (activeColor === 7) setActiveColor = -1;
  //   // setTimeout(() => {
  //   //   setActiveColor(parseInt(activeColor) + 1);
  //   //   colorFunction();
  //   // }, 3000);
  // };

  var priceperToken =
    (((1000000 * LPbnb) / LMbalanceLPpool) * oneBNBprice) / 1000000;

  var marketcap = circulatingSupply * priceperToken;
  var permillbcbs = ((1000000 * LPbnb) / LMbalanceLPpool) * oneBNBprice;
  // boxArr[0].number = maxTransactionAmount;
  // boxArr[1].number = "$ " + marketcap.toFixed(2);
  // boxArr[2].number = "$ " + permillbcbs.toFixed(2);
  // boxArr[3].number = "$ " + (oneBNBprice * LPbnb * 2).toFixed(2);
  // boxArr[4].number = "BNB " + Number(TotalbnbinrewardPool).toFixed(2);
  // boxArr[5].number = "BNB " + Number(rewardhardCap);
  // boxArr[6].number = "$ " + (distributedBnb * oneBNBprice).toFixed(2);
  // boxArr[7].number = "$ " + (totalreinvested * priceperToken).toFixed(2);
  // boxArr[8].number = (totalreflectionFees * 0.167).toFixed(0);

  return (
    <section className="bg-color-homepage-section-one text-white">
      <ScrollAnimation
        animateIn="fadeIn"
        scrollableParentSelector="#scrolly-main"
      >
        <Container fluid="xxl" className="position-relative pt-5">
          <Row className="justify-content-xl-between align-items-center">
            <Col md={12} lg={6} xl={5} className="mb-5 mb-xl-0">
              <div className="z-10 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                <div className="heading-primary mb-2">
                  The <span className="text-primary">BSC</span> Ecosystem
                </div>
                <div className="text-white-2 fw-light custom-animation heading-secondary-3 px-0 col-md-7 col-lg-11 col-xl-11 col-xxl-9 mb-4">
                  <span
                    className={activeColor === 0 ? "colorRed" : "colorChange"}
                  >
                    Passive Income
                  </span>{" "}
                  |{" "}
                  <span
                    className={activeColor === 1 ? "colorRed" : "colorChange"}
                  >
                    Auto USDT Distribution
                  </span>{" "}
                  |{" "}
                  <span
                    className={activeColor === 2 ? "colorRed" : "colorChange"}
                  >
                    Incupad
                  </span>{" "}
                  |{" "}
                  <span
                    className={activeColor === 3 ? "colorRed" : "colorChange"}
                  >
                    DexPad
                  </span>{" "}
                  |{" "}
                  <span
                    className={activeColor === 4 ? "colorRed" : "colorChange"}
                  >
                    Token Minting
                  </span>{" "}
                  |{" "}
                  <span
                    className={activeColor === 5 ? "colorRed" : "colorChange"}
                  >
                    Lockers
                  </span>{" "}
                  |{" "}
                  <span
                    className={activeColor === 6 ? "colorRed" : "colorChange"}
                  >
                    Analytics
                  </span>
                </div>
                <div className="d-flex flex-column flex-md-row mx-0">
                  <div className="pe-md-2">
                    {link}

                    {/* <Link
                    
                    to='/wallet/step-one'
                      className='btn-1 button-1 btn-color w-100'
                    >
                      
                      <div style={{ height: 61, width: 61 }}>
                        <Rocket />
                      </div>
                      {/* <img height={61} src='./assets/rocket.png' alt='rocket' /> */}
                    {/* <span className='text-uppercase fw-bold me-3'>
                        {' '}
                        Launch App
                      </span>
                    </Link> */}
                  </div>
                  <div className="ps-md-2 mt-3 mt-md-0">
                    <a
                      style={{ height: 60 }}
                      className="btn btn-outline-warning px-4 w-100"
                      href="https://my.forms.app/crptoprojects/bscbaywhitelist"
                      target="_blank"
                    >
                      <span className="text-uppercase">WhiteList Open</span>
                      <i
                        className="ms-3 shake-horizontal"
                        style={{ height: 30, width: 18 }}
                      >
                        <Arrow />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              md={12}
              lg={6}
              xl={7}
              className="order-first order-lg-last mb-4 mb-lg-0"
            >
              {/* <div className="d-md-none z-10 w-100" style={{ height: "100%" }}>
                <img
                  className="h-100 w-100 d-block"
                  src="./assets/bg-0.gif"
                  alt=".."d-none d-md-block
                /> */}
              {/* </div> */}
              <div className=" z-10 w-100" style={{ height: "100%" }}>
                <img
                  className="h-100 w-100 d-block"
                  src="./assets/home-desktop.svg"
                  alt=".."
                />
              </div>
              {/* Start */}
              {/* <div
                className="position-absolute end-0 bottom-0 d-none d-xl-block"
                style={{ width: "40%" }}
              >
                <Ellipse1 />
              </div>
              <div
                className="position-absolute end-0 bottom-0 d-none d-xl-block"
                style={{ width: "30%" }}
              >
                <Ellipse2 />
              </div> */}
              {/* End */}
            </Col>
          </Row>
          <div className="px-0 col-lg-8 mx-auto mt-5">
            <Row
              className="justify-content-center text-center z-10 pb-5"
              style={{ gap: 15 }}
            >
              <h1 className="banner-section-heading">
                A Launchpad that <span className="banner-span">Rewards</span>{" "}
                You !
              </h1>
              {boxArr.map((data, i) => (
                <div
                  key={i}
                  className="box-1 bg-color-homepage-section-one-box text-small icon-hover"
                >
                  <img
                    className="d-block mb-1"
                    height={24}
                    src={`/assets/icons/animicon-${i}.gif`}
                    alt={data.name}
                  />
                  <span className="text-capitalize text-white-2">
                    {data.name}
                  </span>
                  <span className="text-white">{data.number}</span>
                </div>
              ))}
            </Row>
            <Row
              className="justify-content-center z-10 pb-5"
              style={{ gap: 10 }}
            >
              {socialMediaArr.map((data, i) => (
                <a
                  style={{ width: 30 }}
                  key={i}
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 mx-sm-3"
                >
                  <img
                    className="d-block icon-hover"
                    height={25}
                    src={`/assets/icons/b-icon-${i}.svg`}
                    alt=".."
                  />
                </a>
              ))}
            </Row>
          </div>
        </Container>
      </ScrollAnimation>
    </section>
  );
};

export default HomeSectionOne;
