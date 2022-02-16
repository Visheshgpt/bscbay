import React from "react";
import { Head } from "../../components/Head";
import { Row, Col, Container } from "react-bootstrap";
import { InformationSidebar } from "./sections/InformationSidebar";
import InformationBox from "./sections/InformationBox";
import { ReactComponent as Icon0 } from "../../assets/ib-icon-0.svg";
import { ReactComponent as Icon1 } from "../../assets/ib-icon-1.svg";
import { ReactComponent as Icon2 } from "../../assets/ib-icon-2.svg";
import { ReactComponent as Icon3 } from "../../assets/ib-icon-3.svg";
import { ReactComponent as Icon4 } from "../../assets/ib-icon-4.svg";
import { useLocation } from "react-router-dom";
import { Navbar } from "../navbar/Navbar.jsx";

const InformationPage = () => {
  const { hash } = useLocation();

  React.useEffect(() => {}, [hash]);

  const [items] = React.useState([
    {
      id: "box-1",
      set: "#box-1",

      icon: <Icon0 />,
      title: "Auto USDT Distribution",
      text: `Earn USDT through rewards; the powerful investment tokenomics of BSCBay allow 
      investors to automatically get rewards in USDT on their investments every 4 hours.`,
    },
    {
      id: "box-3",
      set: "#box-3",
      icon: <Icon2 />,
      title: "IncuPad",
      text: `IncuPad allows New Projects to showcase new crypto products and attract investors. Each projects launched on the 
      IncuPad would be KYCd & Liquidity Locked. We would help the project in various steps 
      including - Audit, Marketing, Investments & Future Course of Actions to ensure its success.`,
    },
    {
      id: "box-4",
      set: "#box-4",
      icon: <Icon3 />,
      title: "DEXPad",
      text: `DEXPad allows New Projects to showcase new crypto products and attract investors. As a token developer, our 
      technology can serve you to launch your project. As an investor, feel free to browse the latest projects, read carefully 
      the reports from external providers, and most importantly never forget your own due diligence prior to any form of 
      participation. `,
    },
    {
      id: "box-5",
      set: "#box-5",
      icon: <Icon4 />,
      title: "Liquidity & Token Lockers",
      text: `Project developers are welcome to use our security feature allowing them to lock their liquidity provider & team tokens. Locking liquidity is becoming a standard in the DeFi industry and BSCBay brings the most secured lockers in place. We bring both Liquidity & Token Locker for
       developers to use.`,
    },
    {
      id: "box-6",
      set: "#box-6",
      icon: <Icon2 />,
      title: "Token Mint Factory",
      text: `Bscbay Token Factory will enable users to use this services where there will be No code requirement to launch their
       own token, simply navigate through the terminal, design token and launch with just a few clicks.  We will offer standard and 
       custom token development services.`,
    },
    {
      id: "box-7",
      set: "#box-7",
      icon: <Icon2 />,
      title: "Charts & Analytics",
      text: `Charts for every token launched via BSC network available on your fingertips. These open up the avenues 
      for Promotions, Marketing & opportunities 
      to invest`,
    },
  ]);

  return (
    <>
    {
      /*
           <Navbar />
      */
    }
 
      <section className="flex-fill bg-color-2 text-white py-5 position-relative">
        <Head title="Information" />

        <Container fluid="xxl" className="mt-5 py-3">
          <img
            style={{ top: "30%", width: "20%" }}
            className="position-absolute start-0"
            src="./assets/bg-5.png"
            alt=".."
          />
          <img
            style={{ top: "65%", width: "20%" }}
            className="position-absolute start-0"
            src="./assets/bg-5.png"
            alt=".."
          />

          <Row>
            <InformationSidebar className={`active`} linksArr={items} />
            <Col>
              {items.map((item) => (
                <InformationBox item={item} className={`active`} />
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default InformationPage;
