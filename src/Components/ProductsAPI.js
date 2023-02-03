import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';

function ProductsAPI() {

    const [product, setProduct] = useState([])
    // console.log()
    useEffect(function (){
        //make api call
        const promise = axios.get("https://fakestoreapi.com/products")
        promise.then(
            function(response){
                // console.log(response.data)
                setProduct(response.data);
            }

        )
    }, []);

  return (
    <div style={{display : "flex", flexWrap : "wrap"}}>
        {/* <li>
            {product.length > 0 && product[0].title}
        </li> */}
        {
            product.map((items) =>{
                return <ProductCard key = {items.id} prodObj = {items} />
            })
        }
    </div>
  )
}

export default ProductsAPI
