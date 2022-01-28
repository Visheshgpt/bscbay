import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./view/home/HomePage";
import InformationPage from "./view/information/InformationPage";
import ProjectItemPage from "./view/projects/ProjectItemPage";
import ProjectsPage from "./view/projects/ProjectsPage";
import IncupadPage from "./view/incupad/IncupadPage";
import WalletPage from "./view/wallet/WalletPage";
import UpcommingPools from "./view/upcommingPools/UpcommingPools";
// import Dapp from './components/Dapp'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/projects/item" component={ProjectItemPage} />
      <Route exact path="/wallet" component={WalletPage} />
      <Route exact path="/information" component={InformationPage} />
      <Route exact path="/incupad" component={IncupadPage} />
      <Route exact path="/upcomming-pools/:title" component={UpcommingPools} />
      {/* <Route exact path='/wallet/dashboard' component={Dapp} /> */}
    </Switch>
  );
};

export default Routes;
