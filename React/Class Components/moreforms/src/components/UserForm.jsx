import React, { useState } from "react";

const UserForm = (props) =>{
    const [firstName, setFirstName,] = useState("")
    const [firstNameError, setFirstNameError,] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError,] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [pw, setPw] = useState("")
    const [pwError, setPwError] = useState("")
    const [cpw, setCpw] = useState("")
    const [cpwError, setCpwError] =useState("")

    const createUser = (e) =>{
        e.preventDefault()
        const newUser = { firstName, lastName, email, pw, cpw }
        return newUser
    }
    const validFirstName = (e) =>{
        setFirstName(e.target.value)
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters long!")
        }
        else{
            setFirstNameError("")
        }
    }
    const validLastName = (e) =>{
        setLastName(e.target.value)
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters long!")
        }
        else{
            setLastNameError("")
        }
    }
    const validEmail = (e) =>{
        setEmail(e.target.value)
        if (e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long!")
        }
        else{
            setEmailError("")
        }
    }
    const validPw = (e) =>{
        setPw(e.target.value)
        if(e.target.value.length < 8){
            setPwError("Password must be at least 8 characters long!")
        }
        else{
            setPwError("")
        }
    }
    const validCpw = (e) =>{
        setCpw(e.target.value)
        if(e.target.value !== pw){
            setCpwError("Confirm Password does not match Password!")
        }
        else{
            setCpwError("")
        }
    }

    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ validFirstName } />
                <p style={{color: 'red'}}>{ firstNameError }</p> 
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ validLastName } />
                <p style={{color: 'red'}}>{ lastNameError }</p>
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={ validEmail } />
                <p style={{color: 'red'}}>{ emailError }</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ validPw } />
                <p style={{color: 'red'}}>{ pwError }</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ validCpw } />
                <p style={{color: 'red'}}>{ cpwError }</p>
            </div>
            <input type="submit" value="Create User"/>
        </form>
    )
}

export default UserForm
