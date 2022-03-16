import React, { useState } from 'react'


import WhatToDo from './components/WhatToDo'
import JustDoIt from './components/JustDoIt'


function App() {
  const [currentToDo, setCurrentToDo] = useState([])

  const haveToDo = (newToDo) =>{
    setCurrentToDo([...currentToDo, newToDo])
  }

  return (
    <div>
      <WhatToDo onNewToDo = { haveToDo } />
      <JustDoIt doIt = { currentToDo } />
    </div>
  );
}

export default App;
