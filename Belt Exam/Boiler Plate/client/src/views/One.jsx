import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'

const One = () => {
    const {id} = useParams()
    const [theProject, setTheProject] = useState()
    const [pegLeg, setPegLeg] = useState()
    const [eyePatch, setEyePatch] = useState()
    const [hookHand, setHookHand] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/one/${id}`)
        .then(res =>{
            setTheProject(res.data)
            const pirate = res.data
            setPegLeg(pirate.pegLeg)
            setEyePatch(pirate.eyePatch)
            setHookHand(pirate.hookHand)
            })
        .catch(err => console.log(err))
    })

    const editPegLegHandler = (value) => {
        if(value === true){
            setPegLeg(false)
            setTheProject.pegLeg(false)
        }
        else{
            setPegLeg(true)
            setTheProject.pegLeg(true)
        }
    }
    const editEyePatchHandler = (value) => {
        if(value === true){
            setEyePatch(false)
            setTheProject.eyePatch(false)
        }
        else{
            setEyePatch(true)
            setTheProject.eyePatch(true)
        }
    }
    const editHookHandHandler = (value) => {
        if(value===true){
            setHookHand(false)
            setTheProject.hookHand(false)
        }
        else{
            setHookHand(true)
            setTheProject.hookHand(true)
        }
    }



    return (
        <div>
            {
                theProject ?
                <div>
                    <img src={ theProject.image } alt="a pirate" />
                    <h1>{ theProject.name }</h1>
                    <h2>{ theProject.phrase }</h2>
                    <div>
                        <h3>About</h3>
                        <h4>Position: { theProject.position }</h4>
                        <h4>Treasures: { theProject.chests }</h4>
                        <div>
                            <h4>Peg Leg: { theProject.pegLeg? "Yes":"No" }</h4>
                            <button value={ theProject.pegLeg } onClick={(e) => editPegLegHandler(e.target.value) }>{ pegLeg? "No":"Yes" }</button>
                        </div>
                        <div>
                            <h4>Eye Patch: { theProject.eyePatch? "Yes":"No" }</h4>
                            <button value={ eyePatch } onClick={(e) => editEyePatchHandler(e.target.value) }>{ eyePatch? "No":"Yes" }</button>
                        </div>
                        <div>
                            <h4>Hook Hand: { theProject.hookHand? "Yes":"No" }</h4>
                            <button value={ hookHand } onClick={(e) => editHookHandHandler(e.targetvalue) }>{ hookHand? "No":"Yes" }</button>
                        </div>
                    </div>
                </div>:
                <h1>Loading...</h1>
            }
        </div>

    )
}

export default One