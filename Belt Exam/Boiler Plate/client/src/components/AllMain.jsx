import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const AllMain = (props) => {
    const { projects } =props

    const deleteHandler = (deleteId) => {
        axios.delete(`http://localhost:8000/api/delete/${deleteId}`)
        .then(res => {
            props.reload()
        })
        .catch(err => console.log(err))
    }

    return(
        <fieldset>
            <legend><h2></h2></legend>
            <table>
                <tbody>
                    {
                        projects.map((project, i) => (
                            <tr key = { i }>
                                <td> <Link to={`/one/${product._id}`}>{ product.title }</Link></td>
                                <td> <Link to={`/edit/${product._id}`}>Edit</Link></td>
                                <td> <button onClick={() => deleteHandler(project._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default AllMain