import React, {Component} from "react"

class Together extends Component{
    constructor(props){
        super(props)
        this.state = {
            plus: 0
        }
    }
    
    render(){
        const {person} = this.props
        return(
            <div>
                <h1>{person.lastName}, {person.firstName}</h1>
                <h3>Age: {person.age + this.state.plus} </h3>
                <h3>Hair Color: {person.hairColor}</h3>
                <button onClick={() =>{this.setState({plus :this.state.plus + 1})}}>Birthday Button for {person.firstName} {person.lastName}</button>
            </div>
        )
    }
}

export default Together