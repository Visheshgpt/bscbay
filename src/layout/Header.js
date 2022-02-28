import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, matchPath } from 'react-router-dom';
import HeaderButtons from '../components/HeaderButtons';
import WalletConnect from '../components/WalletConnect';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
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

  let showLaunchPadLink = false;
  let showHomeLink = false;
  let showDexpadlLink = false;
  let showConnectWallet = false;
  let showHeaderButton =
    window.sessionStorage.getItem('walletAddress') || false;

  const location = useLocation();
  const { pathname } = location;

  if (pathname === '/') {
    showLaunchPadLink = true;
    showDexpadlLink = true;
    showHeaderButton = false;
  }

  if (pathname === '/launchpad' || pathname === '/buyvia') showHomeLink = true;

  if (pathname === '/dexpad') {
    showHomeLink = true;
    showLaunchPadLink = true;
  }

  if (pathname === '/dashboard' && !showHeaderButton) {
    showConnectWallet = true;
  }

  const matchLaunchpadTitle = matchPath(pathname, {
    path: `/launchpad/:type/:id`,
  });

  if (matchLaunchpadTitle && matchLaunchpadTitle.isExact && !showHeaderButton)
    showHomeLink = true;

  const matchLaunchpadId = matchPath(pathname, {
    path: `/dexpad/:id`,
  });

  if (matchLaunchpadId && matchLaunchpadId.isExact && !showHeaderButton) {
    showHomeLink = true;
    showLaunchPadLink = true;
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
              <li className='nav-item pe-lg-4'>
                <a href='/buyvia' className='nav-link'>
                  Buy Via
                </a>
              </li>

              {showHeaderButton ? (
                <li className='nav-item'>
                  <HeaderButtons />
                </li>
              ) : (
                <>
                  {showLaunchPadLink && (
                    <li className='nav-item'>
                      <Link
                        to='/launchpad'
                        className='btn btn-outline-primary fw-500'>
                        LaunchPad
                      </Link>
                    </li>
                  )}
                  {showHomeLink && (
                    <li className='nav-item'>
                      <Link
                        to='/'
                        className='btn btn-outline-primary fw-500 mx-3'>
                        Home
                      </Link>
                    </li>
                  )}
                </>
              )}
              {showDexpadlLink && (
                <li className='nav-item'>
                  <Link
                    to='/dexpad'
                    className='btn btn-outline-primary fw-500 mx-3'>
                    DexPools
                  </Link>
                </li>
              )}
            </ul>
          </div>
          {/* Mobile button */}
          <div className='ms-auto d-flex d-md-none align-items-center'>
            {showHeaderButton ? (
              <HeaderButtons showmobile={true} />
            ) : (
              <>
                {showHomeLink && (
                  <Link to='/' className='btn-sm b-primary text-white fw-500'>
                    Home
                  </Link>
                )}
                {showLaunchPadLink && (
                  <Link
                    to='/launchpad'
                    className='btn-sm b-primary text-white fw-500 mx-1'>
                    LaunchPad
                  </Link>
                )}
                {showDexpadlLink && (
                  <Link
                    to='/dexpad'
                    className='btn-sm b-primary text-white fw-500 mx-1'>
                    DexPools
                  </Link>
                )}
              </>
            )}

            {showConnectWallet && <WalletConnect />}
          </div>

          {/* Mobile button */}
        </div>
      </Container>
      {/* Mobile Navbar */}
      <section className='bg-secondary py-2 fixed-bottom d-block d-md-none'>
        <div>
          <ul className='nav nav-mobile'>
            <li className='nav-item lg-3'>
              <Link to='/dashboard' className='nav-link'>
                <small>Dashboard</small>
              </Link>
            </li>

            <li className='nav-item lg-3'>
              <Link to='/information' className='nav-link'>
                <small>Services</small>
              </Link>
            </li>
            <li className='nav-item lg-3'>
              <a
                href='https://docs.bscbay.com/'
                target='_blank'
                className='nav-link'
                rel='noreferrer'>
                <small>Documentation</small>
              </a>
            </li>
            <li className='nav-item lg-3'>
              <a href='/buyvia' className='nav-link'>
                Buy Via
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
