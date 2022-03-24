import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import EditProduct from "./views/EditProduct";
import OneProduct from "./views/OneProduct";
import Main from "./views/Main";



function App() {

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProduct />
          </Route>
          <Route exact path="/products/:id">
            <OneProduct/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
