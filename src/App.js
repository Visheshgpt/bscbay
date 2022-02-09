import Routes from "./routes.js";
import FooterPage from "./view/footer/FooterPage";

function App() {
  return (
    <main
      id="scrolly-main"
      className="main-container bg-white scroll-box-auto shadow border-start border-end border-dark vh-100 px-0 container-xxl d-flex flex-column overflow-auto"
    >
      <Routes />
      <FooterPage />
    </main>
  );
}

export default App;
