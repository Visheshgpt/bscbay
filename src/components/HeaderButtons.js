function HeaderButtons() {
  return (
    <div className='btn_header'>
      <div className='btn_header_content px-3'>
        <div className='d-flex flex-column'>
          <div className='text-white'>0 BNB</div>
          <div className=''>0 BSCB</div>
        </div>
        <div className='b'>
          <a href='aaa'>
            <div className='btn_rounded'>
              0xafafsds
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
        <div className='icons'>Icon</div>
      </div>
      <div className='date'>Feb 11, 08.06 UTC</div>
    </div>
  );
}

export default HeaderButtons;
