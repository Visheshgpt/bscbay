import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeSectionThree = () => {
  const dataArr = [
    {
      title: `Auto $USDT Distribution`,
      text: `Earn USDT through rewards; the powerful investment tokenomics of BSCBay allow investors to automatically get rewards in USDT on their investments every 4 hours.`,
    },
    {
      title: `LaunchPad`,
      text: `LaunchPad allows New Projects to showcase new crypto products and attract investors. Each projects launched on the LaunchPad would be KYCd & Liquidity Locked. We would help the project in various steps including - Audit, Marketing, Investments & Future Course of Actions to ensure its success.
      `,
    },
    {
      title: `DEXPad`,
      text: `DEXPad allows New Projects to showcase new crypto products and attract investors. As a token developer, our technology can serve you to launch your project. As an investor, feel free to browse the latest projects, read carefully the reports from external providers, and most importantly never forget your own due diligence prior to any form of participation. `,
    },
    {
      title: `Liquidity & Token Lockers`,
      text: `Project developers are welcome to use our security feature allowing them to lock their liquidity provider & team tokens. Locking liquidity is becoming a standard in the DeFi industry and BSCBay brings the most secured lockers in place. We bring both Liquidity & Token Locker for developers to use.
      `,
    },
    {
      title: `Token Mint Factory`,
      text: `Bscbay Token Factory will enable users to use this services where there will be No code requirement to launch their own token, simply navigate through the terminal, design token and launch with just a few clicks.  We will offer standard and custom token development services.`,
    },
    {
      title: `Charts & Analytics`,
      text: `Charts for every token launched via BSC network available on your fingertips. These open up the avenues for Promotions, Marketing & opportunities to invest`,
    },
  ];

  return (
    <section className="bg-color-homepage-section-two text-white">
      <Container fluid="xxl" className="px-0 position-relative">
        <img
          className="position-absolute bottom-0 start-0 w-auto-sm-100"
          src="./assets/bg-5.png"
          alt=".."
        />
        <img
          className="position-absolute top-0 end-0 w-auto-sm-100"
          src="./assets/bg-6.png"
          alt=".."
        />
        <Container className="py-5 z-10">
          <div
            id="investment"
            className="px-0 col-xl-10 mx-auto scroll-settings"
          >
           
              <div className="heading-secondary-3 text-center text-white-2 mb-5">
                <span className="text-primary mx-1">Strengthen</span>your
                project and
                <span className="text-primary mx-1">Reward</span>your
                communities using our services.
              </div>
              <Row className="justify-content-center" style={{ gap: 20 }}>
                {dataArr.map((data, i) => (
                  <div
                    key={i}
                    className="box-2 bg-secondary py-4 d-flex flex-column align-items-baseline icon-hover cursor-pointer"
                  >
                    <img
                      className="d-block"
                      height={45}
                      src={`/assets/t-icon-${i}.svg`}
                      alt="..."
                    />
                    <div className="my-2 heading-secondary-3">{data.title}</div>
                    <div className="scroll-box flex-fill">
                      <p className="d-block mb-0 homeSection-three-para">{data.text}</p>
                    </div>
                    <div className="text-center pt-3 mt-auto w-100">
                      <img
                        className="d-block mx-auto"
                        height={8}
                        src="./assets/arrow-down.png"
                        alt="arrow-down"
                      />
                    </div>
                  </div>
                ))}
              </Row>
              <div className="border-top border-secondary mt-5 pt-4">
                <div className="px-0 col-10 col-lg-12 col-xxl-11 mx-auto">
                  <Row className="row-cols-md-2 row-cols-lg-3 justify-content-center">
                    <div className="p-2">
                  
                      <a href = "https://github.com/solidproof/projects/blob/main/BSCBay/SmartContract_Audit_Solidproof_BSCBay.pdf" target="_blank" className="btn-1 button-1 btn-color w-100">
                        
                        <img height={20} src="./assets/file-0.png" alt="file" />
                        <span className="ms-2 text-uppercase fw-bold text-small">
                            Audit Reports 
                        </span>
                        <img
                          className="ms-2"
                          height={13}
                          src="./assets/arrow-2.png"
                          alt="arrow"
                        />
                      </a>
                   
                    </div>
                    <div className="p-2">
                      <Link
                        className="btn-1 button-1 btn-color w-100"
                        onClick={
                          "https://bscscan.com/address/0xaa3387b36a4acd9d2c1326a7f10658d7051b73a6"
                        }
                      >
                        <img height={20} src="./assets/file-1.png" alt="file" />
                        <span className="ms-2 text-uppercase fw-bold text-small">
                          Official Smart Contract
                        </span>
                        <img
                          className="ms-2"
                          height={13}
                          src="./assets/arrow-2.png"
                          alt="arrow"
                        />
                      </Link>
                    </div>
                    <div className="p-2">
                      <Link className="btn-1 button-1 btn-color w-100">
                        <img height={20} src="./assets/file-2.png" alt="file" />
                        <span className="ms-2 text-uppercase fw-bold text-small">
                          Liquidity Locks
                        </span>
                        <img
                          className="ms-2"
                          height={13}
                          src="./assets/arrow-2.png"
                          alt="arrow"
                        />
                      </Link>
                    </div>
                  </Row>
                </div>
              </div>
           
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default HomeSectionThree;
