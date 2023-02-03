import React, {useState, useEffect} from 'react';
import './Card.css';

export default function Card() {
    const [text, setText] = useState("Wake-Up it's daytime");
    const [theme, setTheme] = useState("light")
    
    // useEffect takes a function and a array as parameters
    // it is called only once when the component is called for the first time or mounting phase
    // to change the useEffect whenever state changes pass the state in the second parameter i.e. array 
    //useEffect accepts only one state 
    //useEffect function can also return a function
    useEffect(() => {
        console.log("hello by useEffect");

        return function () {
            //------------todo------------
        }
    },[]);

    const handleClick = () =>{
        if (text === "Wake-Up it's daytime" && theme === "light") {
            setText("It's time to sleep")
            setTheme("dark")
            document.body.style.backgroundColor = "#000000"
        } else {
            setText("Wake-Up it's daytime")
            setTheme("light")
            document.body.style.backgroundColor = "#8e8e7d"
        }
    }
  return (
    <div>
        <div className = {`card ${theme}`} onClick={handleClick}>
            <p className="text">{text}</p>
        </div>
    </div>
  )
}
