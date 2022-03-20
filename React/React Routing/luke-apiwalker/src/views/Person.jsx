import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Person = (props) =>{
    const {id} = useParams()
    const [person, setPerson] = useState()

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response=>{
                console.log(response.data)
                setPerson(response.data)
            })
            .catch(err=>console.log(err))
    }, [id])

    return(
        <div>
            {
                person ?
                    <div>
                        <h1>{ person.name }</h1>
                        <h3><strong>Height:</strong> { person.height }</h3>
                        <h3><strong>Mass:</strong> { person.mass }</h3>
                        <h3><strong>Hair Color:</strong> { person.hair_color }</h3>
                        <h3><strong>Skin Color:</strong> { person.skin_color }</h3>
                    </div>:
                <div>
                    <h1>These aren't the droids you're looking for</h1>
                    <img src={props.img} alt="Obi-Wan Kenobi" />
                </div>
            }
        </div>
    )
}

export default Person