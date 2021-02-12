import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./Home";
import RandomMovie from "./RandomMovie";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/random-movie">
          <RandomMovie />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
