import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <UserForm/>
      <UserInfo/>
    </div>
  );
}

export default App;
