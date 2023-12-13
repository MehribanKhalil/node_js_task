import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'

const Products = () => {
    const baseUrl='http://localhost:8000/products'

    const [produts, setProduts] = useState([])

    async function getData(){
        const res= await fetch(baseUrl)
        const movies=await res.json()
        setProduts(movies)
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
            produts && produts.map(product=>(
                <ProductCard key={product.id} {...product} />
            ))
        }
        </div>
       </div>
    </>
  )
}

export default Products