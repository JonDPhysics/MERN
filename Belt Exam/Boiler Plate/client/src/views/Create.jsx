import React, {useState} from 'react'
import axios from "axios"
import {useHistory, Link} from "react-router-dom"

const Create = () => {
    const [name1, setName1] = useState("text")//Insert type based on document
    const [name2, setName2] = useState("text")//Insert type based on document
    const [name3, setName3] = useState("text")//Insert type based on document
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const createHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/create', {name1, name2, name3})//Insert reqired document(s) 
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


    return (
        <fieldset>
            <Link to="/" >Home</Link>
            <legend><h3></h3></legend>
            <form onSubmit={createHandler}>
                <div>
                <label></label>
                <input type="text" name = "name1" value={ name1 } onChange={(e) => setName(e.target.value)}/>
                <input type="text" name = "name2" value={ name2 } onChange={(e) => setName(e.target.value)}/>
                <input type="text" name = "name3" value={ name3 } onChange={(e) => setName(e.target.value)}/>
                </div>
                <button>Create</button>
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