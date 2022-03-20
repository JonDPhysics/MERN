import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Planet = (props) =>{
    const {id} = useParams()
    const [planet, setPlanet] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response=>{
                console.log(response.data)
                setPlanet(response.data)
            })
            .catch(err=>console.log(err))
    }, [id])

    return(
        <div>
            {
                planet ?
                    <div>
                        <h1>{ planet.name }</h1>
                        <h3><strong>Climate:</strong> { planet.climate }</h3>
                        <h3><strong>Terrain:</strong> { planet.terrain }</h3>
                        <h3><strong>Surface Water:</strong> { planet.surface_water }</h3>
                        <h3><strong>Population:</strong> { planet.population }</h3>
                    </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src={props.img} alt="Obi-Wan Kenobi" />
                </div>
            }
        </div>
    )
}

export default Planet