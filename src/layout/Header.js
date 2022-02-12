import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import HeaderButtons from '../components/HeaderButtons';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [toggleClass, setToggleClass] = useState('');
  const [header, setHeader] = useState('fixed');
  const [header_, setHeader_] = useState();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setHeader_(document.getElementById('navbar'));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  let walletLink = window.sessionStorage.getItem('walletAddress') || false;
  let showLaunchPadLink = false;

  if (location.pathname === '/') {
    showLaunchPadLink = true;
    walletLink = false;
  }

  header === 'fixed' && scrollPosition > 10
    ? header_ && header_.classList.add('header_background')
    : header_ && header_.classList.remove('header_background');

  return (
    <header
      id='navbar'
      className='position-fixed fixed-top py-3 navbar__section'>
      <Container fluid='xxl'>
        <div className='d-flex align-items-center z-10'>
          <div className='d-flex align-items-end justify-content-center'>
            <Link to='/'>
              <img className='logo-img' src='/assets/logo.svg' alt='Logo' />
            </Link>
          </div>
          <div className='ms-auto d-none d-md-flex align-items-center'>
            <ul className='nav'>
              <li className='nav-item pe-lg-4'>
                <Link to='/dashboard' className='nav-link'>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item pe-lg-4'>
                <Link to='/information' className='nav-link'>
                  Services
                </Link>
              </li>
              <li className='nav-item pe-lg-4'>
                <a
                  href='https://docs.bscbay.com/'
                  target='_blank'
                  className='nav-link'
                  rel='noreferrer'>
                  Documentation
                </a>
              </li>
              {showLaunchPadLink ? (
                <li className='nav-item'>
                  <Link
                    to='/launchpad'
                    className='btn btn_outline_primary fw-500'>
                    LaunchPad
                  </Link>
                </li>
              ) : (
                !walletLink && (
                  <li className='nav-item'>
                    <Link to='/' className='btn btn_outline_primary fw-500'>
                      Home
                    </Link>
                  </li>
                )
              )}
              {walletLink && (
                <li className='nav-item'>
                  <HeaderButtons />
                </li>
              )}
            </ul>
          </div>
          {/* Mobile button */}
          <div className='ms-auto d-flex d-md-none align-items-center'>
            {showLaunchPadLink ? (
              <Link
                to='/launchpad'
                className='btn btn-sm btn_outline_primary text-white fw-500'>
                <small>
                  <small>LaunchPad</small>
                </small>
              </Link>
            ) : (
              !walletLink && (
                <Link
                  to='/'
                  className='btn btn-sm btn_outline_primary text-white fw-500'>
                  Home
                </Link>
              )
            )}
            {walletLink && <HeaderButtons showmobile={true} />}
          </div>
          {/* Mobile button */}
        </div>
      </Container>
      {/* Mobile Navbar */}
      <section className='bg-secondary py-2 fixed-bottom d-block d-md-none'>
        <div>
          <ul className='nav justify-content-around'>
            <li className='nav-item pe-lg-4'>
              <Link to='/dashboard' className='nav-link'>
                <small>Dashboard</small>
              </Link>
            </li>

            <li className='nav-item pe-lg-4'>
              <Link to='/information' className='nav-link'>
                <small>Services</small>
              </Link>
            </li>
            <li className='nav-item pe-lg-4'>
              <a
                href='https://docs.bscbay.com/'
                target='_blank'
                className='nav-link'
                rel='noreferrer'>
                <small>Documentation</small>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Mobile Navbar */}
    </header>
  );
}

export default Header;
