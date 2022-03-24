import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const [] = useState() // Insert required document(s)
    const [] = useState() // Insert required document(s)
    const [] = useState() // Insert required document(s)
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/one/${id}`)
            .then(res=>{
                const product = res.data
                setTitle(product.title)
                setPrice(product.price)
                setDescription(product.description)
            })
            .catch(err=> console.log(err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`, {})//Insert required document(s)
            .then(res => {
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

            // Insert document(s) in appropriate areas
    return (
        <div>
            <legend><strong>Edit Product Here</strong></legend>
            <form onSubmit={submitHandler}>
                <div>
                    <label></label>
                    <input type="" name="" value={  } onChange={ e => set(e.target.value) }/>
                </div>
                <div>
                    <label></label>
                    <input type="" name="" value={  } onChange={ e => set(e.target.value) }/>
                </div>
                <div>
                    <label></label>
                    <input type="" name="" value={  } onChange={ e => set(e.target.value) }/>
                </div>
                <button>Edit</button>
                </form>
                {
                    errors.map((err, i)=>(
                        <p key={i} style={{color:"red"}}>{err}</p>
                    ))
                }
        </div>
    )
}

export default Edit