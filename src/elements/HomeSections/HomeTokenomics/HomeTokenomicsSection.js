import { useState } from 'react';
import { Container, ProgressBar, Tabs, Tab } from 'react-bootstrap';
import HomeTokenomicsChart from './HomeTokenomicsChart';

const HomeTokenomicsSection = () => {
  const [key, setKey] = useState('tokenomics');
  return (
    <section className='bg-b-1'>
      <Container
        fluid='xxl'
        className='px-0 py-4 position-relative tokenomics_tabs'>
        <div className='heading-primary-2 d-flex align-items-center justify-content-center'>
          Investment Tokenomics
        </div>
        <Tabs
          id='controlled-tab-example'
          activeKey={key}
          onSelect={(k) => setKey(k)}>
          <Tab eventKey='tokenomics' title='Tokenomics'>
            <HomeTokenomicsChart />
          </Tab>
          <Tab eventKey='rewards' title='Rewards'>
            <img
              className='position-absolute bottom-0 end-0 w-auto-sm-100 height-1'
              src='./assets/bg-3.gif'
              alt='..'
            />
            <Container className='py-5 z-10'>
              <div>
                {/* Heading Start */}
                <div className='mb-4'>
                  <div className='heading-secondary-2 text-secondary'>
                    Unprecedented Velocity | Impeccable Reliability.
                  </div>
                </div>
                {/* Heading End */}
                <p className='px-0 col-xl-9 mb-4'>
                  <ul className='ps-3 homeSection-four-para'>
                    <li>
                      <b>$BSCB powers</b> the complete <b>BSCBay's ecosystem</b>{' '}
                      designed to strengthen the BSC network & various ongoing &
                      upcoming projects
                    </li>
                    <li>
                      <b>$BSCB works</b> on an autonomous frictionless yield
                      farming and liquidity generation protocol beautifully
                      designed to seamlessly integrate various parts of the
                      ecosystem.
                    </li>
                    <li>
                      For Investors, It's as simple as holding{' '}
                      <b> $BSCB tokens</b> in their wallet and getting{' '}
                      <b>Auto $USDT</b> rewards directly into their wallets.
                    </li>
                    <li>
                      <b>$BSCB is reward</b> distribution strategy works in the
                      following ways:
                    </li>
                  </ul>
                </p>
                {/* ==== */}
                <div className='d-flex mb-4 homeSection-four-para'>
                  <div>
                    <img
                      className='pe-4 object-fit-contain'
                      height={60}
                      width={65}
                      src='./assets/rewards-0.svg'
                      alt='..'
                    />
                  </div>
                  <div>
                    <div className='title-small fw-600 mb-1'>
                      Investment Dilution Rewards
                    </div>
                    <p className='mb-0'>
                      <ul className='navs flex-column'>
                        <li className='py-1'>
                          <img
                            className='pe-2'
                            height={12}
                            src='./assets/rewards-small.svg'
                            alt='..'
                          />
                          <span>
                            All Investors will pay 10% transaction fee
                          </span>
                        </li>
                        <li className='py-1'>
                          <img
                            className='pe-2'
                            height={12}
                            src='./assets/rewards-small.svg'
                            alt='..'
                          />
                          <span>
                            <b>4%</b> goes as auto $USDT rewards
                          </span>
                        </li>
                        <li className='py-1'>
                          <img
                            className='pe-2'
                            height={12}
                            src='./assets/rewards-small.svg'
                            alt='..'
                          />
                          <span>
                            <b>2%</b> goes to liquidity
                          </span>
                        </li>
                        <li className='py-1'>
                          <img
                            className='pe-2'
                            height={12}
                            src='./assets/rewards-small.svg'
                            alt='..'
                          />
                          <span>
                            <b>2%</b> is utilized for marketing budgets
                          </span>
                        </li>
                        <li className='py-1'>
                          <img
                            className='pe-2'
                            height={12}
                            src='./assets/rewards-small.svg'
                            alt='..'
                          />
                          <span>
                            <b>1%</b> will be used to Auto Buy-Back BSCB tokens
                            to sustain & grow BSCB price constantly.
                          </span>
                        </li>
                        <li className='py-1'>
                          <img
                            className='pe-2'
                            height={12}
                            src='./assets/rewards-small.svg'
                            alt='..'
                          />
                          <span>
                            <b>1%</b> will be held by team for development &
                            expansion
                          </span>
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                {/* ==== */}
                <div className='d-flex mb-4 px-0 col-lg-9 col-xl-8 col-xxl-7'>
                  <div>
                    <img
                      className='pe-4 object-fit-contain'
                      height={60}
                      width={65}
                      src='./assets/rewards-1.svg'
                      alt='..'
                    />
                  </div>
                  <div className='flex-fill'>
                    <div className='title-small fw-600 mb-1'>
                      Stake Holders Rewards (In Addition to Investment Dilution
                      Rewards)
                    </div>
                    <p className='mb-0'>
                      <ul className='navs flex-column'>
                        <li className='py-2'>
                          <div className='mb-1'>
                            ​<b>40%</b> Earnings from every project launched
                            will be distributed to investors
                          </div>
                          <ProgressBar variant='warning' now={50} />
                        </li>
                        <li className='py-2'>
                          <div className='mb-1'>
                            ​<b>40%</b> Earning of Via all Lock earnings will be
                            distributed to Investors
                          </div>
                          <ProgressBar variant='warning' now={50} />
                        </li>
                        <li className='py-2'>
                          <div className='mb-1'>
                            ​<b>30%</b> of Analytical Tie ups & Promotional
                            Earning will be distributed to Investors
                          </div>
                          <ProgressBar variant='warning' now={30} />
                        </li>
                        <li className='py-2'>
                          <div className='mb-1'>
                            ​<b>30%</b> of Mint Factory Earning will be
                            distributed to Investors.
                          </div>
                          <ProgressBar variant='warning' now={30} />
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </section>
  );
};

export default HomeTokenomicsSection;
