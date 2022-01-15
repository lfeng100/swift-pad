import React, { useState} from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function NotesSection(){
  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((theNote, index) => {
        return (
          <Note
            key={uuidv4()}
            id={index}
            title={theNote.title}
            body={theNote.body}
            onDelete={deleteNote} />
        )
      })}
    </div>
  );
}

export default NotesSection;
