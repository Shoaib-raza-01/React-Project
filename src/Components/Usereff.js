import React, {useEffect, useRef} from 'react'

function Usereff() {
  let value = useRef(0)

  // let intervalRef = useRef();

// Usereff can also get access to an element 
  const inputRef  =useRef()
  useEffect(() =>{
    inputRef.current.focus()
  },[])



  const handleClick = () => {
    value.current = 20
  }
// what happens when a component is unmounted is handled by the return function of useEffect 
  // useEffect(() =>{
  //   intervalRef = setInterval(() =>{
  //     console.log("hello")
  //   },1000)

  //   return () =>{
  //     // this runs in unmounting
  //     clearInterval(intervalRef)
  //   }
  // },[])

  return (
    <div onClick={handleClick}
          style = {{
            height : "100px",
            width : "100px",
            backgroundColor : "blueviolet"
          }}>
      {/* useRefvalues can be accessed using dot current  */}
      <input 
        ref={inputRef}
        type="text" />
      <p>value = {value.current}</p>
    </div>
  )
}

export default Usereff
