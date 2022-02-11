import React, { useEffect, useState } from "react";
import { Container, Row, Col, ProgressBar, Button } from "react-bootstrap";
import LaunchStepThree from "../../launch-steps/LaunchStepThree";

// import WalletDetails from "../../walletDetails/WalletDetails";

import contractService from "../../../shared/LMcontractservice";
import Web3 from "web3";
import BSCBAYICOabi from "../../../shared/BSCBAYICO.json";
import ERC20abi from "../../../shared/BSCBAYabi.json";
import AlertModal from "../../../components/AlertModal";

const IncupadPoolsBanner = ({ activePool }) => {
  const [showConnect, setShowConnect] = useState(false);
  // Button Activate state
  const [activate, setActivate] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onHideHandler = () => {
    setShowConnect(false);
  };

  let address = window.sessionStorage.getItem("walletAddress");
  console.log("add", address);
  let selectedAccount;
  let status = activePool.status;

  const [raisedBNB, setraisedBNB] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0);
  const [totalUsers, settotalUsers] = useState(0);
  const [MaxDistributedTokens, setMaxDistributedTokens] = useState(0);
  const [allocatedToken, setallocatedToken] = useState(0);
  const [userBNBbalance, setuserBNBbalance] = useState(0);
  const [userTokenalance, setuserTokenalance] = useState(0);
  const [eligibility, seteligibility] = useState(false);
  const [walletapproved, setwalletapproved] = useState(false);
  const [claimenabled, setclaimenabled] = useState(false);
  const [value, setvalue] = useState(0);
  const [userInvested, setuserInvested] = useState(0);
  const [claimableTokens, setclaimableTokens] = useState(0);
  const [Maxallocation, setMaxallocation] = useState(0);
  
  const [txMessage, settxMessage] = useState("");
  
  const remainingallocation = Maxallocation - userInvested;

   useEffect(() => {
     
   },[walletapproved]);

  function web3apis() {
    const web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      )
    );
    // const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = BSCBAYICOabi;
    var contractAddress = "0xB9D447A70f3B7C0115040760832B960cb29f25b4";
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // get BNB balance of ICO
    contract.methods
      .totalBNBraise()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setraisedBNB(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // token Price
    contract.methods
      .tokenPrice()
      .call()
      .then((amount) => {
        var tokens = web3.utils.toBN(amount).toString();
        settokenPrice(Number(web3.utils.fromWei(tokens, "ether")));
      });

    // get total Users
    contract.methods
      .totalUsers()
      .call()
      .then((totalusers) => {
        settotalUsers(totalusers);
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

    if (address) {
      var contractTokenABI = ERC20abi;
      var contractTokenAddress = activePool.outputTokenaddress;
      var Tokencontract = new web3.eth.Contract(
        contractTokenABI,
        contractTokenAddress
      );

      // get USER TOKENS
      Tokencontract.methods
        .balanceOf(address)
        .call()
        .then((amount) => {
          // console.log("ii",amount);
          var tokens = web3.utils.toBN(amount).toString();
          setuserTokenalance(Number(web3.utils.fromWei(tokens, "ether")));
        });

      // check eligibility
      contract.methods
        .checkWhitelisted(address)
        .call()
        .then((value) => {
          // console.log("eli",value);
          seteligibility(value);
        });
 
      
       // check claim enabled or not
       contract.methods
       .Claimenabled()
       .call()
       .then((value) => {
         // console.log("eli",value);
         setclaimenabled(value);
       });  
      
      
       // get user info
       contract.methods
       .userInfo(address)
       .call()
       .then((obj) => {
         console.log("User Info",obj.debt);

         var claimabletokens = web3.utils.toBN(obj.debt).toString();
         setclaimableTokens(Number(web3.utils.fromWei(claimabletokens, "ether")));
         
         var userinvested = web3.utils.toBN(obj.totalInvestedETH).toString();
         setuserInvested(Number(web3.utils.fromWei(userinvested, "ether")));
       });   
              

      // check wallet approved or not
      contract.methods
        .existingUser(address)
        .call()
        .then((value) => {
          console.log("approved", value);
          setwalletapproved(value);
        });

      // get User BNB balance
      web3.eth.getBalance(address).then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setuserBNBbalance(Number(web3.utils.fromWei(tokens, "ether")));
      });
    }
  }


  // const handleAllowance = async () => {
  //   const web3 = await contractService.getWeb3Client();

  //   var contractTokenABI = ERC20abi;
  //   var contractTokenAddress = activePool.outputTokenaddress;
  //   var Tokencontract = new web3.eth.Contract(
  //     contractTokenABI,
  //     contractTokenAddress
  //   );

  //   console.log("tokencontract", Tokencontract);

  //   Tokencontract.methods
  //     .approve(
  //       "0xB9D447A70f3B7C0115040760832B960cb29f25b4",
  //       "20000000000000000000000000000000".toString()
  //     )
  //     .send({ from: address })
  //     .then(function (receipt) {
  //       console.log(receipt);      
  //       if (receipt.status) {
  //       setwalletapproved(true);
  //       }
  //      else {
  //       alert("Transaction Failed");
  //      }
  //     }).catch((e) => {
  //       alert("Transaction Failed!");
  //     });
  // };

  const invest = async () => {
    const web3 = await contractService.getWeb3Client();

    if (value == "" || value == 0) {
      alert("Please enter Value");
    } else {
      if (web3) {
        try {
          var contractABI = BSCBAYICOabi;
          var contractAddress = "0xB9D447A70f3B7C0115040760832B960cb29f25b4";
          var contract = new web3.eth.Contract(contractABI, contractAddress);

          let amnt = web3.utils.toHex(web3.utils.toWei(value, "ether"));
          console.log("amnt", amnt);

          contract.methods
            .Invest()
            .send({ from: address, value: amnt })
            .then(function (receipt) {
              console.log(receipt);

              if (receipt.status) {

                settxMessage("Transaction Success")
                setModalShow(true)
                // alert("Transaction Success");
                }
              else {

                settxMessage("Transaction Failed")
                setModalShow(true)
                // alert("Transaction Failed");
                
              }

            }).catch((e) => {
               console.log("error is", e);

               settxMessage("Transaction Failed!")
               setModalShow(true)
              //  alert("Transaction Failed!");
              //  window.location.reload();
            }                  
            );
        } catch {
          settxMessage("Transaction Failed!")
          setModalShow(true)
          // alert("Transaction Failed!");
        }
      } else {
        settxMessage("Change network to binance")
        setModalShow(true)  
        // alert("Change network to binance");
      }
    }
  };


  const claim = async () => {
    const web3 = await contractService.getWeb3Client();

      if (web3) {
        try {
          var contractABI = BSCBAYICOabi;
          var contractAddress = "0xB9D447A70f3B7C0115040760832B960cb29f25b4";
          var contract = new web3.eth.Contract(contractABI, contractAddress);

          console.log("Claim called ==>");

          contract.methods
            .claim()
            .send({ from: address })
            .then(function (receipt) {
              console.log(receipt);

              if (receipt.status) {
                setclaimableTokens(0)
                settxMessage("Transaction Success")
                setModalShow(true)
                // alert("Transaction Success");
                }
              else {

                settxMessage("Transaction Failed")
                setModalShow(true)
                // alert("Transaction Failed");
                
              }

            }).catch((e) => {
               console.log("error is", e);

               settxMessage("Transaction Failed!")
               setModalShow(true)
              //  alert("Transaction Failed!");
              //  window.location.reload();
            }                  
            );
        } catch {
          settxMessage("Transaction Failed!")
          setModalShow(true)
          // alert("Transaction Failed!");
        }
      } else {
        settxMessage("Change network to binance")
        setModalShow(true)  
        // alert("Change network to binance");
      }
  };



  useEffect(() => {
    let provider = window.ethereum || window.BinanceChain || Web3.givenProvider;

    if (typeof provider !== "undefined" && address) {
      window.ethereum.on("accountsChanged", function (accounts) {
        selectedAccount = accounts[0];
        address = selectedAccount;
        //  window.ethereum.eth.requestAccounts();
        console.log("acc", selectedAccount);
        window.sessionStorage.setItem("walletAddress", selectedAccount);

        window.location.reload();
      });

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });
    }

    web3apis();
  }, [address]);

  const ICOcompletePercentage = (
    (allocatedToken / MaxDistributedTokens) *
    100
  ).toFixed(2);
  // console.log("ICO",ICOcompletePercentage);

  const oneBNBprice = 1 / tokenPrice;
  // console.log("oneBNBprice", oneBNBprice);

  return (
    <Container as="section" fluid="xxl" className="upcoming-pool-banner">
      <Container>
        <Row>
          <Col lg={7} md={7} className="left-section">
            <div className="icon-box-incupad">
              <span className="icon-box-incupad-span">
                <img src={`../../${activePool.img}`} alt={activePool.title}  height="55px"/>
              </span>
            </div>
            <h2>{activePool.title}</h2>
            <p>{activePool.description}</p>
            <div>
              <a href={activePool.TwitterLink} target="_blank">
                {" "}
                <img src="../assets/twiter.svg" alt="twiter" />{" "}
              </a>
              {/* <img src="../assets/telegram.png" alt="facebook" /> */}
              {/* <img src="../assets/linked-in.svg" alt="linkedin" /> */}
              {/* <img src="../assets/instagarm.svg" alt="instagram" /> */}
            </div>
          </Col>

          {!address ? (
            <Col lg={5} md={5}>
              <div className="right-section card_pools">
                <div className="upper-right-section">
                  <div className="button-section">
                    {
                      /*
  <Button className="upper-right-btn-one">
                      {activePool.allocationType}
                    </Button>
                    <Button className="upper-right-btn-two">
                      Access Type : {activePool.accessType}
                    </Button>
                      */
                    }
                  
                  </div>
                  <span>{activePool.status}</span>
                  <h3>
                    1 {activePool.allocationType} = TBA {" "}
                    {activePool.symbol}{" "}
                  </h3>
                  <b style={{ color: "white" }}>Starts In:</b>
                  <p>TBA</p>
                </div>
                <div className="lower-right-section">
                  <h5>Total Raise</h5>
                  <h4>
                    TBA {activePool.allocationType}
                  </h4>
                  <ProgressBar
                    now={ICOcompletePercentage}
                    className="progress-bar-section"
                    label={`${Math.round(ICOcompletePercentage)}%`}
                  />
                  <span>Participant : TBA</span>
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
          ) : (
            // first banner on BSCBay
            <div className="col-lg-5 col-md-5">
              <Col xs={12} className="ongoing-upper-card">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-row align-items-center  justify-content-center ongoing-upper-card-left">
                    <span>{activePool.allocationType}</span>
                    <span style={{ textTransform: "capitalize" }}>
                      {status}
                    </span>
                  </div>
                  <span className="ongoing-upper-card-right">
                    1 {activePool.allocationType} = {oneBNBprice}{" "}
                    {activePool.symbol}{" "}
                  </span>
                </div>
                <div className="d-flex flex-row justify-content-center">
                  <div className="ongoing-lower-card text-white">
                    <div className="d-flex justify-content-center">
                      <span className="text-white">
                        {status !== "closed" ? (
                          status === "ongoing" ? (
                            "End in : 0 Days 0 Hours 0 Mins 0 Seconds"
                          ) : (
                            "Start in : 0 Days 0 Hours 0 Mins 0 Seconds"
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
                            now={ICOcompletePercentage}
                            className="pro-bar-section"
                            label={`${Math.round(ICOcompletePercentage)}%`}
                          />
                        ) : (
                          <ProgressBar
                            now={ICOcompletePercentage}
                            className="pro-bar-section"
                            label={`${Math.round(ICOcompletePercentage)}%`}
                          />
                        )
                      ) : (
                        <ProgressBar
                          now={ICOcompletePercentage}
                          className="pro-bar-section"
                          label={`${Math.round(ICOcompletePercentage)}%`}
                        />
                      )}
                    </div>
                    <div>
                      {status !== "closed" ? (
                        status === "upcomming" ? (
                          <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                            <span>Swap Progress</span>
                            <span>Total Raised :150/500 BNB</span>
                            <span>Participants : {totalUsers}</span>
                          </div>
                        ) : (
                          <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                            <span>Swap Progress</span>
                            <span>Participants : {totalUsers}</span>
                          </div>
                        )
                      ) : (
                        <div className="d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section ">
                          <span>Swap Progress</span>
                          <span>Participants : {totalUsers}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Col>

              {/* Second Banner on BSCBay */}
              <Col xs={12} className="ongoing-lower-card mt-2">
                {status !== "closed" ? (
                  <div className="d-flex flex-column justify-content-between">
                    <div className="d-flex flex-row justify-content-between text-white">
                      {/* <span className="pb-2">Wallet Address: {address}</span> */}
                      <span className="pb-2">
                        BSCB Balance: {userTokenalance.toFixed(2)} BSCB
                      </span>
                      <span> BNB Balance: {userBNBbalance.toFixed(2)} BNB</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between text-white">
                      {/* <span className="pb-2">Wallet Address: {address}</span> */}
                      <span className="pb-2">
                        User Invested: {userInvested.toFixed(2)} BNB
                      </span>
                      <span> Remaining allocation: {remainingallocation.toFixed(2)} BNB</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between text-white">
                      <span>
                        {" "}
                        Current Tier:{" "}
                        <span className="text-warning ms-1">TBA</span>
                      </span>
                    </div>
                    <br></br>

          { (userInvested > 0 && claimableTokens==0)  
                     ? 
                     <div className="d-flex flex-row justify-content-between text-white">
                      <span>
                        {" "}
                        {/* Claimable Tokens:{" "} */}
                        <span className="text-warning ms-1"> Tokens Claimed: {userInvested / tokenPrice}</span>
                      </span>
                    </div>
                    :
                    <div className="d-flex flex-row justify-content-between text-white">
                    <span>
                      {" "}
                      Claimable Tokens:{" "}
                      <span className="text-warning ms-1">{claimableTokens} BSCBay</span>
                    </span>
                  </div>
          
                  }


                  </div>
                ) : (
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column text-white ">
                      <span className="pb-2">Wallet Address:0X12….12Ab1</span>
                      <span className="pb-2">
                        BSCB Balance: {userTokenalance.toFixed(2)} BSCB
                      </span>
                      <span>
                        Current Tier:
                        <span className="text-warning ms-1">TBA</span>
                      </span>
                      <span>
                        User Invested:
                        <span className="text-warning ms-1">TBA BNB</span>
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
                  {eligibility ? (
                    <span>Wallet Eligible to Participate: Yes</span>
                  ) : (
                    <span>Wallet Eligible to Participate: No</span>
                  )}

                  <span>Check Eligibility Criterea</span>
                </div>
              </Col>

              {/* Button Ater Second Banner */}
        
        {/* {

        (claimenabled) 
          
        ?    <button
        onClick={() => claim()}
        className="incupadeButton__active"
      >
       Claim Tokens
      </button>    
       
       :   
         (
        <div className="invest__wrapper">
          <input
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => setvalue(e.target.value)}
          />
          <button
            className="incupadButton_invest"
            onClick={() => invest()}
          >
            Invest
          </button>
        </div>
      )}   */}





{

(!claimenabled) 
  
? 
  
<div className="invest__wrapper">
  <input
    type="text"
    placeholder="Enter Amount"
    onChange={(e) => setvalue(e.target.value)}
  />
  <button
    className="incupadButton_invest"
    onClick={() => invest()}
  >
    Invest
  </button>
</div>
 
:    
 ( (claimableTokens > 0) ?
    
  <button
  onClick={() => claim()}
  className="incupadeButton__active"
  >
  Claim Tokens
  </button> 
  
  :  
   
  <div></div>

)}  











            </div>
          )}
        </Row>
      </Container>
      <LaunchStepThree show={showConnect} onHide={onHideHandler} />
      <AlertModal show={modalShow} onHide={() => setModalShow(false)} message={txMessage} />
    </Container>
  );
};

export default IncupadPoolsBanner;
