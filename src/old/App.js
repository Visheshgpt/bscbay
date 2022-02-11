import Routes from './routes.js';

function App() {
  return (
    <div className='wrapper'>
      <main
        id='scrolly-main'
        className='main-container scroll-box-auto shadow border-start border-end border-dark vh-100 px-0 container-xxl d-flex flex-column overflow-auto'>
        <Routes />
      </main>
    </div>
  );
}

export default App;
