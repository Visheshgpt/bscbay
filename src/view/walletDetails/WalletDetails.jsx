import React, { useEffect, useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";

import ERC20abi from "../../shared/BSCBAYabi.json";
import Web3 from "web3";

const WalletDetails = ({ activePool }) => {

  let address = window.sessionStorage.getItem("walletAddress");
  let selectedAccount;
  let status = activePool.status;

  const [userBNBbalance, setuserBNBbalance] = useState(0);
  const [userTokenalance, setuserTokenalance] = useState(0);
  

  function web3apis() {
    const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

    console.log("web3 apis running");
   
    var contractABI = ERC20abi;
    var contractAddress = activePool.outputTokenaddress;
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // get USER TOKENS
    contract.methods
      .balanceOf(address)
      .call()
      .then((amount) => {
        console.log("ii",amount);
        var tokens = web3.utils.toBN(amount).toString();
        setuserTokenalance(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get User BNB balance
    web3.eth
      .getBalance(address)
      .then((balance) => {
       ////console.log(balance);
       var tokens = web3.utils.toBN(balance).toString();
       setuserBNBbalance(Number(web3.utils.fromWei(tokens, 'ether')));
   });   


  }

 
  useEffect(  () => {
    
    let provider = window.ethereum || window.BinanceChain || Web3.givenProvider;

     if (typeof provider !== "undefined" && address) {
      
        window.ethereum.on("accountsChanged", function (accounts) {
          selectedAccount =  accounts[0];
          address = selectedAccount;
          console.log("acc",selectedAccount);
          window.sessionStorage.setItem("walletAddress", selectedAccount);

          window.location.reload();
        });
    
        window.ethereum.on("chainChanged", (chainId) => {
          // Handle the new chain.
          // Correctly handling chain changes can be complicated.
          // We recommend reloading the page unless you have good reason not to.
          window.location.reload();
        });
      }

    if (address) {
     web3apis(); }

  },[address]);
 

  return (
    <>
      <Container fluid="xxl" as="section" className="ongoing-section">
        <Row className="justify-content-center">
          <Col xs={4} className="ongoing-upper-card">
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
        </Row>
        <Row className="justify-content-center">
          <Col xs={4} className="ongoing-lower-card mt-5">
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
        </Row>
      </Container>
    </>
  );
};

export default WalletDetails;
