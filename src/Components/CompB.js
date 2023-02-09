import React, { useContext, useEffect } from 'react'
import { StateContext } from './CompA'  //import that named export to use it

function CompB(props) {

  useEffect(()=>{
    props.fun("abc")
  },[])

  const handleClick = ()=>{
    props.update(props.value + 1 )
  }

  const state = useContext(StateContext)
  return (
    <div 
      onClick={handleClick}
      style={{
      border : "1px solid red"
    }}>
      <p>Component B : {state}</p>
    </div>
  )
}

export default CompB
