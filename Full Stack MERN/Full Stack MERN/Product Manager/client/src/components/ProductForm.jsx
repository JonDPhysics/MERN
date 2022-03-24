import React, { useState } from "react";
import axios from "axios";

const ProductForm = (props) =>{
    // keep track of what is being typed via useState hook
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0.00)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])



    // handler when the form is submitted
    const submitHandler = (e) =>{
        // prevent default behavior of the submit
        e.preventDefault()
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res =>{
                props.reload()
                clearForm()
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

    const clearForm = ()=> {
        setTitle("")
        setPrice(0.00)
        setDescription("")

    }

    // onChange to update title, price, and description
    return (
        <fieldset>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} name = "title" value={ title }/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" onChange={(e) => setPrice(e.target.value)} name = "price" value={ price }/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} name = "description" value={ description }/>
                </div>
                <button>Create</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{color: "red"}}>{err}</p>
                ))
            }
        </fieldset>

    )
}

export default ProductForm