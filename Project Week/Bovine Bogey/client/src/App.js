import React from "react";
import { BrowserRouter, Switch, Router } from "react-router-dom"


function App() {

  return (
    
    <BrowserRouter>
      <fieldset>
        <legend><h1>Bovine Bogey</h1></legend>
        <Switch>
          <Route exact path="/">
            <Bogey/>
          </Route>
          <Route exact path = "/bogey/add">
            <Add/>
          </Route>
          <Route exact path ="/bogey/care">
            <Care/>
          </Route>
        </Switch>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
