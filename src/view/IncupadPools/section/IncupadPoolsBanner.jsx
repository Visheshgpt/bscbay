import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";
import LaunchStepThree from "../../launch-steps/LaunchStepThree";

import WalletDetails from "../../walletDetails/WalletDetails";

import Web3 from 'web3';
import BSCBAYICOabi from '../../../shared/BSCBAYICO.json';




const IncupadPoolsBanner = ({ activePool }) => {
  const [showConnect, setShowConnect] = useState(false);

  const onHideHandler = () => {
    setShowConnect(false);
  };

  let address = window.sessionStorage.getItem("walletAddress");
  console.log("add",address);

  let status = "ongoing"
  let userTokenalance = 1;
  let userBNBbalance = 2;
  
  const [raisedBNB, setraisedBNB] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0); 
  const [totalUsers, settotalUsers] = useState(0);
  const [MaxDistributedTokens, setMaxDistributedTokens] = useState(0);
  const [allocatedToken, setallocatedToken] = useState(0);
 
 
  function web3apis() {
   
    const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYICOabi;
    var contractAddress = '0xB9D447A70f3B7C0115040760832B960cb29f25b4';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // get BNB balance of ICO
    contract.methods
    .totalBNBraise()
    .call()
    .then((amount) => {
      // console.log(amount);
      var tokens = web3.utils.toBN(amount).toString();
      setraisedBNB(Number(web3.utils.fromWei(tokens, 'ether')));
    });

    // token Price
    contract.methods
    .tokenPrice()
    .call()
    .then((amount) => {
      var tokens = web3.utils.toBN(amount).toString();
      settokenPrice(Number(web3.utils.fromWei(tokens, 'ether')));
    });

    // get total Users
    contract.methods
    .totalUsers()
    .call()
    .then((totalusers) => {
      settotalUsers(totalusers);
    }); 


      // get MAX DISTRIBUTED TOKENS
      contract.methods
      .maxDistributedTokenAmount()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMaxDistributedTokens(Number(web3.utils.fromWei(tokens, 'ether')));
      });


    // get DISTRIBUTED TOKENS
    contract.methods
      .tokensForDistribution()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setallocatedToken(Number(web3.utils.fromWei(tokens, 'ether')));
      });  

  }

  useEffect(() => { 
    web3apis();
  });

  const ICOcompletePercentage = ((allocatedToken / MaxDistributedTokens) * 100).toFixed(2);
  // console.log("ICO",ICOcompletePercentage);

  const oneBNBprice = 1/tokenPrice;
  // console.log("oneBNBprice", oneBNBprice);

 
  return (
    <Container as="section" fluid="xxl" className="upcoming-pool-banner">
      <Container>
           
       <Row>
          <Col lg={7} md={7} className="left-section">
            <img src={`../../${activePool.img}`} alt={activePool.title} />
            <h2>{activePool.title}</h2>
            <p>{activePool.description}</p>
            <div>
            <a href={activePool.TwitterLink} target="_blank">  <img src="../assets/twiter.svg" alt="twiter" /> </a>
              {/* <img src="../assets/telegram.png" alt="facebook" /> */}
              {/* <img src="../assets/linked-in.svg" alt="linkedin" /> */}
              {/* <img src="../assets/instagarm.svg" alt="instagram" /> */}
            </div>
          </Col>
        
      { address ?  
        <Col lg={5} md={5}>
            <div className="right-section">
              <div className="upper-right-section">
                <div className="button-section">
                <Button className="upper-right-btn-one">{activePool.allocationType}</Button>
                <Button className="upper-right-btn-two">Access Type : {activePool.accessType}</Button>
                </div>
                <span>{activePool.status}</span>
                <h3>1 {activePool.allocationType} = {oneBNBprice} {activePool.symbol} </h3>
                <b style={{ color: 'white' }}>Starts In:</b>
                <p>TBA</p>
              </div>
              <div className="lower-right-section">
                <h5>Total Raise</h5>
                <h4>{raisedBNB} {activePool.allocationType}</h4>
                <ProgressBar
                  now={ICOcompletePercentage}
                  className="progress-bar-section"
                  label={`${Math.round(ICOcompletePercentage)}%`}
                />
                <span>Participant : {totalUsers}</span>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="btn connect-btn"
                onClick={() => setShowConnect(true)}
              >
                Connect To Wallet 
              </Button>
             
            </div>
            {/* { address ? <WalletDetails activePool={activePool} /> : <WalletDetails activePool={activePool}/> } */}
          </Col> 
   
          :  
        <div className='col-lg-5 col-md-5'>
          <Col xs={12} className="ongoing-upper-card">
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row align-items-center  justify-content-center ongoing-upper-card-left">
                <span>{activePool.allocationType}</span>
                <span style={{ textTransform: "capitalize" }}>{status}</span>
              </div>
              <span className="ongoing-upper-card-right">
                1 BUSD = 100 BSCBay
              </span>
            </div>
            <div className="d-flex flex-row justify-content-center">
              <div className="ongoing-lower-card text-white">
                <div className="d-flex justify-content-center">
                  <span className="text-white">
                    {status !== "closed" ? (
                      status === "ongoing" ? (
                        "End in : 0 Days 10 Hours 20 Mins 30 Seconds"
                      ) : (
                        "Start in : 0 Days 10 Hours 20 Mins 30 Seconds"
                      )
                    ) : (
                      <div className="d-flex flex-column justify-content-center align-items-center  text-white">
                        <span>Closed</span>
                        <span>Total Raised: 500 BNB</span>
                      </div>
                    )}
                  </span>
                </div>
                <div>
                  {status !== "closed" ? (
                    status === "ongoing" ? (
                      <ProgressBar
                        now={5}
                        className="pro-bar-section"
                        label={`${5}%`}
                      />
                    ) : (
                      <ProgressBar
                        now={30}
                        className="pro-bar-section"
                        label={`${30}%`}
                      />
                    )
                  ) : (
                    <ProgressBar
                      now={100}
                      className="pro-bar-section"
                      label={`${100}%`}
                    />
                  )}
                </div>
                <div>
                  {status !== "closed" ? (
                    status === "upcomming" ? (
                      <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                        <span>Swap Progress</span>
                        <span>Total Raised :150/500 BNB</span>
                        <span>Participants : 240</span>
                      </div>
                    ) : (
                      <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                        <span>Swap Progress</span>
                        <span>Participants : TBA</span>
                      </div>
                    )
                  ) : (
                    <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                      <span>Swap Progress</span>
                      <span>Participants : 3240</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} className="ongoing-lower-card mt-5">
            {status !== "closed" ? (
              <div className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-column text-white ">
                  <span className="pb-2">Wallet Address: {address}</span>
                  <span className="pb-2">BSCB Balance: {userTokenalance.toFixed(2)} BSCB</span>
                </div>
                <div className="d-flex flex-row justify-content-between text-white">
                  <span>
                    {" "}
                    Current Tier:{" "}
                    <span className="text-warning ms-1">GOLD(i)</span>
                  </span>
                  <span> BNB Balance: {userBNBbalance.toFixed(2)} BNB</span>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-column text-white ">
                  <span className="pb-2">Wallet Address:0X12….12Ab1</span>
                  <span className="pb-2">BSCB Balance: {userTokenalance.toFixed(2)} BSCB</span>
                  <span>
                    Current Tier:
                    <span className="text-warning ms-1">GOLD(i)</span>
                  </span>
                </div>
                <div className="d-flex flex-column justify-content-between text-white">
                  <span> BNB Balance: {userBNBbalance.toFixed(2)} BNB</span>
                  <span>Your Participation: 2 BNB</span>
                  <span className="claim-section">Claim</span>
                </div>
              </div>
            )}

            <div className="ongoing-lower-card-last-section">
              <span>Wallet Eligible to Participate: Yes / No</span>
              <span>Check Eligibility Criterea</span>
            </div>
          </Col>
           
    
       
          </div>

      } 
        
        </Row> 
     

        // <WalletDetails activePool={activePool} /> 

       

      </Container>
      <LaunchStepThree show={showConnect} onHide={onHideHandler} /> 
    </Container>
  );
};

export default IncupadPoolsBanner;
