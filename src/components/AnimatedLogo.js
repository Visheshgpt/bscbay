function AnimatedLogo({ text = false, srcimg }) {
  return (
    <div className='logo_content d-flex align-items-center my-4'>
      <div className='logo_box'>
        <img src={srcimg} alt='logo' height='55px' />
      </div>
      {text && (
        <div className='mx-3'>
          <h1 className='text-primary'>
            BSC<span className='text-white'>Bay</span>
          </h1>
        </div>
      )}
    </div>
  );
}

export default AnimatedLogo;
  