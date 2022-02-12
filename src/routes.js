import { Route, Switch } from 'react-router-dom';
import InformationPage from './view/information/InformationPage';
//import IncupadPage from './view/incupad/IncupadPage';
import WalletPage from './view/wallet/WalletPage';
//import IncupadPools from './view/IncupadPools/IncupadPools';
import PageNotFound from './view/PageNotFound/PageNotFound';

import HomePage from './pages/Home';
import IncupadPage from './pages/Incupad';
import IncupadPools from './pages/IncupadPools';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/dashboard' component={WalletPage} />
        <Route path='/information' component={InformationPage} />
        <Route exact path='/incupad' component={IncupadPage} />
        <Route exact path='/launchpad' component={IncupadPage} />
        <Route path='/incupad/:title' component={IncupadPools} />
        <Route path='/launchpad/:title' component={IncupadPools} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </>
  );
};

export default Routes;
