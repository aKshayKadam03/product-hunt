import React from "react";
import { Switch, Route } from "react-router-dom";
import Deals from "../Components/Deals/Deals";
import Product from "../Components/Product/Product";
import Mentors from "../Components/Mentors/Mentors";
import ASK from "../Components/Ask/Ask";
import { Discussions } from "../Components/Discussions/Discussions";
const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Product></Product>
        </Route>
        <Route path="/founder-club/benefits">
          <Deals />
        </Route>
        <Route path="/jobs" exact>
          Jobs Page
        </Route>
        <Route path="/discussions" exact>
          <Discussions />
        </Route>
        <Route path="/ask" exact>
          Ask Page
        </Route>
        <Route path="/mentors" exact>
          <Mentors />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
};

export default Routes;
