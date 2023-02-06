import React, { useEffect } from 'react'

function CompB(props) {

  useEffect(()=>{
    props.fun("abc")
  },[])

  const handleClick = ()=>{
    props.update(props.value + 1 )
  }
  return (
    <div 
      onClick={handleClick}
      style={{
      border : "1px solid red"
    }}>
      <p>Component B : {props.value}</p>
    </div>
  )
}

export default CompB
