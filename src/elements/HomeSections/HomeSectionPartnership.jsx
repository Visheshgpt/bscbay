import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomeSectionPartnership = () => {
  const imagesArr = [{ key: 0 }, { key: 1 }, { key: 2 }];

  return (
    <section className="py-5 bg-color-homepage-section-one text-white">
      <Container fluid="xxl">
        <Row>
          <Col lg={12}>
            <div className="border-secondary py-4 partners">
             
                <Row
                  className="justify-content-center align-items-center"
                  style={{ gap: 30 }}
                >
                  <Col lg={12}>
                    <h1 className="text-center">Partnership</h1>
                  </Col>
                  <Col lg={2} md={4} sm={12}>
                    <div className="img_container">   
                    <div className="im">
                      <img
                          className="w-100"
                          src='./assets/partners/guard.jpg'
                          alt='guard'
                        />
                        </div>
                          <h6>0xguard</h6>
                      </div>
                   </Col>
                   <Col lg={2} md={4} sm={12}>
                   <div className="img_container">
                   <div className="im">
                     <img
                       className="w-100"
                       src='./assets/partners/one.png'
                       alt='sp'
                     />
                     </div>
                       <h6>Certik</h6>
                   </div>
                   </Col>
                   <Col lg={2} md={4} sm={12}>
                   <div className="img_container">
                   <div className="im">
                     <img
                       className="w-100"
                       src='./assets/partners/sp.png'
                       alt='sp'
                     />
                     </div>
                       <h6>Solid Proof</h6>
                   </div>
                   </Col>
                   <Col lg={2} md={4} sm={12}>
                   <div className="img_container">
                     <div className="im">
                     <img
                       className="w-100"
                       src='./assets/partners/flooz.png'
                       alt='sp'
                     />
                     </div>
                    
                     <h6>Flooz</h6>
                   </div>
                   </Col>
                 
                   <Col lg={2} md={4} sm={12}>
                   <div className="img_container">
                   <div className="im">
                     <img
                       className="w-100"
                       src='./assets/partners/flooz.png'
                       alt='sp'
                     />
                     </div>
                       <h6>0xguard</h6>
                   </div>
                   </Col>
               
                </Row>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSectionPartnership;
