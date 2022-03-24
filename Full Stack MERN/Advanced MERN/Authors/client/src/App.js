import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import EditAuthor from "./views/EditAuthor";
import AllAuthors from "./views/AllAuthors";
import CreateAuthor from "./views/CreateAuthor";




function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend><h1><strong>Favorite Authors</strong></h1></legend>
        <Switch>
          <Route exact path ="/">
            <AllAuthors/>
          </Route>
          <Route exact path = "/authors/:id/edit">
            <EditAuthor/>
          </Route>
          <Route exact path = "/authors/create">
            <CreateAuthor/>
          </Route>
        </Switch>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
