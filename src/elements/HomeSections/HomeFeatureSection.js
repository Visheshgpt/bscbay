import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dataArr } from '../Constants';

const HomeFeatureSection = () => {
  return (
    <section className='bg-color-homepage-section-two text-white'>
      <Container fluid='xxl' className='px-0 position-relative'>
        <img
          className='position-absolute bottom-0 start-0 w-auto-sm-100'
          src='../assets/bg-5.png'
          alt='..'
        />
        <img
          className='position-absolute top-0 end-0 w-auto-sm-100'
          src='../assets/bg-6.png'
          alt='..'
        />

        <Container fluid='xx;' className='py-5 z-10'>
          <div
            id='investment'
            className='px-0 col-xl-12 mx-auto scroll-settings'>
            <div className='heading-secondary-3 text-center text-white-2 mb-5'>
              <span className='text-primary mx-1 heading-primary-2 '>
                {' '}
                BSCBAY{' '}
              </span>{' '}
              <span className='text-primary mx-1 heading-primary-2 text-white'>
                {' '}
                FEATURES
              </span>
            </div>
            <Row
              className='justify-content-center feature_container'
              style={{ gap: 25 }}>
              {dataArr.map((data, i) => (
                <div
                  key={i}
                  className='box-2 bg-secondary py-4 d-flex flex-column align-items-baseline icon-hover cursor-pointer'>
                  <img
                    className='d-block'
                    height={45}
                    src={`../assets/t-icon-${i}.svg`}
                    alt='...'
                  />
                  <div className='my-2 heading-secondary-3'>{data.title}</div>
                  <div className='scroll-box flex-fill'>
                    <p className='d-block mb-0 homeSection-three-para'>
                      {data.text}
                    </p>
                  </div>
                  <div className='text-center pt-3 mt-auto w-100'>
                    <img
                      className='d-block mx-auto'
                      height={8}
                      src='../assets/arrow-down.png'
                      alt='arrow-down'
                    />
                  </div>
                </div>
              ))}
            </Row>
            <div className='border-top border-secondary mt-5 pt-4'>
              <div className='px-0 col-10 col-lg-12 col-xxl-11 mx-auto'>
                <Row className='row-cols-md-2 row-cols-lg-3 justify-content-center'>
                  <div className='p-2'>
                    <a
                      href='https://github.com/solidproof/projects/blob/main/BSCBay/SmartContract_Audit_Solidproof_BSCBay.pdf'
                      target='_blank'
                      className='btn-1 button-1 btn-color w-100'
                      rel='noreferrer'>
                      <img height={20} src='./assets/file-0.png' alt='file' />
                      <span className='ms-2 text-uppercase fw-bold text-small'>
                        Audit Reports
                      </span>
                      <img
                        className='ms-2'
                        height={13}
                        src='../assets/arrow-2.png'
                        alt='arrow'
                      />
                    </a>
                  </div>
                  <div className='p-2'>
                    <Link
                      className='btn-1 button-1 btn-color w-100'
                      onClick={
                        'https://bscscan.com/address/0xaa3387b36a4acd9d2c1326a7f10658d7051b73a6'
                      }>
                      <img height={20} src='./assets/file-1.png' alt='file' />
                      <span className='ms-2 text-uppercase fw-bold text-small'>
                        Official Smart Contract
                      </span>
                      <img
                        className='ms-2'
                        height={13}
                        src='../assets/arrow-2.png'
                        alt='arrow'
                      />
                    </Link>
                  </div>
                  <div className='p-2'>
                    <Link className='btn-1 button-1 btn-color w-100'>
                      <img height={20} src='./assets/file-2.png' alt='file' />
                      <span className='ms-2 text-uppercase fw-bold text-small'>
                        Liquidity Locks
                      </span>
                      <img
                        className='ms-2'
                        height={13}
                        src='../assets/arrow-2.png'
                        alt='arrow'
                      />
                    </Link>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default HomeFeatureSection;
