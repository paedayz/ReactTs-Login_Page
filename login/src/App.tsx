import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

// Page
import login from "./page/login";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={login} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
