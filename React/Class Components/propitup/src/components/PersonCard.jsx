import React, {Component} from 'react'

class PersonCard extends Component{
    render(){
        const {person} = this.props
        return(
            <div>
                <h1>{person.lastName}, {person.firstName}</h1>
                <h3>Age: {person.age} </h3>
                <h3>Hair Color: {person.hairColor}</h3>
            </div>

        )
    }
}

export default PersonCard