import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./view/home/HomePage";
import InformationPage from "./view/information/InformationPage";
import ProjectItemPage from "./view/projects/ProjectItemPage";
import ProjectsPage from "./view/projects/ProjectsPage";
import IncupadPage from "./view/incupad/IncupadPage";
import WalletPage from "./view/wallet/WalletPage";
import IncupadPools from "./view/IncupadPools/IncupadPools";
import PageNotFound from "./view/PageNotFound/PageNotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/wallet" component={WalletPage} />
      <Route path="/information" component={InformationPage} />
      <Route exact path="/incupad" component={IncupadPage} />
      <Route path="/incupad/:title" component={IncupadPools} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
