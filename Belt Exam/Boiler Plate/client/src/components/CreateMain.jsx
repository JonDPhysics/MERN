import React, { useState } from "react";
import axios from "axios";

const CreateMain = (props) =>{
    // keep track of what is being typed via useState hook
    const [] = useState() // Insert required document(s)
    const [] = useState() // Insert required document(s)
    const [] = useState() // Insert required document(s)
    const [errors, setErrors] = useState([])



    // handler when the form is submitted
    const submitHandler = (e) =>{
        // prevent default behavior of the submit
        e.preventDefault()
        // make a post request to create a new product
        axios.post('http://localhost:8000/api/create', {
            // Insert required document(s)
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
        // Insert document(s) to be cleared

    }
            // Insert document(s) in the appropriate areas
    return (
        <fieldset>
            <form onSubmit={submitHandler}>
                <div>
                    <label></label>
                    <input type="" onChange={(e) => set(e.target.value)} name = "" value={  }/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="" onChange={(e) => set(e.target.value)} name = "" value={  }/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="" onChange={(e) => set(e.target.value)} name = "" value={  }/>
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

export default CreateMain