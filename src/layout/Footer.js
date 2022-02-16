import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const socialMediaArr = [
  { link: 'https://twitter.com/bscbayofficial' },
  { link: 'https://t.me/bscbayofficial' },
  { link: 'https://www.reddit.com/r/BSCBay/' },
];

function Footer() {
  return (
    <footer className='py-5'>
      <Container fluid='xxl' className='px-0 position-relative'>
        <img className='position-absolute' src='/assets/bg-7.png' alt='..' />

        <Container className='text-center z-10'>
          <div className='mb-3'>
            <Link to='/'>
              <img src='/assets/logo.png' alt='Logo' />
            </Link>
          </div>
          <div className='mb-3'>
            <ul className='nav justify-content-center'>
              <li className='nav-item mx-md-3'>
                <Link to='/information' className='nav-link'>
                  Services
                </Link>
              </li>
              <li className='nav-item mx-md-3'>
                <a
                  href='https://docs.bscbay.com/'
                  target='_blank'
                  className='nav-link'
                  rel='noreferrer'>
                  Documentation
                </a>
              </li>
              <li className='nav-item mx-md-3'>
                <a href='/launchpad' className='nav-link'>
                  LaunchPad
                </a>
              </li>
            </ul>
          </div>
          <div className='justify-content-center mb-3 item-social-main'>
            {socialMediaArr.map((data, i) => (
              <a
                key={i}
                href={data.link}
                target='_blank'
                rel='noreferrer'
                className='mx-3'>
                <img
                  className='d-block icon-hover'
                  height={25}
                  src={`/assets/icons/b-icon-${i}.svg`}
                  alt='..'
                />
              </a>
            ))}
          </div>
          <div className='text-white text-opacity-75'>
            <div className='fw-bold py-2'>Copyright @ bscbay.com</div>
            <p className='small'>
              Disclaimer: The information provided shall not in any way
              constitute a recommendation as to whether you should invest in any
              product discussed. BSC-Bay accepts no liability for any loss
              occurring to any person acting or refraining from action as a
              result of any material provided or published. BSC-Bay was built as
              an experiment in decentralization.
            </p>
          </div>
        </Container>
      </Container>
    </footer>
  );
}

export default Footer;
