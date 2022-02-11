import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/home/HomePage';
import InformationPage from './view/information/InformationPage';
import IncupadPage from './view/incupad/IncupadPage';
import WalletPage from './view/wallet/WalletPage';
import IncupadPools from './view/IncupadPools/IncupadPools';
import PageNotFound from './view/PageNotFound/PageNotFound';

import NewApp from './pages/NewApp';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/newapp' component={NewApp} />
        <Route path='/newapp/launchpad' component={NewApp} />
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
