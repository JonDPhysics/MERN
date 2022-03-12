import React from 'react'
import './App.css';
import Together from './components/Together'

function App() {
  return (
    <div className="App">
      <Together header ={ "Header Prop" }>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
        <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
      </Together>
    </div>
  );
}

export default App;
