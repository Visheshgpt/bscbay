import { useState, useEffect } from 'react';

import Web3 from 'web3';
import { Col, Container, Row } from 'react-bootstrap';
import video from '../../assets/video/video.mp4';

import { chainRpcs } from '../../chainRPCs';
import { converttoEther, getUserBSCBAYBalance } from '../../utils/helper';
import BSCBAYICOabi from '../../shared/BSCBAYICO.json';

function DexpadInformation({ activePool }) {
  const [Minallocation, setMinallocation] = useState(0);
  const [Maxallocation, setMaxallocation] = useState(0);
  const [tokenPrice, settokenPrice] = useState(0);
  // const [allocatedToken, setallocatedToken] = useState(0);


  function web3apis() {
   
    const web3 = new Web3(chainRpcs[activePool.chain]);
   
    var contractABI = BSCBAYICOabi;
    var contractAddress = activePool.contractAddress;
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    // // get DISTRIBUTED TOKENS
    // contract.methods
    //   .tokensForDistribution()
    //   .call()
    //   .then((amount) => {
    //     setallocatedToken(converttoEther(web3, amount, activePool.decimals));
    //   });

    // user MIN allocation
    contract.methods
      .minInvestment()
      .call()
      .then((amount) => {
        setMinallocation(converttoEther(web3, amount, 18));
      });

    // user MAX allocation
    contract.methods
      .maxInvestment()
      .call()
      .then((amount) => {
        setMaxallocation(converttoEther(web3, amount, 18));
      });

    // token Price
    contract.methods
      .tokenPrice()
      .call()
      .then((amount) => {
        settokenPrice(converttoEther(web3, amount, 18));
      });
  }

  useEffect(() => {
    web3apis();
  });
  




  return (
    <Container
      as='section'
      fluid='xxl'
      className='pool-information-section'
      id='poolsinformation'>
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Pool Information</h2>
          </Col>
          <Col xs={12} lg={6}> 
            <div className='pool-information-card'>
              <div>
                <span>SALE DATE</span>
                <span>{activePool.saleDate}</span>
              </div>
              <div>
                <span>MIN. ALLOCATION</span>
                <span>{Minallocation} BNB </span>
                {/* <span>2.5 BNB</span> */}
              </div>
              <div>
                <span>MAX. ALLOCATION</span>
                <span>{Maxallocation} BNB</span>
                {/* <span>5 BNB</span> */}
              </div>
              <div>
                <span>TOKEN PRICE</span>
                <span>{tokenPrice} BNB</span>
                {/* <span>0.00002777</span> */}
              </div>
              <div>
                <span>ACCESS TYPE</span>
                <span>{activePool.accessType}</span>
                {/* <span>TBA</span> */}
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className='pool-information-card'>
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
                {/* <span>TBA</span> */}
              </div>
              <div>
                <span>ADDRESS</span>
                <span>{activePool.outputTokenaddress}</span>
                {/* <span>TBA</span> */}
              </div>
            </div>
          </Col>
        </Row>{' '}
        <Row className='mt-2 pt-2'>
          <Col xs={12} lg={6} className='about-section'>
            <h2>About the Project</h2>

            {activePool.about.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </Col>

          <Col xs={6} lg={6} className='project-video-section'>
          {activePool.videolink && <> <h2 className='mb-3'>Project Clip</h2> 
            <div className='videoContainer mt-2 '>
              <video
                className='incupad-pool-video responsive-iframe '
                src={activePool.videolink}
                controls
                // frameborder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div></> }
          </Col>

          <Col xs={12}></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default DexpadInformation;
