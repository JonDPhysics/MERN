import React, {useState} from 'react'
import axios from "axios"
import {useHistory, Link} from "react-router-dom"

const CreateAuthor = () => {
    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    const createHandler =(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, {name})
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
            <legend><h3>Add a new author:</h3></legend>
            <form onSubmit={createHandler}>
                <div>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}/>
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

export default CreateAuthor