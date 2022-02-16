import { useState } from 'react';
import { Accordion, Container, Row, Col, Card } from 'react-bootstrap';
function HomeFaqSection() {
  const [activeId, setActiveId] = useState();

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }
  return (
    <section className='faq_section py-5'>
      <Container fluid='xxl'>
        <Row>
          <Col className='px-5 mobile_hide'>
            <div className=' d-flex flex-column justify-content-center h-100'>
              <h1>BSCBay Launchpad</h1>
              <div className='mt-2'>
                <p>
                  BSCBay’s revolutionary Rewards Launchpad allows projects to
                  conduct presales without them having to pay any of their
                  native tokens thus preventing any sell pressure on launch. We
                  collect a one-time fee from the projects in the form of BNB
                  for which they are given an equal worth of $BSCB dividend
                  tokens allowing them to earn USDT rewards from the $BSCB pool;
                  thereby making them earn a passive income forever. Projects
                  will never have to pay for a presale ever again!
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className='d-flex align-items-center justify-content-center'>
              <h5>
                <span className='show_mobile'>Launchpad </span> FAQs
              </h5>
            </div>
            <Accordion defaultActiveKey={activeId}>
              <div className='rounded-lg mb-3 border-0 accordion_item'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='0'
                  onClick={() => toggleActive('0')}
                  className={activeId === '0' ? 'active' : null}>
                  What is a Rewards Launchpad?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <p className='text-muted'>
                      This is a new concept of DEFI powered by BSCBay where its
                      holders and the projects that conduct their presale on it
                      are automatically paid in USDT rewards every 4 hours
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </div>
              <Card className='rounded-lg mb-3 border-0'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='1'
                  onClick={() => toggleActive('1')}
                  className={activeId === '1' ? 'active' : null}>
                  What fees does BSCBay charge projects?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    <p className='text-muted'>
                      BSCBay will never charge any native tokens from any
                      project launching on its launchpad. We will collect a
                      one-time fee in the form of BNB for which an equal worth
                      of $BSCB dividend tokens are distributed to the projects
                      allowing them to earn USDT rewards from the $BSCB pool.
                      This allows the projects to earn a sustained passive
                      income forever
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='rounded-lg mb-3 border-0'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='2'
                  onClick={() => toggleActive('2')}
                  className={activeId === '2' ? 'active' : null}>
                  Where do the fees go?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    <p className='text-muted'>
                      BSCBay will distribute the fee charged in BNB from the
                      projects in three categories :-
                      <br />
                      1) 50% of the fees will be put into the $BSCB Pool; this
                      allows for a sustained USDT rewards distribution in the
                      long run
                      <br />
                      2) 25% of the fees will be used to buy $BSCB token. The
                      tokens bought via this will be burnt immediately. This
                      ensures a healthy $BSCB token price
                      <br />
                      3) 25% of the fees will be used by the team for
                      development and sustaining day-to-day operations
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='rounded-lg mb-3 border-0'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='3'
                  onClick={() => toggleActive('3')}
                  className={activeId === '3' ? 'active' : null}>
                  Why will projects choose BSCBay over other launchpads?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    <p className='text-muted'>
                      In addition to providing a passive income and not
                      collecting any native tokens from the projects, BSCBay
                      also provides the projects the full use of its ecosystem
                      ranging from Liquidity lockers to team token lockers to
                      exclusive access from its partners for services like
                      Audits, KYC, Marketing, etc. We ensure we provide all the
                      tools to a project for its successful launch. The list of
                      partnerships which includes some of the biggest names in
                      this space will be announced soon in our AMAs. BSCBay is
                      also changing the user experience via its innovative
                      UI/UX; it will allow project owners to share videos and
                      updates from the team on their page thereby allowing a
                      better engagement
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='rounded-lg mb-3 border-0'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='4'
                  onClick={() => toggleActive('4')}
                  className={activeId === '4' ? 'active' : null}>
                  Will it be a tier based launchpad or open for all?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='4'>
                  <Card.Body>
                    <p className='text-muted'>
                      Both! BSCBay will have two types of launchpad
                      <br />
                      1) Incupad
                      <br />
                      2) Dexpad
                      <br /> Incupad will list projects which are vetted by the
                      team internally after passing thorough checks. These
                      projects will be guided by us in every step of their
                      launch. Incupad will follow a tier- based system for $BSCB
                      token holders ensuring projects get access to a big pool
                      of investors. These projects will also have access to our
                      partners for raising their private sale; if required.
                      Dexpad – We wouldn’t be in Web 3.0 if it isn’t
                      decentralized. Projects can launch themselves on our
                      decentralized launchpad with a few clicks of a button and
                      enjoy all the perks from our associated partners.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='rounded-lg mb-3 border-0'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='5'
                  onClick={() => toggleActive('5')}
                  className={activeId === '5' ? 'active' : null}>
                  Does BSCBay allow whitelisting?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='5'>
                  <Card.Body>
                    <p className='text-muted'>
                      Yes! Whitelist spots will be available to projects for
                      their presales launching on the dexpad
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className='rounded-lg mb-3 border-0'>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='6'
                  onClick={() => toggleActive('6')}
                  className={activeId === '6' ? 'active' : null}>
                  Will there be any limitation on Whitelist spots?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='6'>
                  <Card.Body>
                    <p className='text-muted'>
                      We know how everyone wants to ensure that real investors
                      and not bots get into the presale for their projects.
                      Keeping this in mind we will allow projects to have as
                      many Whitelist spots as they require to conduct a presale.
                      BSCBay’s user friendly interface shows users whether they
                      are part of the whitelist spots or not once they connect
                      their wallets on our dAPP. Gone are the days of users
                      messaging team members on whether they made it or not!
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeFaqSection;
