import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useScrollPosition from 'use-scroll-position';
import HeaderButtons from '../components/HeaderButtons';

function Header() {
  const location = useLocation();
  const [header, setHeader] = useState();

  useEffect(() => {
    setHeader(document.getElementsByClassName('navbar_section'));
  }, []);

  let walletLink = window.sessionStorage.getItem('walletAddress') || false;
  let showLaunchPadLink = false;

  if (location.pathname === '/') {
    showLaunchPadLink = true;
    walletLink = false;
  }

  const showButton = location.pathname === '/launchpad/BSCBay';
  let scrollPosition = useScrollPosition();

  console.log('pos = ', scrollPosition);

  // const headerClass = location.pathname === '/newapp' ? '' : ' ';

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
              ) : !walletLink ? (
                <li className='nav-item'>
                  <Link to='/' className='btn btn_outline_primary fw-500'>
                    Home
                  </Link>
                </li>
              ) : (
                ''
              )}
              {walletLink && (
                <li className='nav-item'>
                  <HeaderButtons />
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
