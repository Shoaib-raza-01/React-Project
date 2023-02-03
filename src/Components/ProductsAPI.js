import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
    <ul>
        <li>
            {product.length > 0 && product[0].title}
        </li>
    </ul>
  )
}

export default ProductsAPI
