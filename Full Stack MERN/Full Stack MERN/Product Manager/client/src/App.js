import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductForm from "./views/ProductForm";
import AllProducts from "./views/AllProduct";
import EditProduct from "./views/EditProduct";
import OneProduct from "./views/OneProduct";



function App() {

  return (
    <BrowserRouter>
      <fieldset>
        <legend><h1><strong>Product Manager</strong></h1></legend>
        <Switch>
          <Route exact path="/products">
            <ProductForm/>
            <AllProducts/>
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProduct />
          </Route>
          <Route exact path="/products/:id">
            <OneProduct/>
          </Route>
        </Switch>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
