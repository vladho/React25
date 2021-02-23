import React from "react";
import "./Todo.css";
const Todo = ({ title, author, priority, id, status, removeFromList, editStatusTask }) => {
  return (
    <div className="Todo">
      <div onClick={()=>editStatusTask(id)}>
        <p className={`Todo__name ${status && "done"}`}>{title}</p>
        <p className={`Todo__priority ${status && "done"}`}> {priority}</p>
        <p className={`Todo__author ${status && "done"}  `}>{author}</p>
      </div>
      <span onClick={() => removeFromList(id)} className="Todo__remove">
        X
      </span>
    </div>
  );
};

export default Todo;

// ${status && "done"}
