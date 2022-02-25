import { useState } from 'react';
import { Button } from 'react-bootstrap';
import LaunchStepThree from '../elements/launch-steps/LaunchStepThree';

function WalletConnect() {
  const [showConnect, setShowConnect] = useState(false);
  return (
    <>
      <Button className='btn btn-primary' onClick={() => setShowConnect(true)}>
        Connect Wallet
      </Button>
      <LaunchStepThree
        show={showConnect}
        onHide={() => setShowConnect(false)}
      />
    </>
  );
}

export default WalletConnect;
