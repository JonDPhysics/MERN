import React, {useState} from 'react'
import './App.css';

import BoxDisplay from './components/BoxDisplay'
import BoxForm from './components/BoxForm'

function App() {
  const [colors, setColors] = useState([])

  const showBoxes = (newcolor) =>{
    setColors([...colors, newcolor])
  }
  return (
    <div className="App">
      <BoxForm onNewBox ={showBoxes} />
      <BoxDisplay colors={colors} showBoxes={showBoxes}/>
    </div>
  );
}

export default App;
