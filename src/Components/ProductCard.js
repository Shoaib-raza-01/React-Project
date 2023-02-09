import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const style = {
        border : "2px solid black",
        borderRadius : "10px",
        height : "wrap-content",
        width : "300px",
        padding : "10px 10px",
        margin : "10px 10px",
    }
  return (
    <div style={style}>
      {/* {props.prodObj.title} */}
      <img src={props.prodObj.image} alt="image" width='100px' height = '100px'/>
      
      <Link to= {`/products/${props.prodObj.id}`}>
      <h3>{props.prodObj.title}</h3>
</Link>
      <p>{props.prodObj.description}</p>
    </div>
  )
}

export default ProductCard
