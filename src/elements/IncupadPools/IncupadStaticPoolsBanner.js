import { Container, Row, Col, ProgressBar, Spinner } from 'react-bootstrap';
import SocialLink from '../../components/SocialLink';
import { currentTimeDate } from '../../utils/helper';
import Timer from '../../components/Timer';
import WalletConnect from '../../components/WalletConnect';
import Tooltip from '../../components/Tooltip';
 
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { chainRpcs, chainIds } from '../../chainRPCs';
import ERC20abi from '../../shared/BSCBAYabi.json';

function IncupadStaticPoolsBanner({ activePool }) {
  const {
    img,
    title,
    description,
    twitterlink,
    redditlink,
    telegramlink,
    discordlink,
    websitelink,
    auditlink,
    instagramLink,
    allocationType,
    accessType,
    status,
    oneBNBprice,
    StartTime,
    EndTime,
    ICOcompletePercentage,
    hardCap,
    tokenPrice,
    raisedBNB,
    userInvested,
    remainingallocation,
    claimableTokens,
  } = activePool;

  const [userBNBbalance, setuserBNBbalance] = useState(0);
  const [userTokenalance, setuserTokenalance] = useState(0);

  const address = window.sessionStorage.getItem('walletAddress');

  
  function web3apis() {

    const web3 = new Web3("https://bsc-dataseed.binance.org/");

    if (address) {
      var contractTokenABI = ERC20abi;
      var contractTokenAddress = "0xaa3387B36a4aCd9D2c1326a7f10658d7051b73a6";
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

 
useEffect(() => {
  web3apis()
})

  return (
    <Container as='section' fluid='xxl' className='upcoming-pool-banner'>
      <Container>
        <Row className='relative'>
          <Col lg={7} md={7} className='left-section'>
            <div className='icon-box-incupad'>
              <span className='icon-box-incupad-span'>
                <img src={img} alt={title} height='55px' />
              </span>
            </div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='social_icons'>
              <SocialLink slink={telegramlink} name='telegram' />
              <SocialLink slink={twitterlink} name='twitter' />
              <SocialLink slink={redditlink} name='reddit' />
              <SocialLink slink={discordlink} name='audit' />
              <SocialLink slink={websitelink} name='website' />
              <SocialLink slink={auditlink} name='audit' />
              <SocialLink slink={instagramLink} name='insta' />
            </div>
          </Col>
          {!address ? (
            <Col lg={5} md={5}>
              <div className='right-section card_pools'>
                <div className='upper-right-section'>
                  <div className='button-section'>
                    <div className='upper-right-btn-one d-flex align-items-center justify-content-center fw-400'>
                      {allocationType}
                    </div>
                    <div className='upper-right-btn-two d-flex align-items-center justify-content-center fw-400 mobile_hide'>
                      {accessType}
                    </div>
                  </div>
                  <span className='d-flex align-items-center justify-content-center '>
                    {status}
                  </span>
                  <h3>
                    1 {activePool.allocationType} = {oneBNBprice} {' '}
                    {activePool.symbol}{' '}
                  </h3>
                  *
                  {/* <b style={{ color: 'white' }}>Starts In:</b>
                  <p>TBA</p> */}
         
                    <div className='closed'>Upcoming</div>
                  
                </div>
                <div className='lower-right-section'>
                  <h5>Raised</h5>
                  <h4>
                    {raisedBNB.toFixed(0)} / {(hardCap).toFixed(0)}{' '}
                    {activePool.allocationType}   
                  </h4>
                  <ProgressBar
                    now={ICOcompletePercentage}
                    className='progress-bar-section'
                    label={`${Math.round(ICOcompletePercentage)}%`}
                  />
                  <span>Participant : 0</span>
                </div>
              </div>
              <div className='d-flex justify-content-center mt-4'>
                <WalletConnect />
              </div>
              {/* { address ? <WalletDetails activePool={activePool} /> : <WalletDetails activePool={activePool}/> } */}
            </Col>
          ) : (
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
                  
                            <span> Upcoming</span>

                      </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-end raised mt-2'>
                      <span className='text-primary'>
                        Raised: {raisedBNB.toFixed(1)} BNB /{' '}
                        {(hardCap).toFixed(0)} BNB
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
                        <span>Participants : 0</span>
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
                      Remaining allocation: {remainingallocation} BNB
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
   
                    <div className='d-flex flex-row justify-content-between text-white'>
                      <span>
                        {' '}
                        Claimable Tokens:{' '}
                        <span className='text-warning ms-1'>
                          {activePool.symbol}
                          <span className='tooltips mx-2'>
                            {/* <Tooltip /> */}
                          </span>
                        </span>
                      </span>
                    </div>

                </div>

                {/* {currentTime > EndTime && round === 0 && (
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
                )} */}
              </Col>
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
    </Container>
  );
}

export default IncupadStaticPoolsBanner;
