import React from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Fab from '@mui/material/Fab';

function Header(props){
  setInterval(updateTime, 1000);

  let time = new Date().toLocaleTimeString();
  const [curTime, setTime] = React.useState(time);
  function updateTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (<header>

    <h1><BorderColorIcon />Swift Pad</h1>
    <Fab className="show-to-do" onClick={props.onToggle}>{props.showToDo ? "Hide Todo" : "Show Todo"}</Fab>
    <p>{curTime}</p>
  </header>
  );
}

export default Header;
