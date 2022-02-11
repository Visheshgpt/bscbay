import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Incupad from './Incupad';
import Layout from '../layout/index';

function NewApp() {
  return (
    <div className='wrapper'>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/newapp'>
              <Home />
            </Route>
            <Route path='/newapp/launchpad'>
              <Incupad />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default NewApp;
