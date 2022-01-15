import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li className="li-todo">{props.text}</li>
    </div>
  );
}

export default ToDoItem;
