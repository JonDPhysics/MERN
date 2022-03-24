import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom'

const OneProduct = () => {
    const {id} = useParams()
    const [theProduct, setTheProduct] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setTheProduct(res.data))
            .catch(err => console.log(err))
    })

    return (
        <fieldset>
            <legend><h3><strong>Product</strong></h3></legend>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        theProduct?
                        <tr>
                            <td>{ theProduct.title }</td>
                            <td>{ theProduct.price }</td>
                            <td>{ theProduct.description }</td>
                        </tr>:
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default OneProduct