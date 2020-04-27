import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Home from './components/pages/Home';
import Books from "./components/pages/Books";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/books" component={Books}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
