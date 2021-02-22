import React from "react";
import "./Todo.css";
const Todo = ()=>{
  


  return (
    <div className="Todo">
      <div >
        <p className={`Todo__name }`}>TITLE</p>
        <p className={`Todo__priority`}> priority</p>
        <p className={`Todo__author  `}>Author</p>
      </div>
      <span  className="Todo__remove" >
       X
      </span>
    </div>
  );
};

export default Todo;

// ${status && "done"}