import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom' 

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

    const oneHandler = (oneId) => {
        history.push(`/one/${oneId}/`)
    }

    const addHandler = () => {
        history.push('/create')
    }

    return (
        <fieldset>
            <legend>
                <h3>Pirate Crew</h3>
                <button onClick={addHandler}>Add Pirate</button>
            </legend>
                {
                    projects &&
                    projects.map((project, i)=>(
                        <table key={i}>
                            <thead>
                                <tr>
                                    <th>{ project.name }</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={ project.image } alt="A pirate" /></td>
                                    <td>
                                        <button onClick={()=>oneHandler(project._id)}>View Pirate</button>
                                        <button onClick={()=>deleteHandler(project._id)}>Walk the Plank</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ))
                }
        </fieldset>
    )
}

export default All