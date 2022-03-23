import React from "react";

const AllProducts = (props) => {
    console.log(props.showIt)

    return(
        <div>
            { props.showIt.map( (item, i) => 
                <li key = { i }>
                    { item }
                </li> ) }
        </div>
    )
}

export default AllProducts