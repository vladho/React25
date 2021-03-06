import React, { useState, Component } from "react";
import Form from "../Form/Form";
import Todo from "../Todo/Todo";
import "./TodoList.css";


class TodoList extends Component {

  state = {
    todoList: []
  }
  
  render(){
    return(
      <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <Form />
      <ul className="TodoList__todos">
          <li >
            <Todo />
          </li>
      </ul>
      <div className="filters">
        <button  className="NewTodoForm__submit" data-filter="all">
          All
        </button>
        <button  className="NewTodoForm__submit" data-filter="completed">
          Completed
        </button>
        <button  className="NewTodoForm__submit" data-filter="uncompleted">
          Uncompleted
        </button>
      </div>
    </div>
    )
  }
}


// const TodoList = () => {
// return (
  // <div className="TodoList">
  //   <h1 className="TodoList__title">Todo List</h1>
  //   <Form />
  //   {/* <HookForm /> */}
  //   <ul className="TodoList__todos">
  //     {[].map((todo, index) => (
  //       <li key={todo.id}>
  //         <Todo />
  //       </li>
  //     ))}
  //   </ul>
  //   <div className="filters">
  //     <button className="NewTodoForm__submit" data-filter="all">
  //       All
  //     </button>
  //     <button className="NewTodoForm__submit" data-filter="completed">
  //       Completed
  //     </button>
  //     <button className="NewTodoForm__submit" data-filter="uncompleted">
  //       Uncompleted
  //     </button>
  //   </div>
  // </div>
// );
// };

export default TodoList;