import { Container, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { ecosystemData, socialLinks } from './Constants';
import { ReactComponent as Arrow } from '../assets/next.svg';

function HomeBanner() {
  useEffect(() => {
    const colorDataWord = Array.from(
      document.getElementsByClassName('changeWord')
    );
    const colorData = Array.from(
      document.getElementsByClassName('colorChange')
    );

    const colorWordFunction = () => {
      const changeColorFnn = (item, index) => {
        setTimeout(() => {
          colorDataWord.map((item) => (item.style.color = '#fff'));
          item.style.color = '#ffd366';
        }, 500 * index);
      };

      colorDataWord.map((item, index) => changeColorFnn(item, index));
    };

    colorWordFunction();
    setInterval(() => colorWordFunction(), 500 * colorDataWord.length);

    const colorFunction = () => {
      const changeColorFn = (item, index) => {
        setTimeout(() => {
          colorData.map((item) => (item.style.color = '#fff'));
          item.style.color = '#ffd366';
        }, 1500 * index);
      };

      colorData.map((item, index) => {
        changeColorFn(item, index);
      });
    };

    colorFunction();
    setInterval(() => colorFunction(), 1500 * colorData.length);
  });
  return (
    <div className='home_banner'>
      <Container fluid='xxl' className='position-relative pt-1'>
        <Row className='justify-content-xl-between mt-3'>
          <Col md={12} lg={8} xl={5} className='mb-5 mb-xl-0'>
            <div className='d-flex flex-column text-white h-100 home_banner_content'>
              <h1 className='fw-100'>First Decentralized</h1>
              <h1 className='extra-large'> Launchpad</h1>
              <h1 className='text-white'>
                <span className='fw-100'>That</span>
                <span className='extra-large mx-3'>
                  <span className='changeWord'>R</span>
                  <span className='changeWord'>e</span>
                  <span className='changeWord'>w</span>
                  <span className='changeWord'>a</span>
                  <span className='changeWord'>r</span>
                  <span className='changeWord'>d</span>
                  <span className='changeWord'>s</span>
                </span>
                <span className='fw-100'>You</span>
              </h1>
              <div className='home_banner_button'>
                <a
                  className='btn btn-outline-warning'
                  href='https://docs.bscbay.com/'
                  target='_blank'
                  rel='noreferrer'>
                  <span className='text-uppercase'>Whitepaper</span>
                  <i className='ms-3 shake-horizontal'>
                    <Arrow />
                  </i>
                </a>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} xl={7}>
            <div className='home_banner_img'>
              <img
                className='h-100 w-100 d-block'
                src='./assets/home-desktop.svg'
                alt='..'
              />
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center text-center text-white pb-5 home_banner_midsection'>
          <Col lg={10} className='mx-auto'>
            <h3>
              The <span className='text-primary'>BSC</span> Ecosystem
            </h3>
            <div className='fw-light custom-animation heading-secondary-3 mt-2 mb-4'>
              <span className='colorChange'>Auto USDT Distribution</span> |{' '}
              <span className='colorChange'>LaunchPad</span> |{' '}
              <span className='colorChange'>DexPad</span> |{' '}
              <span className='colorChange'>Token Minting</span> |{' '}
              <span className='colorChange'>Lockers</span> |{' '}
              <span className='colorChange'>Analytics</span>
            </div>
            <div className='ecosystem_data'>
              {ecosystemData.map((item, index) => (
                <div className='card-1 text-small' key={index}>
                  <img
                    className='d-block mb-1 card-1_img'
                    src={`/assets/icons/animicon-${index}.gif`}
                    alt={item.name}
                  />
                  <span className='text-capitalize text-white-2 '>
                    {item.name}
                  </span>
                  <span className='text-white'>{item.number}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className='justify-content-center z-10 pb-5'>
          {socialLinks.map((data, index) => (
            <a
              key={index}
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='mx-1 mx-sm-3 social_img'>
              <img
                className='d-block icon-hover'
                height={25}
                src={`/assets/icons/b-icon-${index}.svg`}
                alt='..'
              />
            </a>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default HomeBanner;
