import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
import Navbar from './Navbar';

function ProductsAPI() {

    const [product, setProduct] = useState([])
    // console.log()

    const handleChange = (event) =>{
       const query = event.target.value;
      //  console.log(query)
       axios.get(
        query ==="all" ? "https://fakestoreapi.com/products":
        `https://fakestoreapi.com/products/category/${query}`
        ).then((response) =>{
            setProduct(response.data)
        });
       
    }

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
    <>
        <Navbar />
      <select onChange={handleChange}>
        <option value="all" >All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>
      <div style={{display : "flex", flexWrap : "wrap", justifyContent: "center" }}>
        {/* <li>
            {product.length > 0 && product[0].title}
        </li> */}
        {
            product.map((items) =>{
                return <ProductCard key = {items.id} prodObj = {items} />
            })
        }
    </div>
    </>
  )
}

export default ProductsAPI
