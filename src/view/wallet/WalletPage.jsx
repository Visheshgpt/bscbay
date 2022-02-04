import React from "react";
import { Head } from "../../components/Head";
import { Row, Col, Container } from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar";
import WalletSectionOne from "./sections/WalletSectionOne";
import FooterLinks from "../../components/FooterLinks";
import { Navbar } from "../navbar/Navbar.jsx";

const WalletPage = () => {
  return (
    <>
      <Navbar />
      <section className="flex-fill bg-color-2 text-white py-5 position-relative">
        <Head title="Wallet" />
        <div className="bg-testing-1" />
        <Container>
          <Row>
            <Sidebar />
            <Col>
              <WalletSectionOne />
            </Col>
          </Row>
          <FooterLinks />
        </Container>
      </section>
    </>
  );
};

export default WalletPage;
