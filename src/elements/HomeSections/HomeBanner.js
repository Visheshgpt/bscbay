import { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { ecosystemData, socialLinks } from '../Constants';
import { ReactComponent as Arrow } from '../../assets/next.svg';

function HomeBanner() {
  useEffect(() => {
    const colorDataWord = Array.from(
      document.getElementsByClassName('changeWord')
    );

    const colorData = Array.from(
      document.getElementsByClassName('colorChange')
    );

    const colorFunction = () => {
      const changeColorFn = (item, index) => {
        setTimeout(() => {
          colorData.map((item) => (item.style.color = '#fff'));
          item.style.color = '#f1c342';
        }, 1500 * index);
      };

      colorData.map((item, index) => {
        changeColorFn(item, index);
      });
    };

    const colorWordFunction = () => {
      const changeColorFnn = (item, index) => {
        setTimeout(() => {
          colorDataWord.map((item) => (item.style.color = '#fff'));
          item.style.color = '#f1c342';
        }, 500 * index);
      };

      colorDataWord.map((item, index) => changeColorFnn(item, index));
    };

    colorFunction();
    setInterval(() => colorFunction(), 1500 * colorData.length);

    colorWordFunction();
    setInterval(() => colorWordFunction(), 500 * colorDataWord.length);
  });
  return (
    <section className='bg-color-homepage-section-one text-white'>
      <Container
        fluid='xxl'
        className='position-relative pt-5 mt-5 home_banner'>
        <Row className='justify-content-xl-between'>
          <Col md={12} lg={6} xl={5} className='mb-5 mb-xl-0'>
            <div className='z-10 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start'>
              <div className='heading-primary mb-2 custom-heading-primary'>
                {/* The <span className="text-primary">BSC</span> Ecosystem */}
                First Decentralized
                <span className='text-primary'> Launchpad</span> That
                <div className='text-primary'>
                  <span className='changeWord'>R</span>
                  <span className='changeWord'>e</span>
                  <span className='changeWord'>w</span>
                  <span className='changeWord'>a</span>
                  <span className='changeWord'>r</span>
                  <span className='changeWord'>d</span>
                  <span className='changeWord'>s</span>
                </div>
                You
              </div>

              <div className='d-flex aling-items-center z-10 py-4'>
                {socialLinks.map((data, i) => (
                  <a
                    style={{ width: 30 }}
                    key={i}
                    href={data.link}
                    target='_blank'
                    rel='noreferrer'
                    className='mx-1 mx-sm-3'>
                    <img
                      className='d-block icon-hover'
                      height={25}
                      src={`/assets/icons/b-icon-${i}.svg`}
                      alt='..'
                    />
                  </a>
                ))}
              </div>
            </div>
          </Col>
          <Col
            md={12}
            lg={6}
            xl={7}
            className='order-first order-lg-last mb-4 mb-lg-0'>
            <div className=' z-10 w-100' style={{ height: '100%' }}>
              <img
                className='h-100 w-100 d-block'
                src='../assets/home-desktop.svg'
                alt='..'
              />
            </div>
          </Col>
        </Row>
        <div className='px-0 col-lg-10 mx-auto mt-5'>
          <Row
            className='justify-content-center text-center z-10 pb-3'
            style={{ gap: 15 }}>
            <h1 className='banner-mid-section'>
              The <span className='text-primary'>BSC</span> Ecosystem
            </h1>
            <div className='text-white-2 fw-light custom-animation heading-secondary-3 px-0 col-md-7 col-lg-11 col-xl-11 col-xxl-9 mb-4'>
              <span className='colorChange'>Auto USDT Distribution</span> |{' '}
              <span className='colorChange'>LaunchPad</span> |{' '}
              <span className='colorChange'>DexPad</span> |{' '}
              <span className='colorChange'>Token Minting</span> |{' '}
              <span className='colorChange'>Lockers</span> |{' '}
              <span className='colorChange'>Analytics</span>
            </div>

            <div className='sample-data'>
              {ecosystemData.map((data, i) => (
                <div
                  key={i}
                  className='box-1 bg-color-homepage-section-one-box text-small icon-hover mb-4'>
                  <img
                    className='d-block mb-1'
                    height={24}
                    src={`/assets/icons/animicon-${i}.gif`}
                    alt={data.name}
                  />
                  <span className='text-capitalize text-white-2'>
                    {data.name}
                  </span>
                  <span className='text-white'>{data.number}</span>
                </div>
              ))}
            </div>
          </Row>
          <Row className='justify-content-center'>
            <div className='whitepaper_btn mb-4'>
              <a
                style={{ height: 60 }}
                className='btn btn-outline-warning px-4 w-100'
                href='https://docs.bscbay.com/'
                target='_blank'
                rel='noreferrer'>
                <span className='text-uppercase'>Whitepaper</span>
                <i
                  className='ms-3 shake-horizontal'
                  style={{ height: 30, width: 18 }}>
                  <Arrow />
                </i>
              </a>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HomeBanner;
