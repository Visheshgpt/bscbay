import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import HeaderButtons from '../components/HeaderButtons';

function Header() {
  const location = useLocation();

  const showLaunchPadLink = location.pathname === '/newapp';
  const showButton = location.pathname === '/newapp/launchpad/BSCBay';

  return (
    <header
      id='navbar'
      className='position-fixed fixed-top py-3 bg-transparent navbar__section'>
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
                    to='/newapp/launchpad'
                    className='btn btn_outline_primary fw-500'>
                    LaunchPad
                  </Link>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link to='/newapp' className='btn btn_outline_primary fw-500'>
                    Home
                  </Link>
                </li>
              )}
              {showButton && (
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
