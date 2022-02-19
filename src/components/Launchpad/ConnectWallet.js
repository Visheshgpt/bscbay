import { Modal } from 'react-bootstrap';
import contractService from '../../shared/LMcontractservice';

function ConnectWallet({ show, onHide }) {
  const userLogin = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    const providerName = localStorage.getItem('loginType');
    window.sessionStorage.setItem('walletAddress', accounts[0]);
    window.sessionStorage.setItem('walletName', providerName);
    window.location.reload();
  };

  const requestAuth = async () => {
    try {
      console.log('Metamask auth requested');
      localStorage.setItem('loginType', 'metamask');
      const web3 = await contractService.getWeb3Client();
      await userLogin(web3);
    } catch (e) {}
  };

  const requestwalletconnect = async () => {
    try {
      localStorage.setItem('loginType', 'walletconnect');
      const web3 = await contractService.getWeb3Client();
      await userLogin(web3);
    } catch (e) {}
  };

  return (
    <Modal
      centered
      show={show}
      onHide={onHide}
      contentClassName='border-0 modal-wallet'>
      <section className='flexCenter flex-column text-center text-white bg-secondary p-4'>
        <div className='flexCenter'>
          <img
            src='../assets/wallet.png'
            alt='...'
            className='launch-step-three-upper-image'
          />
        </div>
        <div className='text-primary heading-secondary-4 fw-bold mb-1'>
          Choose Wallet
        </div>
        <p className='mb-2 fw-light text-white-2'>
          Safely connect to your existing blockchain wallet and directly stake
          tokens in them
        </p>
        <div
          onClick={requestAuth}
          className='flexCenter modal-wallet-item w-100 border border-primary rounded-lg-2 p-2 my-2 cursor-pointer'>
          <img
            className='d-block launch-step-three-image'
            src='../assets/e-icon-0.png'
            alt='...'
          />
          <span className='ms-3 text-white-2'>Meta Mask</span>
          <img
            className='ms-auto shake-horizontal launch-step-three-image'
            src='../assets/arrow-1.png'
            alt='...'
          />
        </div>
        <div
          onClick={requestAuth}
          className='flexCenter modal-wallet-item w-100 border border-primary rounded-lg-2 p-2 my-2 cursor-pointer'>
          <img
            className='d-block launch-step-three-image'
            src='../assets/trust.png'
            alt='...'
          />
          <span className='ms-3 text-white-2'>Trust Wallet</span>
          <img
            className='ms-auto shake-horizontal launch-step-three-image'
            src='../assets/arrow-1.png'
            alt='...'
          />
        </div>
        <div
          to='#'
          onClick={requestwalletconnect}
          className='flexCenter modal-wallet-item w-100 border border-primary rounded-lg-2 p-2 my-2 cursor-pointer'>
          <img
            className='d-block launch-step-three-image'
            src='../assets/wc.png'
            alt='...'
          />
          <span className='ms-3 text-white-2'>Wallet Connect</span>
          <img
            className='ms-auto shake-horizontal  launch-step-three-image'
            src='../assets/arrow-1.png'
            alt='...'
          />
        </div>
      </section>
    </Modal>
  );
}

export default ConnectWallet;
