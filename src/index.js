import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import ContactPage from "views/LandingPage/ContactPage.js";
import LargeBox from "views/ProfilePage/LargeBox.js";
import MediumBox from "views/ProfilePage/MediumBox.js";
import SmallBox from "views/ProfilePage/SmallBox.js";
import KindlingBox from "views/ProfilePage/KindlingBox.js";
import CollectionOrders from "views/ProfilePage/CollectionOrders.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/contact-page" component={ContactPage} />
      <Route path="/large-box" component={LargeBox} />
      <Route path="/medium-box" component={MediumBox} />
      <Route path="/small-box" component={SmallBox} />
      <Route path="/kindling-box" component={KindlingBox} />
      <Route path="/collection-orders" component={CollectionOrders} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
