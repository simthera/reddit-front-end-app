import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
