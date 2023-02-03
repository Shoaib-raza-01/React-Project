import React, { useState } from 'react'

import './Todo.css'
function Todo() {

  // const initialList = [
  //   {isChecked: false, todoText : "Exercise"}
  // ]
  
  // const [itemList, setItemList] = useState(initialList);

  const [inputValue, setInputValue] = useState("");
  const [inputElement, setInputElement] = useState({});
  // const [inputElement, setInputElement] = useState({text : "hello", isChecked: false});
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const addItem = () => {
    // setInputElement((current)=>{
    //   return [...current,inputValue]
    // })

// same as above

    const text = inputValue
    const updatedValue = [...inputElement,{ text : text , isChecked : false}]
    // updatedValue.push(text);
    setInputElement(updatedValue)

    setInputValue('')
  }

const deleteBtn= ()=>{
  // const updatedValue = [...inputElement]
  //   updatedValue.pop();
  //   setInputElement(updatedValue)
}

  return (
    <div>
      <div className="todo-container">
        <h1>TODO List App</h1>
        <input type="text" name="value" id="userInput" value={inputValue} onChange={handleChange} />  &nbsp; &nbsp;
        <button type="submit" id="addButton" onClick={addItem}>Add Item</button>
      </div>
      <div id="list-container">
        <ul>
          {inputElement.map(item =>
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
            <input type='checkbox' checked = {item.isChecked}/>
            <p style= { item.isChecked ? {textDecoration : "line-through"} : {}}>
            {item.text}
            </p>
            <button className="delete-btn" onClick={deleteBtn}>X</button>
          </div>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Todo
