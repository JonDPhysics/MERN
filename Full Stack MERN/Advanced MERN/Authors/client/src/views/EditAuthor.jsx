import React, { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, useParams, Link } from 'react-router-dom'

const EditAuthor = () => {
    const {id} = useParams()
    const [name, setName] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data
                setName(author.name)
            })
            .catch(err => console.log(err))
    }, [id])

    const editHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, { name })
            .then(res =>{
                history.push("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key]["message"])
                }
                setErrors(errorArr)
            })
    }

    const cancleHandler = () => {
        history.push("/")
    }

    return (
        <fieldset>
            <Link to="/">Home</Link>
            <legend> Edit this author</legend>
            <form onSubmit={editHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div>
                    <button onClick={cancleHandler}>Cancel</button>
                    <button>Edit</button>
                </div>
            </form>
            {
                errors.map((err, i)=>(
                    <p key={i} style={{color:"red"}}>{err}</p>
                ))
            }
        </fieldset>
    )
}

export default EditAuthor