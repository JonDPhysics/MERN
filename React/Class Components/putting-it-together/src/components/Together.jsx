import React, {Component} from "react"

class Together extends Component{
    // Declare constructor to override our default constructor so that we can initially set the state object
    constructor(props){
        // gives us all the functionality of the default costructor that comes with Component
        super(props)
        this.state = {
            message: "Welcome to the site"
        }
    }

    logout = (e)=> {
        this.setState({message: "Goodbye Friend"})
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.logout}>Leave</button>
                <h1>
                    { this.props.header }
                </h1>
                { this.props.children }
            </div>
        )
    }
}

export default Together