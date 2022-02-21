import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  ProgressBar,
  Button,
  Spinner,
} from 'react-bootstrap';
import Web3 from 'web3';

import LaunchStepThree from '../launch-steps/LaunchStepThree';
// import WalletDetails from "../../walletDetails/WalletDetails";
import contractService from '../../shared/LMcontractservice';
import BSCBAYICOabi from '../../shared/BSCBAYICO.json';
import ERC20abi from '../../shared/BSCBAYabi.json';
import AlertModal from '../../components/AlertModal';
import SearchPool from './SearchPool';
import Timer from '../../components/Timer';
import Tooltip from '../../components/Tooltip';

import { chainRpcs } from '../../chainRPCs';

//import { chainRpcs } from '../../chainRPCs';
import WalletConnectProvider from '@walletconnect/web3-provider';

const IncupadPoolsBanner = ({ activePool }) => {
  const [showConnect, setShowConnect] = useState(false);
  // Button Activate state
  //const [activate, setActivate] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const onHideHandler = () => {
    setShowConnect(false);
  };

  let address = window.sessionStorage.getItem('walletAddress');
  // window.sessionStorage.setItem("userBNB", userBNBbalance);
  console.log('add', address);
  let selectedAccount;
  // let status = activePool.status;

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
  const [value, setvalue] = useState('');
  const [userInvested, setuserInvested] = useState(0);
  const [claimableTokens, setclaimableTokens] = useState(0);
  const [Maxallocation, setMaxallocation] = useState(0);
  const [Minallocation, setMinallocation] = useState(0);
  const [txMessage, settxMessage] = useState('');
  const [search, setSearch] = useState(false);
  // const [StartTime, setStartTime] = useState(0);
  // const [EndTime, setEndTime] = useState(0);
  const [round, setround] = useState(0);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [successPageReload, setSuccessPageReload] = useState('');
  const [ICOcompletePercentage, setICOcompletePercentage] = useState(0);
  const [status, setstatus] = useState(activePool.status);

  const remainingallocation = Maxallocation - userInvested;

  const StartTime = activePool.startTime;
  const EndTime = activePool.finishTime;

  function web3apis() {
    
    const web3 = new Web3(chainRpcs[activePool.chain]);

    var contractABI = BSCBAYICOabi;
    var contractAddress = activePool.contractAddress;
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

    // user MAX allocation
    contract.methods
      .maxInvestment()
      .call()
      .then((amount) => {
        //  console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setMaxallocation(Number(web3.utils.fromWei(tokens, 'ether')));
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
      

      let currentTime = new Date();
      let currentTimeData = Number(Date.parse(currentTime) / 1000);


      if (currentTimeData < StartTime) {
        // console.log("1");
        setstatus('Upcoming');

      } else if (
        currentTimeData < EndTime &&
        Number(ICOcompletePercentage) != 100
      ) {
        // console.log("2");
        setstatus('Ongoing');
      } else if (currentTimeData > EndTime) {
        // console.log("3");
        setstatus('Closed');
      }



    // // ICO start Time
    // contract.methods
    //   .startTimestamp()
    //   .call()
    //   .then((time) => {
    //     // console.log(time);
    //     setStartTime(time);
    //   });

    // // ICO End Time
    // contract.methods
    //   .finishTimestamp()
    //   .call()
    //   .then((time) => {
    //     //  console.log("endtime",time);
    //     setEndTime(time);
    //   });

    // get pre-sale round
    contract.methods
      .round()
      .call()
      .then((round) => {
        //  console.log("endtime",time);
        setround(Number(round));
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
          setuserTokenalance(Number(web3.utils.fromWei(tokens, 'ether')));
          window.sessionStorage.setItem(
            'userBSCB',
            web3.utils.fromWei(tokens, 'ether')
          );
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
          console.log('User Info', obj.debt);

          var claimabletokens = web3.utils.toBN(obj.debt).toString();
          setclaimableTokens(
            Number(web3.utils.fromWei(claimabletokens, 'ether'))
          );

          var userinvested = web3.utils.toBN(obj.totalInvestedETH).toString();
          setuserInvested(Number(web3.utils.fromWei(userinvested, 'ether')));
        });

      // check wallet approved or not
      contract.methods
        .existingUser(address)
        .call()
        .then((value) => {
          console.log('approved', value);
          setwalletapproved(value);
        });

      // get User BNB balance
      web3.eth.getBalance(address).then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setuserBNBbalance(Number(web3.utils.fromWei(tokens, 'ether')));
        window.sessionStorage.setItem(
          'userBNB',
          web3.utils.fromWei(tokens, 'ether')
        );
      });
    }
  }

  function progressbarApis() {


    const web3 = new Web3(chainRpcs[activePool.chain]);

    var contractABI = BSCBAYICOabi;
    var contractAddress = activePool.contractAddress;
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // get BNB balance of ICO
    contract.methods
      .totalBNBraise()
      .call()
      .then((amount) => {
        //  console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setraisedBNB(Number(web3.utils.fromWei(tokens, 'ether')));
      });


    // get total Users
    contract.methods
      .totalUsers()
      .call()
      .then((totalusers) => {
        // console.log("totalusers", totalusers);
        settotalUsers(totalusers);
      });


    contract.methods
      .tokensForDistribution()
      .call()
      .then((amount) => {
        // console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        const alloctkn = Number(web3.utils.fromWei(tokens, 'ether'));
        console.log("max", MaxDistributedTokens);
        if (MaxDistributedTokens > 0) {
          const icopercent = ((alloctkn / MaxDistributedTokens) * 100).toFixed(
            2
          );
          console.log("icopercent", icopercent);
          setICOcompletePercentage(icopercent);
        }
      });

      let currentTime = new Date();
      let currentTimeData = Number(Date.parse(currentTime) / 1000);

      if (currentTimeData < StartTime) {
        // console.log("1");
        setstatus('Upcoming');

      } else if (
        currentTimeData < EndTime &&
        Number(ICOcompletePercentage) != 100
      ) {
        // console.log("2");
        setstatus('Ongoing');
      } else if (currentTimeData > EndTime) {
        // console.log("3");
        setstatus('Closed');
      }
  }

  useEffect(() => {
    if (allocatedToken && MaxDistributedTokens) {
      const icopercent = (
        (allocatedToken / MaxDistributedTokens) *
        100
      ).toFixed(2);
      setICOcompletePercentage(icopercent);
    }
  }, [allocatedToken, MaxDistributedTokens]);

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
  //       "0x32f1cf65767228e95bedfF347c2B0F3D78973F83",
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
    setButtonLoading(true);
    const web3 = await contractService.getWeb3Client();

    if (value === '' || value === 0) {
      let msg = `Please Enter Value`;
      settxMessage(msg);
      setModalShow(true);
      setButtonLoading(false);
    } else if (
      Number(value) < Minallocation &&
      remainingallocation === Maxallocation
    ) {
      let msg = `Enter Value Greater than Minimum Investment Amount`;
      settxMessage(msg);
      setModalShow(true);
      setButtonLoading(false);
    } else if (Number(value) > remainingallocation) {
      let msg = `Enter Value less than Maximum Investment Amount`;
      settxMessage(msg);
      setModalShow(true);
      setButtonLoading(false);
    } else if (round === 0 && eligibility === false) {
      let msg = `You are not Whitelisted`;
      settxMessage(msg);
      setModalShow(true);
      setButtonLoading(false);
    } else {
      if (web3) {
        try {
          var contractABI = BSCBAYICOabi;
          var contractAddress = activePool.contractAddress;
          var contract = new web3.eth.Contract(contractABI, contractAddress);
          const gasPrice = await web3.eth.getGasPrice();

          let amnt = web3.utils.toHex(
            web3.utils.toWei(value.toString(), 'ether')
          );
          console.log('amnt', amnt);

          contract.methods
            .Invest()
            .send({
              from: address,
              value: amnt,
              gasPrice: web3.utils.toHex(gasPrice * 1.6),
            })
            .then(function (receipt) {
              console.log(receipt);

              if (receipt.status) {
                let msg = `Congratulations ! Your Participation In Presale Has Been Successful.\n You have Invested ${value} BNB amounting to allocation of ${
                  Number(value) / Number(tokenPrice)
                } BSCB .`;
                setSuccessPageReload('sucess');
                settxMessage(msg);
                setModalShow(true);
                setButtonLoading(false);

                // alert("Transaction Success");
              } else {
                settxMessage('Transaction Failed');
                setModalShow(true);
                setButtonLoading(false);
                // alert("Transaction Failed");
              }
            })
            .catch((e) => {
              console.log('error is', e);
              settxMessage('Transaction Failed!');
              setModalShow(true);
              setButtonLoading(false);
              //  alert("Transaction Failed!");
              //  window.location.reload();
            });
        } catch (err) {
          // console.log("err",err);
          settxMessage('Transaction Failed!');
          setModalShow(true);
          setButtonLoading(false);
          // alert("Transaction Failed!");
        }
      } else {
        settxMessage('Change network to binance');
        setModalShow(true);
        setButtonLoading(false);
        // alert("Change network to binance");
      }
    }
  };

  const claim = async () => {
    setButtonLoading(true);
    const web3 = await contractService.getWeb3Client();

    if (web3) {
      try {
        var contractABI = BSCBAYICOabi;
        var contractAddress = activePool.contractAddress;
        var contract = new web3.eth.Contract(contractABI, contractAddress);
        const gasPrice = await web3.eth.getGasPrice();

        console.log('Claim called ==>');

        let redeemedtokens = claimableTokens;

        contract.methods
          .claim()
          .send({ from: address, gasPrice: web3.utils.toHex(gasPrice * 1.6) })
          .then(function (receipt) {
            console.log(receipt);

            if (receipt.status) {
              setSuccessPageReload('sucess');
              setclaimableTokens(0);
              settxMessage('');
              setModalShow(true);
              // alert("Transaction Success");
              settxMessage(
                `Awesome ! You Have Successfully Claimed ${redeemedtokens} BSCB Tokens !`
              );
              setButtonLoading(false);
            } else {
              settxMessage('Transaction Failed');
              setModalShow(true);
              // alert("Transaction Failed");
              setButtonLoading(false);
            }
          })
          .catch((e) => {
            console.log('error is', e);
            settxMessage('Transaction Failed!');
            setModalShow(true);
            setButtonLoading(false);
            //  alert("Transaction Failed!");
            //  window.location.reload();
          });
      } catch {
        settxMessage('Transaction Failed!');
        setModalShow(true);
        setButtonLoading(false);
        // alert("Transaction Failed!");
      }
    } else {
      settxMessage('Change network to binance');
      setModalShow(true);
      setButtonLoading(false);
      // alert("Change network to binance");
    }
  };

  useEffect(() => {
    const loginType = localStorage.getItem('loginType');
    let provider =
      window.ethereum || window.BinanceChain || Web3.givenProvider || loginType;

    if (typeof provider !== 'undefined' && address) {
      if (loginType === 'walletconnect') {
        console.log('acc');

        const wprovider = new WalletConnectProvider({
          rpc: {
            56: 'https://bsc-dataseed.binance.org/',
            97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
          },
        });

        wprovider.on('accountsChanged', async function (accounts) {
          selectedAccount = accounts[0];
          address = selectedAccount;
          //  window.ethereum.eth.requestAccounts();
          console.log('acc', selectedAccount);
          window.sessionStorage.setItem('walletAddress', selectedAccount);

          window.location.reload();
        });
      } else {
        window.ethereum.on('accountsChanged', async function (accounts) {
          const web3 = new Web3(
            new Web3.providers.HttpProvider(
              'https://data-seed-prebsc-2-s1.binance.org:8545/'
            )
          );

          selectedAccount = accounts[0];
          address = selectedAccount;
          //  window.ethereum.eth.requestAccounts();
          console.log('acc', selectedAccount);
          window.sessionStorage.setItem('walletAddress', selectedAccount);

          window.location.reload();
        });

        window.ethereum.on('chainChanged', (chainId) => {
          console.log('chainId', chainId);
          console.log('type of chainId', typeof chainId);

          if (chainId != '0x61') {
            settxMessage('Please Connect to "Binance Smart Chain Network"');
            setModalShow(true);
          } else {
            window.location.reload();
          }
        });
      }
    }
    web3apis();
  }, [address]);

  useEffect(() => {
    const interval = setInterval(() => {
      progressbarApis();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // console.log("ICO",ICOcompletePercentage);

  const oneBNBprice = 1 / tokenPrice;
  // console.log("oneBNBprice", oneBNBprice);

  //time
  let currentTime = new Date();
  let currentTimeData = Number(Date.parse(currentTime) / 1000);

  // if (currentTimeData < StartTime) {
  //   activePool.status = 'Upcoming';
  // } else if (
  //   currentTimeData < EndTime &&
  //   Number(ICOcompletePercentage) != 100
  // ) {
  //   activePool.status = 'Ongoing';
  // } else if (currentTimeData > EndTime) {
  //   activePool.status = 'Closed';
  // }

  return (
    <Container as='section' fluid='xxl' className='upcoming-pool-banner'>
      <Container>
        <Row className='relative'>
          <Col lg={7} md={7} className='left-section'>
            <div className='icon-box-incupad'>
              <span className='icon-box-incupad-span'>
                <img
                  src={`../../${activePool.img}`}
                  alt={activePool.title}
                  height='55px'
                />
              </span>
            </div>
            <h2>{activePool.title}</h2>
            <p>{activePool.description}</p>
            <div className='social_icons'>
              {activePool.telegramlink && (
                <a
                  href={activePool.telegramlink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src='../assets/social/telegram.png' alt='telegram' />
                </a>
              )}
              {activePool.twitterlink && (
                <a
                  href={activePool.twitterlink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src='../assets/social/twitter.png' alt='twiter' />
                </a>
              )}
              {activePool.redditlink && (
                <a
                  href={activePool.redditlink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src='../assets/social/reddit.png' alt='reddit' />
                </a>
              )}

              {activePool.discordlink && (
                <a
                  href={activePool.discordlink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src='../assets/social/audit.png' alt='audit' />
                </a>
              )}

              {activePool.websitelink && (
                <a
                  href={activePool.websitelink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src='../assets/social/website.png' alt='website' />
                </a>
              )}

              {activePool.auditlink && (
                <a href={activePool.auditlink} target='_blank' rel='noreferrer'>
                  <img src='../assets/social/audit.png' alt='audit' />
                </a>
              )}
              {activePool.instagramLink && (
                <a
                  href={activePool.instagramLink}
                  target='_blank'
                  rel='noreferrer'>
                  <img src='../assets/social/insta.png' alt='instagram' />
                </a>
              )}

              {/* <img src="../assets/telegram.png" alt="facebook" /> */}
              {/* <img src="../assets/linked-in.svg" alt="linkedin" /> */}
              {/* <img src="../assets/instagarm.svg" alt="instagram" /> */}
            </div>
          </Col>

          {!address ? (
            <Col lg={5} md={5}>
              <div className='right-section card_pools'>
                <div className='upper-right-section'>
                  <div className='button-section'>
                    <div className='upper-right-btn-one d-flex align-items-center justify-content-center fw-400'>
                      {activePool.allocationType}
                    </div>
                    <div className='upper-right-btn-two d-flex align-items-center justify-content-center fw-400 mobile_hide'>
                      {activePool.accessType}
                    </div>
                  </div>
                  <span className='d-flex align-items-center justify-content-center '>
                    {status}
                  </span>
                  <h3>
                    1 {activePool.allocationType} = {oneBNBprice.toFixed(0)}{' '}
                    {activePool.symbol}{' '}
                  </h3>

                  {/* <b style={{ color: 'white' }}>Starts In:</b>
                  <p>TBA</p> */}

                  {currentTimeData < StartTime ? (
                    <div className='timer_content'>
                      <span>Starts In: </span>
                      <Timer initialcount={StartTime - currentTimeData} />
                    </div>
                  ) : currentTimeData < EndTime &&
                    Number(ICOcompletePercentage) !== 100 ? (
                    <div className='timer_content'>
                      <span>Closes in:</span>
                      <Timer initialcount={EndTime - currentTimeData} />
                    </div>
                  ) : (
                    <div className='closed'>Closed</div>
                  )}
                </div>
                <div className='lower-right-section'>
                  <h5>Raised</h5>
                  <h4>
                    {raisedBNB.toFixed(0)} /{' '}
                    {(MaxDistributedTokens * tokenPrice).toFixed(0)}{' '}
                    {activePool.allocationType}
                  </h4>
                  <ProgressBar
                    now={ICOcompletePercentage}
                    className='progress-bar-section'
                    label={`${Math.round(ICOcompletePercentage)}%`}
                  />
                  <span>Participant : {totalUsers}</span>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <Button
                  className='btn btn-primary'
                  onClick={() => setShowConnect(true)}>
                  Connect Wallet
                </Button>
              </div>
              {/* { address ? <WalletDetails activePool={activePool} /> : <WalletDetails activePool={activePool}/> } */}
            </Col>
          ) : (
            // first banner on BSCBay
            <div className='col-lg-5 col-md-5 mt-5'>
              <Col xs={12} className='ongoing-upper-card'>
                <div className='d-flex flex-row justify-content-between'>
                  <div className='d-flex flex-row align-items-center justify-content-center ongoing-upper-card-left'>
                    <span>{activePool.allocationType}</span>
                    <span style={{ textTransform: 'capitalize' }}>
                      {status}
                    </span>
                  </div>
                  <span className='ongoing-upper-card-right'>
                    1 {activePool.allocationType} = {oneBNBprice.toFixed(0)}{' '}
                    {activePool.symbol}{' '}
                  </span>
                </div>
                <div className='d-flex flex-row justify-content-center'>
                  <div className='ongoing-lower-card text-white w-100'>
                    <div className='d-flex justify-content-center'>
                      <div className='text-white d-flex align-items-center flex-row'>
                        {currentTimeData < StartTime ? (
                          <div className='timer_content'>
                            <span> Start in: </span>
                            <Timer initialcount={StartTime - currentTimeData} />
                          </div>
                        ) : currentTimeData < EndTime &&
                          Number(ICOcompletePercentage) !== 100 ? (
                          <div className='timer_content'>
                            <span> Closes in: </span>
                            <Timer initialcount={EndTime - currentTimeData} />
                          </div>
                        ) : (
                          <>
                            <span> Closed</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-end raised mt-2'>
                      <span className='text-primary'>
                        Raised: {raisedBNB.toFixed(1)} BNB /{' '}
                        {(MaxDistributedTokens * tokenPrice).toFixed(0)} BNB
                      </span>
                    </div>
                    <div>
                      <ProgressBar
                        now={ICOcompletePercentage}
                        className='pro-bar-section'
                        label={`${Math.round(ICOcompletePercentage)}%`}
                      />
                    </div>
                    <div>
                      <div className='d-flex flex-row align-items-center justify-content-between ongoing-upper-last-section mt-2'>
                        <span>Swap Progress</span>
                        {/* <span>Total Raised :150/500 BNB</span> */}
                        <span>Participants : {totalUsers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Second Banner on BSCBay */}
              <Col xs={12} className='ongoing-lower-card mt-2'>
                {/* {status !== 'closed' ? ( */}
                <div className='d-flex flex-column justify-content-between'>
                  <div className='d-flex flex-row justify-content-between text-white'>
                    <span className='pb-2'>
                      BSCB Balance: {userTokenalance.toFixed(0)} BSCB
                    </span>
                    <span> BNB Balance: {userBNBbalance.toFixed(1)} BNB</span>
                  </div>
                  <div className='d-flex flex-row justify-content-between text-white'>
                    {/* <span className="pb-2">Wallet Address: {address}</span> */}
                    <span className='pb-2'>
                      User Invested: {userInvested.toFixed(1)} BNB
                    </span>
                    <span>
                      {' '}
                      Remaining allocation: {remainingallocation.toFixed(2)} BNB
                    </span>
                  </div>
                  {/* <div className='d-flex flex-row justify-content-between text-white'>
                    <span>
                      {' '}
                      Current Tier:{' '}
                      <span className='text-warning ms-1'>TBA</span>
                    </span>
                  </div> */}
                  <br></br>
                  {userInvested > 0 && claimableTokens === 0 ? (
                    <div className='d-flex flex-row justify-content-between text-white'>
                      <span>
                        <span className='text-warning ms-1'>
                          {' '}
                          Tokens Claimed:{' '}
                          {(userInvested / tokenPrice).toFixed(0)}
                        </span>
                      </span>
                    </div>
                  ) : (
                    <div className='d-flex flex-row justify-content-between text-white'>
                      <span>
                        {' '}
                        Claimable Tokens:{' '}
                        <span className='text-warning ms-1'>
                          {claimableTokens.toFixed(0)} BSCBay
                          <span className='tooltips mx-2'>
                            <Tooltip />
                          </span>
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                {currentTime > EndTime && round === 0 && (
                  <div className='ongoing-lower-card-last-section'>
                    {eligibility ? (
                      <span>Wallet Whitelisted: Yes</span>
                    ) : (
                      <span>Wallet Whitelisted: No</span>
                    )}

                    <span className='pointer' onClick={() => setSearch(true)}>
                      Check Other Wallets For Whitelist
                    </span>
                  </div>
                )}
              </Col>

              {!claimenabled &&
                currentTimeData < EndTime &&
                currentTimeData > StartTime && (
                  <div className='invest__wrapper flexCenter w-100 mt-3'>
                    <div className='invest_input'>
                      <input
                        type='text'
                        placeholder='Enter Amount'
                        value={value}
                        onChange={(e) => setvalue(e.target.value)}
                      />
                      <div
                        className='invest_max'
                        onClick={() => setvalue(remainingallocation)}>
                        Max
                      </div>
                    </div>

                    {buttonLoading ? (
                      <button
                        className='btn btn-primary btn-round'
                        variant='primary'
                        disabled>
                        <Spinner
                          as='span'
                          animation='border'
                          size='sm'
                          role='status'
                          aria-hidden='true'
                        />
                        <span className='visually-hidden'>Invest...</span>
                      </button>
                    ) : (
                      <>
                        <button
                          className='btn btn-primary btn-round'
                          onClick={invest}>
                          Invest
                        </button>
                      </>
                    )}
                  </div>
                )}

              {claimenabled &&
                (buttonLoading ? (
                  <div className='d-flex justify-content-center mt-2'>
                    <button
                      className='incupadButton_invest btn_primary btn_round'
                      variant='primary'
                      disabled>
                      <Spinner
                        as='span'
                        animation='border'
                        size='sm'
                        role='status'
                        aria-hidden='true'
                      />
                      <span className='visually-hidden'>Claim...</span>
                    </button>
                  </div>
                ) : (
                  claimableTokens > 0 && (
                    <div className='d-flex justify-content-center mt-3'>
                      <button
                        onClick={() => claim()}
                        className='btn btn_primary mx-3'>
                        Claim Tokens
                      </button>
                    </div>
                  )
                ))}
            </div>
          )}

          <div className='arrow_containter mobile_hide'>
            <a href='#poolsinformation'>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <p className='text-primary'>View Details</p>
                <div className='arrow_down'></div>
              </div>
            </a>
          </div>
        </Row>
      </Container>
      <LaunchStepThree show={showConnect} onHide={onHideHandler} />
      <AlertModal
        show={modalShow}
        onHide={setModalShow}
        successpagereload={successPageReload}>
        <p>{txMessage}</p>
      </AlertModal>
      <SearchPool
        contractadd={activePool.contractAddress}
        show={search}
        onHide={() => {
          console.log('search on hide click ==>');
          setSearch(false);
        }}
      />
    </Container>
  );
};

export default IncupadPoolsBanner;
