import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import AuthRoute from "./route/AuthRoute";

// Page
import login from "./page/login";
import home from "./page/home";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
          <AuthRoute exact path="/homepage" Component={home} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
