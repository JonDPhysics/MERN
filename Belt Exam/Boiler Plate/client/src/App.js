import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import All from './views/All';
import Edit from './views/Edit';
import Main from './views/Main';
import One from './views/One';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          <Main/>
        </Route>
        <Route exact path="/">
          <All/>
        </Route>
        <Route exact path="/edit/:id">
          <Edit/>
        </Route>
        <Route exact path="/one/:id">
          <One/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
