import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const Create = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [position, setPosition] = useState("")
    const [chests, setChests] = useState(0)
    const [phrase, setPhrase] = useState("")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const createHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/create', {name, image, position, phrase, pegLeg, eyePatch, hookHand, chests})//Insert reqired document(s) 
        .then(res=>{
            history.push("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors
            const errorArr = []
            for( const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key]["message"]) 
            }
            console.log(errorArr)
            setErrors(errorArr)
        })
    }

    const crewHandler = () => {
        history.push("/")
    }

    return (
        <fieldset>
            <legend>
                <div>
                    <h1>Add Pirate</h1>
                    <button onClick={ crewHandler }>Crew Board</button>
                </div>
            </legend>
            <form onSubmit={createHandler}>
                <div>
                    <label>Pirate Name: </label>
                    <input type="text" name = "name" value={ name } onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Image URL: </label>
                    <input type="text" name = "image" value={ image } onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div>
                    <label>Pirate Catch Phrase: </label>
                    <input type="text" name = "phrase" value={ phrase } onChange={(e) => setPhrase(e.target.value)}/>
                </div>
                <div>
                    <label>Crew Position: </label>
                    <select onChange={(e) => setPosition(e.target.value)}>
                        <option hidden>Choose One</option>
                        <option>Captian</option>
                        <option>First Mate</option>
                        <option>Quarter Master</option>
                        <option>Boatswain</option>
                        <option>Powder Monkey</option>
                    </select>
                </div>
                <div>
                    <label># of Treasure Chests: </label>
                    <input type="number" name = "chests" value={ chests } onChange={(e) => setChests(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="pegLeg">Peg Leg</label>
                    <input type="checkbox" name="pegLeg" checked={ pegLeg } onChange = { (e) => setPegLeg(e.target.checked)}/>
                    <label htmlFor="eyePatch">Eye Patch</label>
                    <input type="checkbox" name="eyePatch" checked={ eyePatch } onChange = { (e) => setEyePatch(e.target.checked) }/>
                    <label htmlFor="hookHand">Hook Hand</label>
                    <input type="checkbox" name="hookHand" checked={ hookHand } onChange = { (e) => setHookHand(e.target.checked) }/>
                </div>
                <button>Add Pirate</button>
            </form>
            {
                errors.map((err, i)=>{
                return(
                    <p key={i} style={{color:"red"}}>{err}</p>
                )})
            }
        </fieldset>
    )
}

export default Create