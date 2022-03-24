import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom' 

const AllAuthors = () => {
    const [authors, setAuthors] = useState([])
    const history = useHistory()
    const [refresh, setRefresh ] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors`)
        .then(res=>setAuthors(res.data))
        .catch(err=>console.log(err))
    },[refresh])


  // have a refresh state to make sure useEffect get reloaded
    const deleteHandler = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
        .then(res=>{
            setRefresh(!refresh)
        })
        .catch(err=>console.log(err))
    }

    const editHandler = (editId) => {
        history.push(`/authors/${editId}/edit`)
    }


    return (
        <fieldset>
            <Link to="/authors/create">Add an author</Link>
            <legend><h3>We have quotes by:</h3></legend>
            <table>
                <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions avaliable</th>
                </tr>
                </thead>
                <tbody>
                {
                    authors &&
                    authors.map((author, i)=>(
                        <tr key={i}>
                        <td>{ author.name }</td>
                        <td>
                            <button onClick={()=>editHandler(author._id)}>Edit</button>
                            <button onClick={()=>deleteHandler(author._id)}>Delete</button>
                        </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </fieldset>
    )
}

export default AllAuthors