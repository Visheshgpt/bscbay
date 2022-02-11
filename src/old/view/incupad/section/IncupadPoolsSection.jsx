import React from "react";
import {
  Col,
  Container,
  Row,
  Tab,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { poolData } from "../../../data";

const IncupadPoolsSection = () => {
  const completedPoolData = poolData.filter(
    (item) => item.status === "completed"
  );

  const activePoolData = poolData.filter((item) => item.status === "active");

  const upcommingPoolData = poolData.filter(
    (item) => item.status === "upcoming"
  );

  return (
    <Container as="section" fluid="xxl" className="incupad-completed-section ">
      <Container>
        <Row>
          <Col xs={12} className="p-md-5 mt-5">
            <Tab.Container defaultActiveKey="active">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills" className="justify-content-center">
                    <Nav.Item>
                      <Nav.Link eventKey="completed">Completed Pools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="active">Active Pools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="upcomming">Upcoming Pools</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12} className="d-flex justify-content-end mt-3">
                  <Dropdown className="custom-dropdown-btn">
                    <Dropdown.Toggle>Filter</Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item disabled>Type</Dropdown.Item>
                      <Dropdown.Divider />
                      <div className="dropdown-singleItem">
                        <input type="checkbox" />
                        <span>Bid</span>
                      </div>
                      <div className="dropdown-singleItem">
                        <input type="checkbox" />
                        <span>Bid</span>
                      </div>
                      <Dropdown.Divider />
                      <Dropdown.Item disabled>Type</Dropdown.Item>
                      <div className="dropdown-singleItem">
                        <input type="checkbox" />
                        <span>Bid</span>
                      </div>
                      <div className="dropdown-singleItem">
                        <input type="checkbox" />
                        <span>Bid</span>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col sm={12} className="mt-3">
                  <Tab.Content>
                    <Tab.Pane eventKey="completed">
                      <Row>
                        {completedPoolData.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Link
                              to={`/launchpad/${item.title.replaceAll(" ", "-")}`}
                            >
                              <div className="incupad-completed-pool-card">
                                <span className="card-tag">{item.tag}</span>
                                <img src={item.img} alt={item.title} />
                                <span className="card-title">{item.title}</span>
                                <p className="card-description">
                                  {item.description}
                                </p>
                                <div className="incupad-completed-pool-card-lower">
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Total Raise
                                    </span>
                                    <span>{item.rise1}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Total Raise
                                    </span>
                                    <span>{item.rise2}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Maximum
                                    </span>
                                    <span>{item.maximun}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Max Participants
                                    </span>
                                    <span>{item.maxPraticipate}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Access
                                    </span>
                                    <span>{item.access}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      SYNR
                                    </span>
                                    <span>{item.synr}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="active">
                      <Row>
                        {activePoolData.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Link
                              to={`/launchpad/${item.title.replaceAll(" ", "-")}`}
                            >
                              <div className="incupad-completed-pool-card">
                                <span className="card-tag">{item.tag}</span>
                                <img src={item.img} alt={item.title} />
                                <span className="card-title">{item.title}</span>
                                <p className="card-description">
                                  {item.description}
                                </p>
                                <div className="incupad-completed-pool-card-lower">
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Total Raise
                                    </span>
                                    <span>{item.rise1}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Total Raise
                                    </span>
                                    <span>{item.rise2}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Maximum
                                    </span>
                                    <span>{item.maximun}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Max Participants
                                    </span>
                                    <span>{item.maxPraticipate}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Access
                                    </span>
                                    <span>{item.access}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      SYNR
                                    </span>
                                    <span>{item.synr}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="upcomming">
                      <Row>
                        {upcommingPoolData.map((item, index) => (
                          <Col md={6} lg={4} key={index}>
                            <Link
                              to={`/launchpad/${item.title.replaceAll(" ", "-")}`}
                            >
                              <div className="incupad-completed-pool-card">
                                <span className="card-tag">{item.tag}</span>
                                <img src={item.img} alt={item.title} />
                                <span className="card-title">{item.title}</span>
                                <p className="card-description">
                                  {item.description}
                                </p>
                                <div className="incupad-completed-pool-card-lower">
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Total Raise
                                    </span>
                                    <span>{item.rise1}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Total Raise
                                    </span>
                                    <span>{item.rise2}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Maximum
                                    </span>
                                    <span>{item.maximun}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Max Participants
                                    </span>
                                    <span>{item.maxPraticipate}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      Access
                                    </span>
                                    <span>{item.access}</span>
                                  </div>
                                  <div className="lower-section">
                                    <span className="lower-card-name">
                                      SYNR
                                    </span>
                                    <span>{item.synr}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IncupadPoolsSection;
