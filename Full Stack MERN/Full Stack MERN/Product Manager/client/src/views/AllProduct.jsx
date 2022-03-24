import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])


    return(
        <fieldset>
            <legend><h2>All Products</h2></legend>
            <table>
                <tbody>
                    {
                        products &&
                        products.map((product, i) => (
                            <tr key = { i }>
                                <td><Link to={`/products/${product._id}`}>{ product.title }</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default AllProducts