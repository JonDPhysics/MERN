import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import All from './views/All';
import One from './views/One';
import Create from './views/Create';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/one/:id">
          <One/>
        </Route>
        <Route exact path="/">
          <All/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
