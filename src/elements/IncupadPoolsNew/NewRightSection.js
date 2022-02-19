import { useEffect, useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { SmallButton } from '../../components/Buttons';
import ConnectWallet from '../../components/Launchpad/ConnectWallet';
import InvestForm from '../../components/InvestForm';
import JoinWhitelist from './JoinWhitelist';

function NewRightSection() {
  const [showConnect, setShowConnect] = useState(false);
  const [showJoinWhitelist, setJoinShowWhitelist] = useState(false);
  const [IDOOpen, setIDOOpen] = useState(true);
  const [whiteListOpen, setWhiteListOpen] = useState(true);
  const [whitelistedDone, setWhitelistedDone] = useState(false);

  useEffect(() => {
    const startTime = 1645212618;
    const endTime = 1645299018;

    const checkTime = startTime > endTime;

    setIDOOpen(checkTime);
    setWhiteListOpen(checkTime);
  }, []);

  let address = window.sessionStorage.getItem('walletAddress');

  return (
    <>
      <div className='card_dark card_shadow p-4 new_right'>
        <div className='flexBetween'>
          <div className='d-flex'>
            <SmallButton text='Private' />
            <SmallButton text='Upcoming' classes='mx-3' />
          </div>
          <SmallButton text='BNB' />
        </div>

        <div className='d-flex flex-column my-3'>
          <div className='flexCenter'>
            <span>
              Your Tier: <span className='text-primary'>GOLD</span>
            </span>
          </div>
          {IDOOpen ? (
            <div className='bars'>
              <span>IDO opens in: </span>
              <span className='text-primary'> 05:02:11:30</span>
            </div>
          ) : (
            <div className='bars'>
              <span>IDO ends in: </span>
              <span className='text-primary'> 05:02:11:30</span>
            </div>
          )}

          {whiteListOpen ? (
            <div className='bars'>
              <span>Whitelist Registeration Start in: </span>
              <span className='text-primary'> 05:02:11:30</span>
            </div>
          ) : (
            !whitelistedDone && (
              <div className='bars'>
                <span>Whitelist Registeration End in: </span>
                <span className='text-primary'> 05:02:11:30</span>
              </div>
            )
          )}
        </div>
        {!IDOOpen && (
          <div className='flexBetween px-2'>
            <div className='box'>
              <span className='text'>SWAP RATE</span>
              <div className='value'>
                <span>1 BSCB = 0.00025 B</span>
                <span>NB</span>
              </div>
            </div>
            <div className='box'>
              <div className='d-flex align-items-center justify-content-end text w-100'>
                RAISED/HARD CAP
              </div>
              <div className='value'>
                <span> 0 / 400,000</span>
                <span className='w-100 d-flex justify-content-end '>USDT</span>
              </div>
            </div>
          </div>
        )}

        <div className='p-2'>
          <ProgressBar
            now={60}
            className='progress_bar'
            label='Preparation Period'
          />
        </div>
        <div className='flexCenter mt-4 mb-3'>
          {!address ? (
            <Button
              className='btn btn-primary'
              onClick={() => setShowConnect(true)}>
              Connect Wallet
            </Button>
          ) : whiteListOpen ? (
            <div className='btn btn-primary'>
              Wait For Registeration To Start
            </div>
          ) : !whitelistedDone ? (
            <Button
              className='btn btn-primary'
              onClick={() => setJoinShowWhitelist(true)}>
              Join Whitelist
            </Button>
          ) : (
            IDOOpen && (
              <div className='btn btn-outline-primary'>
                WAIT FOR PRESALE TO START
              </div>
            )
          )}
        </div>
        {!IDOOpen && (
          <div className='flexBetween px-2 mb-3'>
            <div className='box text-center'>
              <span className='text'>Max Allocation</span>
              <div className='value'>
                <span>5 BNB</span>
              </div>
            </div>
            <div className='box'>
              <span className='text'>Invested</span>
              <div className='value'>
                <span>2 BNB</span>
              </div>
            </div>
            <div className='box'>
              <span className='text'>Rem Allocation</span>
              <div className='value'>
                <span>3 BNB</span>
              </div>
            </div>
          </div>
        )}

        {/* 
   
      <div className='d-flex justify-content-center'>
        <Button
          className='btn connect-btn'
          onClick={() => setShowConnect(true)}>
          Join Whitelist
        </Button>
      </div>
      <div className='d-flex justify-content-center'>
        
      </div> */}
        {whitelistedDone && (
          <div className='flexCenter wallet_whitelist'>
            <span className='text-white'>
              Wallet Whitelisted :<span className='text-primary'>Yes</span>
            </span>
          </div>
        )}

        <div></div>
        {showConnect && (
          <ConnectWallet
            show={showConnect}
            onHide={() => setShowConnect(false)}
          />
        )}
        {showJoinWhitelist && (
          <JoinWhitelist
            show={setJoinShowWhitelist}
            onHide={() => setJoinShowWhitelist(false)}
            setWhitelisteddone={setWhitelistedDone}
            setWhiteListOpen={setWhiteListOpen}
          />
        )}
      </div>

      <div className='d-flex w-100 mb-2'>
        <InvestForm />
      </div>
      <div className='d-flex justify-content-center'>
        <Button
          className='btn connect-btn'
          onClick={() => setShowConnect(true)}>
          Claim
        </Button>
      </div>
    </>
  );
}

export default NewRightSection;
