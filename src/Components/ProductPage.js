import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const [productData, setProductData] = useState()
  const [loading, setLoading] = useState(false)
  const param = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`https://fakestoreapi.com/products/${param.id}`).then((response) => {
      setLoading(false)
      setProductData(response.data)
    })
  }, [])

  if (loading) return <p>Loading.......</p>
  
  return (
    <div>
      {productData && (
        <>
          <img src={productData.image} height='150' width='150' />
          <p>{productData.title}</p>
          <p>{productData.description}</p>
          <p>${productData.price}</p>

        </>
      )}
    </div>
  )
}

export default ProductPage
