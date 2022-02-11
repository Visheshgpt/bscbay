import Routes from './routes.js';
import Layout from './layout/index';

function App() {
  return (
    <div className='wrapper'>
      <Layout>
        <main
          id='scrolly-main'
          className='main-container scroll-box-auto shadow border-start border-end border-dark px-0 container-xxl d-flex flex-column overflow-auto'>
          <Routes />
        </main>
      </Layout>
    </div>
  );
}

export default App;
