import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../Features/cart'

function ProductCard(props) {
 const dispatch = useDispatch();
  const handleAddToCart = () => {
    // dispatch addToCart action 
    // value is passed as a payload to add to cart and recieved as action 
    dispatch(addToCart(props.prodObj));
  }
  const style = {
    border: "2px solid black",
    borderRadius: "10px",
    height: "wrap-content",
    width: "300px",
    padding: "10px 10px",
    margin: "10px 10px",
  }
  return (
    <div style={style}>
      {/* {props.prodObj.title} */}
      <img src={props.prodObj.image} alt="image" width='100px' height='100px' />

      <Link to={`/products/${props.prodObj.id}`}>
        <h3>{props.prodObj.title}</h3>
      </Link>
      <p>{props.prodObj.description}</p>
      <button className="btn btn-outline-success" type="submit" onClick={handleAddToCart}>Add to Cart</button>

    </div>
  )
}

export default ProductCard
