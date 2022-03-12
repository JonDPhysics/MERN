import React from 'react'
import './App.css';
import Together from './components/Together'

function App() {
  return (
    <div className="App">
      <Together person= { {firstName:"Jane", lastName: "Doe", age: 45, hairColor: "Black"} } />
      <Together person= { {firstName:"John", lastName: "Smith", age: 88, hairColor: "Brown"} } />
      <Together person= { {firstName:"Millard", lastName: "Fillmore", age: 50, hairColor: "Brown"} } />
      <Together person= { {firstName:"Maria", lastName: "Smith", age: 62, hairColor: "Brown"} } />
    </div>
  );
}

export default App;
