import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  // we get the whole store here then return which store we want

  const cartProducts = useSelector((store) => store.cart);

  let count = 0;
  
  cartProducts.map((product) => {
    count = count + product.qty;
  });

  return (
    <>
      <p>Cart ({count})</p>
    </>
  )
}

export default Cart
