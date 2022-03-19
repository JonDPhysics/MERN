import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from "./components/Home";
import Keyword from "./components/Keyword";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:keyword/:text?/:background?">
          <Keyword/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
