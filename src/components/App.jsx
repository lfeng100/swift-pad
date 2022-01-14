import React, { useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from "uuid";

function App(){

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

  return (<div>
    <Header />
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
    <Footer />
  </div>
  );
}

export default App;
