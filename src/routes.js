import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './view/home/HomePage';

import InformationPage from './view/information/InformationPage';
import IncupadPage from './view/incupad/IncupadPage';
import WalletPage from './view/wallet/WalletPage';
import IncupadPools from './view/IncupadPools/IncupadPools';
import PageNotFound from './view/PageNotFound/PageNotFound';

import NewHome from './pages/Home';
import NewLaunchPad from './pages/Incupad';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <NewHome />
        </Route>
        <Route path='/dashboard' component={WalletPage} />
        <Route path='/information' component={InformationPage} />
        <Route exact path='/incupad' component={IncupadPage} />
        <Route exact path='/launchpad' component={NewLaunchPad} />
        <Route path='/incupad/:title' component={IncupadPools} />
        <Route path='/launchpad/:title' component={IncupadPools} />
        <Route exact path='*' component={PageNotFound} />
      </Switch>
    </>
  );
};

export default Routes;
