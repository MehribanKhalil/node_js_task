import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../ProductCard'

const Products = () => {
    const baseUrl='http://localhost:8000/products'

    const [products, setProducts] = useState([])

    async function getData() {
      try {
        const response = await axios.get(baseUrl);
        setProducts(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    }

    useEffect(() => {
     getData()
    }, [])
    

  return (
    <>
       <div className="container">
       <h1 className='mb-5'>Products</h1>
        <div className="row">
        {
            products && products.map(product=>(
                <ProductCard key={product.id} {...product} />
            ))
        }
        </div>
       </div>
    </>
  )
}

export default Products