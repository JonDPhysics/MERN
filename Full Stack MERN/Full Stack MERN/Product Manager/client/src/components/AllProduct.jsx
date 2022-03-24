import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const AllProducts = (props) => {
    const { products } =props

    const deleteHandler = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(res => {
            props.reload()
        })
        .catch(err => console.log(err))
    }

    return(
        <fieldset>
            <legend><h2>All Products</h2></legend>
            <table>
                <tbody>
                    {
                        products.map((product, i) => (
                            <tr key = { i }>
                                <td> <Link to={`/products/${product._id}`}>{ product.title }</Link></td>
                                <td> <Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                                <td> <button onClick={() => deleteHandler(product._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default AllProducts