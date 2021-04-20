import React from "react";
import { Switch, Route } from "react-router-dom";

/* Import components */
import {GithubState} from "./context/github/githubState";
import {AlertState}  from "./context/alert/alertState";
import {Navbar}      from "./components/Navbar";
import {Home}        from "./pages/Home";
import {About}       from "./pages/About";
import {Profile}     from "./pages/Profile";
import {Alert}       from "./components/Alert";

function App() {
  return (
      <GithubState>
          <AlertState>
              <div>
                  <Navbar />
                  <div className="container pt-4">
                      <Alert alert={{ text: "test" }} />
                      <Switch>
                          <Route path="/" exact component={Home} />
                          <Route path="/about" component={About} />
                          <Route path="/profile/:name" component={Profile} />
                      </Switch>
                  </div>
              </div>
          </AlertState>
      </GithubState>
  );
}

export default App;
