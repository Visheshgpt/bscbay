import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { poolData } from "../../../data";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const IncupadFeaturedSection = () => {
  const upcomingData = [
    { title: "Apply as a project", img: "./assets/is-1.svg" },
    { title: "Buy on Pancakeswap", img: "./assets/is-2.svg" },
    // { title: "Buy on Kucoin", img: "./assets/is-3.svg" },
    // { title: "Buy on Gate.io", img: "./assets/is-4.svg" },
  ];

  const featuredPoolData = poolData.filter((item) => item.featured === true);

   console.log("featured pool", featuredPoolData);
   

  const options = {
    dots: false,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1200: {
        items: 3,
      },
      1900: {
        items: 3,
      },
    },
  };

  return (
    <Container as="section" fluid="xxl" className="incupad-upcoming-section">
      <Container>
        <Row>
          {upcomingData.map((item, index) => (
            <Col xs={6} lg={6} key={index}>
              <div className="incupad-upcoming-card">
                <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} className="p-5 mt-5">
            <h2 className="text-white text-center">Featured Pools</h2>
          </Col>
          <OwlCarousel options={options}>
            {featuredPoolData.map((item, index) => (
              <Link to={`/incupad/${item.title.replaceAll(" ", "-")}`}>
                <div className="incupad-upcoming-pool-card">
                  <span className="card-tag">{item.tag}</span>
                  <img src={item.img} alt={item.title} />
                  <span className="card-title">{item.title}</span>
                  <p className="card-description">{item.description}</p>
                  <div className="card-time">
                    <img src="./assets/is-time-1.svg" alt="time icon" />
                    <span>{item.time}</span>
                  </div>
                  <span className="card-time-status">remaining</span>
                  <div className="incupad-upcoming-pool-card-lower">
                    <div className="min-allocation">
                      <span className="lower-card-name">Min Allocation</span>
                      <span>{item.minAllocation}</span>
                    </div>
                    <div className="min-allocation">
                      <span className="lower-card-name">Max Allocation</span>
                      <span>{item.maxAllocation}</span>
                    </div>
                    <div className="min-allocation">
                      <span className="lower-card-name">Access Type</span>
                      <span>{item.accessType}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadFeaturedSection;
