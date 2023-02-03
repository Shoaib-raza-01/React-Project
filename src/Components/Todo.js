import React, { useState } from 'react'

import './Todo.css'
function Todo() {

  const [inputValue, setInputValue] = useState("");
  const [inputElement, setInputElement] = useState([]);
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  console.log(inputElement)

  const addItem = () => {

    // setInputElement((current)=>{
    //   return [...current,inputValue]
    // })

// same as above

    const text = inputValue
    const updatedValue = [...inputElement,{ text : text , isChecked : false , id : Date.now()}]
    setInputElement(updatedValue)

    setInputValue('')
  }

let deleteBtn= (todoId)=>{
  let updatedValue = [...inputElement]
  // const id = updatedValue.id
  // console.log(id)
    // updatedValue.pop();
    setInputElement(updatedValue)
}

// const handleCheckbox = () => {
//   const updatedValue = [...inputElement]
//     if(updatedValue.isChecked === false){
//       updatedValue.isChecked = true
//     }else{
//       updatedValue.isChecked = false
//     }
// }

  return (
    <div>
      <div className="todo-container">
        <h1>TODO List App</h1>
        <input type="text" name="value" id="userInput" value={inputValue} onChange={handleChange} />  &nbsp; &nbsp;
        <button type="submit" id="addButton" onClick={addItem}>Add Item</button>
      </div>
      <div id="list-container">
        <ul>
          {inputElement.map((item) =>{
            return (
              <div style={{
                width : "500px",
                display : "flex",
                justifyContent : "space-between",
                height : "50px",
                border: "1px solid black",
                borderRadius : "8px",
                alignItems : "center",
                textAlign: "center"
              }}>
                <input type='checkbox' checked = {item.isChecked} onChange={()=>{
                  item.isChecked = true
                  console.log(item.isChecked)
                }}/>
                <p style= { item.isChecked ? {textDecoration : "line-through"} : {}}>
                {item.text}
                </p>
                <button className="delete-btn" onClick={deleteBtn}>X</button>
              </div>
            )
          }
          )
          }
        </ul>
      </div>
    </div>
  );
}

export default Todo
