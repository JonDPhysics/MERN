import React, {useState} from "react";

const WhatToDo = (props) => {
    const [toDo, setToDo] = useState("")

    const handleIt = (e) => {
        e.preventDefault()
        console.log(toDo)
        props.onNewToDo(toDo)
    }

    return(
        <form>
            <div>
                <label>What to do??</label>
            </div>
            <div>
                <input type="text" onChange={ (e) =>{setToDo(e.target.value)} }/>
            </div>
            <div>
                <button onClick={ handleIt }>Do it!</button>
            </div>
        </form>
        
    )
}

export default WhatToDo