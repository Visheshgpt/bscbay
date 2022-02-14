import Routes from './routes.js';
import Layout from './layout/index';

function App() {
  return (
    <div className='wrapper'>
      <Layout>
        <main className='main-container scroll-box-auto shadow border-start border-end border-dark px-0 container-xxl d-flex flex-column'>
          <Routes />
        </main>
      </Layout>
    </div>
  );
}

export default App;
