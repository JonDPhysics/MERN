import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'

const One = () => {
    const {id} = useParams()
    const [theProject, setTheProject] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/one/${id}`)
            .then(res => setTheProject(res.data))
            .catch(err => console.log(err))
    })

            // Insert document(s) in appropriate areas
    return (
        <fieldset>
            <legend><h3><strong></strong></h3></legend>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        theProject?
                        <tr>
                            <td>{ theProject. }</td>
                            <td>{ theProject. }</td>
                            <td>{ theProject. }</td>
                        </tr>:
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default One