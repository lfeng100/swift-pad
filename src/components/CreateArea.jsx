import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title:"",
    body:""
  });

  function handleChange(event){
    const {name, value} = event.target; // name and value attributes of title/body

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value // either title or body fields for [name]
      }
    });
  }

  function submitNote(event){
    if(note.title !== "" || note.body !== ""){
      props.onAdd(note);
      retract();
    }
    setNote({
      title:"",
      body:""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }
  function retract(){
    setExpanded(false);
  }
  return (
    <div>
      <form className="create-note">
        <input value={note.title} onChange={handleChange} onMouseOver={expand} name="title" placeholder="Add Note Title..." />
        {isExpanded && <textarea value={note.body} onChange={handleChange} name="body" placeholder="Write Your Note Here..." rows={isExpanded ? 3 : 1} />}
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
