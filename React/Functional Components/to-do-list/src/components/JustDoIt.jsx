import React from "react";

const JustDoIt = (props) => {
    console.log(props.doIt)

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