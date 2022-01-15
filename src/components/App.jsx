import React, { useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import NotesSection from "./NotesSection";
import Todo from "./Todo";

function App(){
  const [showToDo, setShowToDo] = useState(true);

  function toggleTodo(){
    setShowToDo(!showToDo);
  }

  function getTodo(){
    return showToDo;
  }

  const [prevTodo, setPrevTodo] = useState([]);

  return (<div>
    <Header onToggle={toggleTodo} showToDo={showToDo} />
    <NotesSection />
    <Todo checkShow={getTodo} prevTodo={prevTodo} setPrevTodo={setPrevTodo} />
    <Footer />
  </div>
  );
}

export default App;
