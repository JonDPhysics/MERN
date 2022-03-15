import React from "react";

const BoxDisplay = (props) =>{
    const addColor = [...props.newBoxes]

    const boxHandler = (i, newColor) =>{
        addColor[i].color = newColor
        props.showBoxes(addColor)
    }
    
    return(
        <svg>
            {
                props.addBoxes.map((color) =>{
                    return(
                        <rect height={100} width={100} fill={color}/>
                    )
                })
            }
        </svg>
    )
}

export default BoxDisplay