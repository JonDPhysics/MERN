import React, { useState } from "react";

const GottaCatchEmAll = () =>{
    const [pokedex, setPokedex] = useState([])

    const catchPokemon = () =>{
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response =>{
            return response.json()
        })
        .then(jsonResponse =>{
            console.log("That's so fetch!")
            console.log(jsonResponse.results)
            setPokedex(jsonResponse.results)
            console.log(pokedex)
        })
        .catch(err => console.log(err))
    }




    return(
        <div>
            <input type="submit" onClick={ catchPokemon } value="Catch Pokemon"/>
            <ol>
                {pokedex.map((pokemon, i) =>
                    <li key = {i}>
                        { pokemon.name }
                    </li>
                )}
            </ol>
        </div>
    )
}

export default GottaCatchEmAll