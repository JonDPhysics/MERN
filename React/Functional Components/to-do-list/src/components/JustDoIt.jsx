import React, { useState } from "react";

const JustDoIt = (props) => {
    console.log(props.doIt)

    const doneDeed = (crossout) =>{
        const done = props.currentToDo
    }
    return(
        <ol>
            { props.doIt.map( (item, i) =>
                    <li key = { i }>
                        { item } 
                    </li> ) }
        </ol>
    )
}

export default JustDoIt