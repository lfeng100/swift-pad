import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Fab from '@mui/material/Fab';

function Note(props) {
  function handleDelete(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <Fab onClick={handleDelete}>
      <DeleteOutlineIcon />
      </Fab>
    </div>
  );
}

export default Note;
