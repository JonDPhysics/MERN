import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import AllProducts from "../components/AllProduct";

const Main = () => {
    const [products, setProducts] = useState()
    const [refresh, setRefresh] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [refresh])

    const reload = () => {
        setRefresh(!refresh)
    }

    return (
        <fieldset>
            <legend><h1><strong>Product Manager</strong></h1></legend>
            <ProductForm reload={reload}/>
            {
                products &&
                <AllProducts products={products} reload = {reload}/>
            }
        </fieldset>
    )
}

export default Main