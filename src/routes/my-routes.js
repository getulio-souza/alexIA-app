import React from "react";
import { BrowserRouter as Route, Router } from "react-router-dom";

//my pages
import Home from "../components/home-page/home";
import KnowMore from "../components/know-more/knowMore";
import Plans from "../components/plans/plans"
import Contact from "../components/contact/contact";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/alexia-app/src/components/home-page/home.js" component={Home}  />
      <Route path="/alexia-app/src/components/know-more/knowMore.js" component={KnowMore} />
      <Route path="/alexia-app/src/components/plans/plans.js" component={Plans} />
      <Route Component={Contact}  />
    </Router>
  )
}

export default Routes;
