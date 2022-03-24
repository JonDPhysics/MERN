import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom'

const EditProduct = () => {
    const {id} = useParams()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const history = useHistory()
    const [errors, setErrors] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
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
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
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

    return (
        <div>
            <legend><strong>Edit Product Here</strong></legend>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={price} onChange={e=>setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" name="description" value={description} onChange={e=>setDescription(e.target.value)}/>
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

export default EditProduct