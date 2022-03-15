import React, { useState } from "react";

const BoxForm = (props) =>{
    const [color, setColor] = useState("")

    const CreateBox = (e) =>{
        e.preventDefault()
        props.onNewBox(color)
    }

    return(
        <form>
            <div>
                <label>Color </label>
                <input type="text" onChange={ (e) => setColor(e.target.value) }/>
                <button onClick={CreateBox}>Add</button>
            </div>
        </form>
    )
}

export default BoxForm