import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if(inputText !== ""){
      setItems(prevItems => {
        return [...prevItems, inputText];
      });
      setInputText("");
    }
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="body-todo">
      <div className="container-todo">
        <div className="heading-todo">
          <h1>To-Do List</h1>
        </div>
        <div className="form-todo">
          <p>(Click on a List item to remove it)</p>
          <input onChange={handleChange} type="text-todo" value={inputText} placeholder="Type Here..." />
          <Fab className="button-todo" onClick={addItem}><AddIcon /></Fab>
        </div>
        <div>
          <ul className="ul-todo">
            {items.map((todoItem, index) => (
              <TodoItem
                key={uuidv4()}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
