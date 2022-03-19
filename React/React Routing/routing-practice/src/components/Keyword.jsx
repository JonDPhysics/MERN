import React from "react";
import { useParams } from "react-router-dom";

const Keyword = () =>{
    const { keyword, text, background } = useParams()
    if(isNaN(keyword) === true){
        return(
            <h1 style={{color: text, background:background}}>The word is: { keyword }</h1>
        )
    }
    return(
        <h1 style={{color: text, background:background}}>The number is: { keyword }</h1>
    )
}

export default Keyword