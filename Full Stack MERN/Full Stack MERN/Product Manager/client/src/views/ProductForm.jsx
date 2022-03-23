import React, { useState } from "react";
import axios from "axios";

const ProductForm = () =>{
    // keep track of what is being typed via useState hook
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    // onChange to update title, price, and description
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title: </label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={ title }/>
            </div>
            <div>
                <label>Price: </label>
                <input type="text" onChange={(e) => setPrice(e.target.value)} value={ price }/>
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={ description }/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default ProductForm