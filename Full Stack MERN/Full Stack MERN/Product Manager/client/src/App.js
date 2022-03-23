import React, { useState } from "react"
import ProductForm from "./views/ProductForm";


function App() {
  const [createdProducts, setCreatedProducts] = useState([])

  const listProducts = (newProduct) => {
    setCreatedProducts([...createdProducts, newProduct])
  }
  return (
    <div>
      <ProductForm onNewProduct = { listProducts }/>
      <AllProducts showIt = { createdProducts }/>
    </div>
  );
}

export default App;
