import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InformationPage from './view/information/InformationPage';
import WalletPage from './view/wallet/WalletPage';
import PageNotFound from './view/PageNotFound/PageNotFound';
import HomePage from './pages/Home';
import IncupadPage from './pages/Incupad';
import IncupadPools from './pages/IncupadPools';
import IncpadPoolsNew from './pages/IncupadPoolsNew';
import ScrollToTop from './components/ScrollToTop';

const Routes = () => {
  return (
    <>
      <ScrollToTop>
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
          <Route path='/newpage/:title' component={IncpadPoolsNew} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
      </ScrollToTop>
    </>
  );
};

export default Routes;
