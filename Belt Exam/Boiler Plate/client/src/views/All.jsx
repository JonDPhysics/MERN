import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom' 

const All = () => {
    const [projects, setProjects] = useState([])
    const history = useHistory()
    const [refresh, setRefresh ] = useState(true)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/all`)
        .then(res=>setProjects(res.data))
        .catch(err=>console.log(err))
    },[refresh])


  // have a refresh state to make sure useEffect get reloaded
    const deleteHandler = (deleteId) => {
        axios.delete(`http://localhost:8000/api/delete/${deleteId}`)
        .then(res=>{
            setRefresh(!refresh)
        })
        .catch(err=>console.log(err))
    }

    const editHandler = (editId) => {
        history.push(`/edit/${editId}/`)
    }


    return (
        <fieldset>
            <Link to="/create"></Link>
            <legend><h3></h3></legend>
            <table>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    projects &&
                    projects.map((project, i)=>(
                        <tr key={i}>
                        { <td>{ project. }</td> }{/* Insert required document */}
                        <td>
                            <button onClick={()=>editHandler(project._id)}>Edit</button>
                            <button onClick={()=>deleteHandler(project._id)}>Delete</button>
                        </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </fieldset>
    )
}

export default All