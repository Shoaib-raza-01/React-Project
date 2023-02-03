import React, {useState} from 'react'

export default function CounterApp() {
    
    const handlePlus = () =>{
        setCounter(counter + 1);
    }
    const handleMinus = () =>{
        setCounter(counter - 1);
    }

    // singlr function for both
    const updateCounter = (operation) => {
        if (operation === "increment") {
            setCounter(counter + 1);
        }else {
            setCounter(counter - 1);
        }
    }

        // now we have to give another function to onClick to pass parameter

        // onClick = {()=> {
        //     updateCounter("increment")           //pass decrement in minus 
        // }}

    const [counter , setCounter] = useState(0); 
    const style ={
        width : "400px",
        display : "flex",
        justifyContent : "Space-around"
    }
  return (
    <div className='counter-container' style={style}>
        <button className="minus" onClick={handleMinus}>-</button>
        <div className="value">{counter}</div>
        <button className="plus" onClick={handlePlus}>+</button>
    </div>
  )
}
