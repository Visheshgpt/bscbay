import React, { useEffect, useState } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { socialLinks } from '../Constants';
import { ReactComponent as Arrow } from '../../assets/next.svg';

import AnimatedNumber from "animated-number-react";

import Web3 from "web3";
import BSCBAYabi from "../../shared/BSCBAYabi.json"
import CoinGecko from "coingecko-api";

function HomeBanner() {

  const ecosystemData = [
    { name: 'BSCB MarketCap ($)', number: 'TBA ' },
    { name: 'Per Million BCBS ($)', number: 'TBA' },
    { name: `Liquidity Pool \u00A0 ($)`, number: 'TBA' },
    { name: 'Total USDT Distributed', number: 'TBA' },
    { name: 'Total Buyback ($)', number: 'TBA' },
    { name: 'BNB Price', number: 'TBA' },
  ];

  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [circulatingSupply, setcirculatingSupply] = useState(0);
  const [totalUSDTdistributed, settotalUSDTdistributed] = useState(0);
  const [holders, setholders] = useState(0);
  const [buyback, setbuyback] = useState(0);
  const [Lpbscbay, setLpbscbay] = useState(0);

function web3apis2() {

    const web3 = new Web3("https://bsc-dataseed.binance.org/");

    var contractABI = BSCBAYabi;
    var contractAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

      // total USDT distributed
      contract.methods
      .getTotalDividendsDistributed()
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        settotalUSDTdistributed(Number(web3.utils.fromWei(tokens, "ether")));
      });

      // total number of holder
      contract.methods
      .getNumberOfDividendTokenHolders()
      .call()
      .then((holders) => {
        setholders(Number(holders));
      });

      // total Buyback
      contract.methods
      .totalbuyback()
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        setbuyback(Number(web3.utils.fromWei(tokens, "ether")));
      });

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
        "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

      var wrappedBNBcontract = new web3.eth.Contract(
        wrappednBNBABI,
        wrappedBNBcontractAddress
      );

      wrappedBNBcontract.methods
        .balanceOf("0x30e3a76f435908414d42A92505497B3681F5504A")
        .call()
        .then((balance) => {
          var tokens = web3.utils.toBN(balance).toString();
          console.log("tb", tokens);
          setLPbnb(Number(web3.utils.fromWei(tokens, "ether")));
        });   


     // get token Balance in LP
      contract.methods
      .balanceOf("0x30e3a76f435908414d42A92505497B3681F5504A")
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setLpbscbay(Number(web3.utils.fromWei(tokens, "ether")));
      });

    //  circulating Supply LM token
    contract.methods
      .balanceOf("0x000000000000000000000000000000000000dEaD")
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        var csupply =
          Number(1000000000) - Number(web3.utils.fromWei(tokens, "ether"));
        setcirculatingSupply(csupply);
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
 }

 

useEffect(() => {
  web3apis2();
})


useEffect(() => {

  const intervalId =  setInterval(() => {
    web3apis2();
  }, 4000);

  return () => clearInterval(intervalId);
},[])


let priceperToken = (((1000000 * LPbnb) / Lpbscbay) * oneBNBprice) / 1000000;
let permillbcbs = ((1000000 * LPbnb) / Lpbscbay) * oneBNBprice;
console.log("pmb", permillbcbs);

let bscBayMarketCap = priceperToken * circulatingSupply;

ecosystemData[0].number = bscBayMarketCap.toFixed(0);
ecosystemData[1].number = permillbcbs.toFixed(0);
ecosystemData[2].number = (LPbnb*oneBNBprice*2).toFixed(0);
ecosystemData[3].number = totalUSDTdistributed.toFixed(0);
ecosystemData[4].number = (buyback*oneBNBprice).toFixed(2);
ecosystemData[5].number = oneBNBprice.toFixed(2)


// formatValue = value => `$ ${new Intl.NumberFormat().format(value)}`;
// formatNormalValue = value => `$ ${value.toFixed(8)}`;


  useEffect(() => {
    const colorDataWord = Array.from(
      document.getElementsByClassName('changeWord')
    );

    const colorData = Array.from(
      document.getElementsByClassName('colorChange')
    );

    const colorFunction = () => {
      const changeColorFn = (item, index) => {
        setTimeout(() => {
          colorData.map((item) => (item.style.color = '#fff'));
          item.style.color = '#f1c342';
        }, 1500 * index);
      };

      colorData.map((item, index) => {
        changeColorFn(item, index);
      });
    };

    const colorWordFunction = () => {
      const changeColorFnn = (item, index) => {
        setTimeout(() => {
          colorDataWord.map((item) => (item.style.color = '#fff'));
          item.style.color = '#f1c342';
        }, 500 * index);
      };

      colorDataWord.map((item, index) => changeColorFnn(item, index));
    };

    colorFunction();
    setInterval(() => colorFunction(), 1500 * colorData.length);

    colorWordFunction();
    setInterval(() => colorWordFunction(), 500 * colorDataWord.length);
  });
  return (
    <section className='bg-color-homepage-section-one text-white'>
      <Container fluid='xxl' className='position-relative home_banner'>
        <Row className='justify-content-xl-between'>
          <Col md={12} lg={6} xl={5} className='mb-5 mb-xl-0'>
            <div className='z-10 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start'>
              <div className='heading-primary mb-2 custom-heading-primary'>
                {/* The <span className="text-primary">BSC</span> Ecosystem */}
                First Decentralized
                <span className='text-primary'> Launchpad</span> That
                <div className='text-primary'>
                  <span className='changeWord'>R</span>
                  <span className='changeWord'>e</span>
                  <span className='changeWord'>w</span>
                  <span className='changeWord'>a</span>
                  <span className='changeWord'>r</span>
                  <span className='changeWord'>d</span>
                  <span className='changeWord'>s</span>
                </div>
                You
              </div>

              <div className='d-flex aling-items-center z-10 py-4 home_social_links w-100'>
                {socialLinks.map((data, i) => (
                  <a
                    style={{ width: 30 }}
                    key={i}
                    href={data.link}
                    target='_blank'
                    rel='noreferrer'
                    className=''>
                    <img
                      className='d-block icon-hover'
                      height={25}
                      src={`/assets/icons/b-icon-${i}.svg`}
                      alt='..'
                    />
                  </a>
                ))}
              </div>
              <div className='d-flex align-items-center justify-content-between'>
                <a className='btn btn-sm btn-outline-primary' href="https://pancakeswap.finance/swap?outputCurrency=0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6" target="_blank" > Buy Now </a>
                {/* <a className='btn btn-sm btn-outline-primary mx-3' href="https://github.com/solidproof/projects/blob/main/BSCBay/SmartContract_Audit_Solidproof_BSCBay.pdf" target="_blank" >Audit</a> */}
                {/* <a className='btn btn-sm btn-outline-primary mx-3' href="https://github.com/solidproof/projects/blob/main/BSCBay/SmartContract_Audit_Solidproof_BSCBay.pdf" target="_blank" >Buy</a> */}
              </div>
            </div>
          </Col>
          <Col
            md={12}
            lg={6}
            xl={7}
            className='order-first order-lg-last mb-4 mb-lg-0'>
            <div className=' z-10 w-100' style={{ height: '100%' }}>
              <img
                className='h-100 w-100 d-block'
                src='../assets/home-desktop.svg'
                alt='..'
              />
            </div>
          </Col>
        </Row>
        <div className='px-0 col-lg-10 mx-auto mt-5'>
          <Row
            className='justify-content-center text-center z-10 pb-3'
            style={{ gap: 15 }}>
            <h1 className='banner-mid-section'>
              The <span className='text-primary'>BSC</span> Ecosystem
            </h1>
            <div className='text-white-2 fw-light custom-animation heading-secondary-3 px-0 col-md-7 col-lg-11 col-xl-11 col-xxl-9 mb-4'>
              <span className='colorChange'>Auto USDT Distribution</span> |{' '}
              <span className='colorChange'>LaunchPad</span> |{' '}
              <span className='colorChange'>DexPad</span> |{' '}
              <span className='colorChange'>Token Minting</span> |{' '}
              <span className='colorChange'>Lockers</span> |{' '}
              <span className='colorChange'>Analytics</span>
            </div>

            <div className='sample-data'>
              {ecosystemData.map((data, i) => (
                <div
                  key={i}
                  className='box-1 bg-color-homepage-section-one-box text-small icon-hover mb-4'>
                  <img
                    className='d-block mb-1'
                    height={24}
                    src={`/assets/icons/animicon-${i}.gif`}
                    alt={data.name}
                  />
                  <span className='text-capitalize text-white-2'>
                    {data.name}
                  </span>
                  <span className='text-white'>

                  <AnimatedNumber
                   value={data.number}
                   formatValue={(value )=>`$ ${new Intl.NumberFormat().format(value)}`}
                   duration={300}
               />

                  </span>
                </div>
              ))}
            </div>
          </Row>
          <Row className='justify-content-center'>
            <div className='whitepaper_btn mb-4'>
              <a
                style={{ height: 60 }}
                className='btn btn-outline-warning px-4 w-100'
                href='https://docs.bscbay.com/'
                target='_blank'
                rel='noreferrer'>
                <span className='text-uppercase'>Whitepaper</span>
                <i
                  className='ms-3 shake-horizontal'
                  style={{ height: 30, width: 18 }}>
                  <Arrow />
                </i>
              </a>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HomeBanner;
