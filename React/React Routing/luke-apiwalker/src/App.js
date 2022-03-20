import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import StarWarsForm from './components/StarWarsForm';
import Person from './views/Person';
import Planet from './views/Planet';
import oldben from './images/oldben.jpg';

function App() {
  return (
    <BrowserRouter>
      <h1>Star Wars</h1>
      <StarWarsForm/>
      <Switch>
        <Route path = "/people/:id">
          <Person img ={ oldben}/>
        </Route>
        <Route path = "/planets/:id">
          <Planet img={oldben}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
