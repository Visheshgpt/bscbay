import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import video from "../../../assets/bscbayvideo.mp4";
import video from "../../../assets/project-section.mp4";

import Web3 from 'web3';
import BSCBAYICOabi from '../../../shared/BSCBAYICO.json';

const IncupadPoolsInformation = ({ activePool }) => {

  const [Minallocation, setMinallocation] = useState(0);
  const [Maxallocation, setMaxallocation] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0);
  const [allocatedToken, setallocatedToken] = useState(0);

  
  function web3apis() { 
   
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYICOabi;
    var contractAddress = '0xB9D447A70f3B7C0115040760832B960cb29f25b4';
    var contract = new web3.eth.Contract(contractABI, contractAddress);


    // get DISTRIBUTED TOKENS
    contract.methods
      .tokensForDistribution()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setallocatedToken(Number(web3.utils.fromWei(tokens, 'ether')));
      });  


    // user MIN allocation
    contract.methods
      .minInvestment()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMinallocation(Number(web3.utils.fromWei(tokens, 'ether')));
      });


    // user MAX allocation
     contract.methods
     .maxInvestment()
     .call()
     .then((amount) => {
      //  console.log(amount);
       var tokens = web3.utils.toBN(amount).toString();
       setMaxallocation(Number(web3.utils.fromWei(tokens, 'ether')));
     });  

    
     // token Price
    contract.methods
    .tokenPrice()
    .call()
    .then((amount) => {
      // console.log(amount);
      var tokens = web3.utils.toBN(amount).toString();
      settokenPrice(Number(web3.utils.fromWei(tokens, 'ether')));
    });
  }

  useEffect(() => {
    web3apis();
  });





  return (
    <Container as="section" fluid="xxl" className="pool-information-section">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Pools Information</h2>
          </Col>
          <Col xs={12} lg={6}>
            <div className="pool-information-card">
              <div>
                <span>TOKEN DISTRIBUTION</span>
                <span>{allocatedToken}</span>
              </div>
              <div>
                <span>MIN. ALLOCATION</span>
                <span>{Minallocation}</span>
              </div>
              <div>
                <span>MAX. ALLOCATION</span>
                <span>{Maxallocation}</span>
              </div>
              <div>
                <span>TOKEN PRICE</span>
                <span>{tokenPrice}</span>
              </div>
              <div>
                <span>ACCESS TYPE</span>
                <span>{activePool.accessType}</span>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="pool-information-card">
              <div>
                <span>NAME</span>
                <span>{activePool.title}</span>
              </div>
              <div>
                <span>SYMBOL</span>
                <span>{activePool.symbol}</span>
              </div>
              <div>
                <span>DECIMALS</span>
                <span>{activePool.decimals}</span>
              </div>
              <div>
                <span>TOTAL SUPPLY</span>
                <span>{activePool.totalSupply}</span>
              </div>
              <div>
                <span>ADDRESS</span>
                <span>{activePool.outputTokenaddress}</span>
              </div>
            </div>
          </Col>
        </Row>

        {/* About The project Section */}
        <Row className="mt-5 pt-5">
          <Col xs={12} lg={6} className="about-section">
            <h2>About the Project</h2>

            {activePool.about.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Col>

          <Col xs={6} lg={6} className="project-video-section">
            <h2>Project Clip</h2>
            <div className="videoContainer mt-2 ">
              <iframe
                className="incupad-pool-video responsive-iframe rounded-lg-2"
                src={video}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </Col>

          <Col xs={12}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadPoolsInformation;
