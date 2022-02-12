function HeaderButtons({ userBNB, userBSC, showmobile = false }) {
  let address = window.sessionStorage.getItem('walletAddress');
  let bnbbalance = window.sessionStorage.getItem('userBNB');
  let bscbbalance = window.sessionStorage.getItem('userBSCB');

  async function logoutUser() {
    if (window.sessionStorage.getItem('walletName') === 'walletconnect') {
      //   ---------------working code ------------------
      // const provider = new WalletConnectProvider({
      //   rpc: {
      //     1: "https://bsc-dataseed.binance.org/",
      //     56: "https://bsc-dataseed.binance.org/",
      //     97: "https://data-seed-prebsc-1-s1.binance.org:8545",
      //   },
      // });
      // await provider.disconnect();
      /// --------------------------------------------
    }

    localStorage.removeItem('provider');
    window.sessionStorage.removeItem('walletAddress');
    window.sessionStorage.removeItem('walletName');
    window.sessionStorage.removeItem('userBNB');
    window.sessionStorage.removeItem('userBSCB');
    window.location.reload();
  }

  return (
    <div className='btn_header'>
      <div
        className={`btn_header_content ${showmobile && 'btn_header_mobile'}`}>
        {!showmobile && (
          <div className='d-flex flex-column'>
            <div style={{ fontSize: '12px' }} className='text-white'>
              {Number(bnbbalance).toFixed(2)} BNB
            </div>
            <div style={{ fontSize: '12px' }} className=''>
              {(Number(bscbbalance) / 1000000).toFixed(0)} Mn BSCB
            </div>
          </div>
        )}

        <div className='b'>
          <a href='#'>
            <div style={{ fontSize: '13px' }} className='btn_rounded'>
              {address.slice(0, 5)}...{address.slice(-4)}
              <svg
                stroke='currentColor'
                fill='currentColor'
                stroke-width='0'
                viewBox='0 0 24 24'
                class='inline align-bottom text-sm ml-1'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z'></path>
              </svg>
            </div>
          </a>
        </div>
        <div className='icons'>
          <img
            onClick={logoutUser}
            src='/assets/social/Logout.png'
            alt=''></img>
        </div>
      </div>
      <div style={{ color: 'white' }} className='date'>
        Feb 11, 08.06 UTC
      </div>
    </div>
  );
}

export default HeaderButtons;
