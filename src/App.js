import React, { useState } from 'react';
import './App.css';
export default function App(props) {

    const [text, setText] = useState("Wake-Up it's daytime");
    const [theme, setTheme] = useState("light")
    
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