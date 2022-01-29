import React from "react";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const HomeSectionRoadmap = () => {
  return (
    <section className="py-5 bg-b-1">
      <Container>
        <div className="text-center">
          <ScrollAnimation
            animateIn="zoomInDown"
            animateOut="zoomOutDown"
            scrollableParentSelector="#scrolly-main"
          >
            <div className="heading-primary-2">Roadmap</div>
            <p className="mt-3 mb-4 px-0 col-md-11 col-lg-10 mx-auto">
              We at BSCBay are building a suite of tools designed to help
              millions of people leapfrog traditional banks and go straight to
              DeFi. We’re also making weekly donations through two world-class
              charities. Plus look out for community events, merchandise, and
              more coming your way soon!
            </p>
          </ScrollAnimation>
          <div className="px-0 col-lg-10 mx-auto mb-5 pb-md-5">
            {/* Box-1 */}
            <div className="row justify-content-center pt-4">
              <div className="col col-md-5 order-md-1 d-none d-md-block">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutLeft"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-end heading-secondary-2 fw-600">
                    Q4 2021
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-2 px-0 order-first order-md-2 col-md-1 position-relative">
                <div>
                  <img src="/assets/timeline.png" alt="timeline" />
                </div>
                <div
                  className="bg-primary h-100 mx-auto"
                  style={{ width: 4 }}
                />
              </div>
              <div className="col col-md-5 order-md-3">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutRight"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-start mb-3 heading-secondary-2 fw-600 mb d-md-none">
                    Q4 2021
                  </div>
                  <div className="timeline-box bg-secondary p-3 text-start">
                    <div className="heading-secondary-2 fw-600 text-primary mb-1">
                      Phase 1
                    </div>
                    <div className="heading-secondary-3 fw-600 text-white mb-2">
                      Inception
                    </div>
                    <ul className="ps-3 text-small text-white-3">
                      <li className="my-1">Project Brainstorming</li>
                      <li className="my-1">Ecosystem Design</li>
                      <li className="my-1">Smart Contract Design</li>
                      <li className="my-1">Whitepaper</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* Box-2 */}
            <div className="row justify-content-center pt-4">
              <div className="col col-md-5 order-md-1">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutLeft"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-start mb-3 heading-secondary-2 fw-600 mb d-md-none">
                    Jan- Feb 2022
                  </div>
                  <div className="timeline-box bg-secondary p-3 text-start">
                    <div className="heading-secondary-2 fw-600 text-primary mb-1">
                      Phase 2
                    </div>
                    <div className="heading-secondary-3 fw-600 text-white mb-2">
                      Pre-Launch
                    </div>
                    <ul className="ps-3 text-small text-white-3">
                      <li className="my-1">Smart Contract Deployment</li>
                      <li className="my-1">Platform Launch</li>
                      <li className="my-1">External KYC and Audit</li>
                      <li className="my-1">Partnerships Development</li>
                      <li className="my-1">
                        Marketing Campaigns - (Influencers, Youtubers, Twitter,
                        Poocoin, Telegram, targeted ads, etc)
                      </li>
                      <li className="my-1">Daily Giveaways and Lotteries</li>
                      <li className="my-1">Presale and Pancakeswap Listing</li>
                      <li className="my-1">Dev Team Expansion</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-2 px-0 order-first order-md-2 col-md-1 position-relative">
                <div>
                  <img src="/assets/timeline.png" alt="timeline" />
                </div>
                <div
                  className="bg-primary h-100 mx-auto"
                  style={{ width: 4 }}
                />
              </div>
              <div className="col col-md-5 order-md-3 d-none d-md-block">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutRight"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-start heading-secondary-2 fw-600">
                    Jan- Feb 2022
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* Box-3 */}
            <div className="row justify-content-center pt-4">
              <div className="col col-md-5 order-md-1 d-none d-md-block">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutLeft"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-end heading-secondary-2 fw-600">
                    Feb-Apr 2022
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-2 px-0 order-first order-md-2 col-md-1 position-relative ">
                <div>
                  <img src="/assets/timeline.png" alt="timeline" />
                </div>
                <div
                  className="bg-primary h-100 mx-auto"
                  style={{ width: 4 }}
                />
              </div>
              <div className="col col-md-5 order-md-3">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutRight"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-start mb-3 heading-secondary-2 fw-600 mb d-md-none">
                    Feb-Apr 2022
                  </div>
                  <div className="timeline-box bg-secondary p-3 text-start">
                    <div className="heading-secondary-2 fw-600 text-primary mb-1">
                      Phase 3
                    </div>
                    <div className="heading-secondary-3 fw-600 text-white mb-2">
                      Post Launch
                    </div>
                    <ul className="ps-3 text-small text-white-3">
                      <li className="my-1">Listing on CMC and CG</li>
                      <li className="my-1">Incupad and Dexpad launch</li>
                      <li className="my-1">IDO for external projects</li>
                      <li className="my-1">Exclusive NFT mints</li>
                      <li className="my-1">CEX Listings</li>
                      <li className="my-1">
                        Liquidity and Token lockers deployment
                      </li>
                      <li className="my-1">Token minters deployment</li>
                      <li className="my-1">
                        Accelerated Marketing (tie ups with Big influencers (1
                        mil+ following)
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            {/* Box-4 */}
            <div className="row justify-content-center pt-4">
              <div className="col col-md-5 order-md-1">
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  animateOut="bounceOutLeft"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-start mb-3 heading-secondary-2 fw-600 mb d-md-none">
                    Apr-June 2022
                  </div>
                  <div className="timeline-box bg-secondary p-3 text-start">
                    <div className="heading-secondary-2 fw-600 text-primary mb-1">
                      Phase 4
                    </div>
                    <div className="heading-secondary-3 fw-600 text-white mb-2">
                      Growth Mode
                    </div>
                    <ul className="ps-3 text-small text-white-3">
                      <li className="my-1">Charts and Analytics Launch</li>
                      <li className="my-1">BSC Swap launch</li>
                      <li className="my-1">Governance Functionality Pools</li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
              <div className="col-2 px-0 order-first order-md-2 col-md-1 position-relative">
                <div>
                  <img src="/assets/timeline.png" alt="timeline" />
                </div>
                <div
                  className="bg-primary h-100 mx-auto"
                  style={{ width: 4 }}
                />
              </div>
              <div className="col col-md-5 order-md-3 d-none d-md-block">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutRight"
                  scrollableParentSelector="#scrolly-main"
                >
                  <div className="text-start heading-secondary-2 fw-600">
                    Apr-June 2022
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeSectionRoadmap;
