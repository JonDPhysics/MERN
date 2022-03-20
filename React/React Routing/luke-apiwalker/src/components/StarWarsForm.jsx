import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const StarWarsForm = () =>{
    const [option, setOption] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSearch = (e) =>{
        e.preventDefault()
        history.push(`/${option }/${id}`)
    }
    return(
        <form onSubmit={ handleSearch }>
            <div>
                <label>Search for: </label>
                <select name="option" value={ option } onChange={e => setOption(e.target.value)}>
                    <option hidden>Choose</option>
                    <option value="People">People</option>
                    <option value="Planets">Planets</option>
                </select>
                <label>ID: </label>
                <input type="text" name="id" value={ id } onChange={e=>setId(e.target.value)}/>
                <button> Search </button>
            </div>
        </form>
    )
}

export default StarWarsForm