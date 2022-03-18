import React, { useState } from "react";
import axios from 'axios'

const GottaCatchEmAll = () =>{
    const [pokedex, setPokedex] = useState([])

    const catchPokemon =() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                console.log("Axios? Is that a pokemon?")
                console.log(response.data)
                setPokedex(response.data.results)
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            <input type="submit" onClick={ catchPokemon } value="Fill Your Pokedex!"/>
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