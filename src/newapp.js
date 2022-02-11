import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Routes from './routes.js';
import ScrollToTop from './components/ScrollToTop';
import FooterPage from './view/footer/FooterPage';

import Home from './pages/Home';
import Layout from './layout/index.js';
import Homepage from './view/home/HomePage';

function App() {
  return (
    <div className='wrapper'>
      <Layout>
        <Router>
          <Route exact path='/'>
            <Home />
          </Route>
        </Router>
      </Layout>

      <Homepage />
    </div>
  );
}

export default App;
