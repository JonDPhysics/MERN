import React, { useState } from "react";

const UserForm = (props) =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [cpw, setCpw] = useState("")

    const createUser = (e) =>{
        e.preventDefault()
        const newUser = { firstName, lastName, email, pw, cpw }
        console.log("Welcome", newUser)
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPw(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setCpw(e.target.value) } />
            </div>
            <input type="submit" value="Create User"/>
            <div>
                <label><strong>First Name:</strong> {firstName}</label>
            </div>
            <div>
                <label><strong>Last Name:</strong> {lastName}</label>
            </div>
            <div>
                <label><strong>Email:</strong> {email}</label>
            </div>
            <div>
                <label><strong>Password:</strong> {pw}</label>
            </div>
            <div>
                <label><strong>Confirm Password:</strong> {cpw}</label>
            </div>
        </form>
    )
}

export default UserForm