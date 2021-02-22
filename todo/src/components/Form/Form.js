import React, { Component } from "react";
import "./Form.css";
const Form =() => {
    return (
      <form   className="NewTodoForm"autoComplete="off">
        <input
        
          className="NewTodoForm__name"
          type="text"
          name="title"
          placeholder="New Todo"
          value="title"
        />
        <input
        
          className="NewTodoForm__name"
          type="text"
          name="author"
          placeholder="Author"
          value='Author'
        />
        <select  value="Low" name="priority" className="NewTodoForm__select">
          <option value='' disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="agree" className="confirm">
          <input  type="checkbox" id="agree" name="agree" checked=""/>
          Agree with our policy
        </label>
        <button className="NewTodoForm__submit" type="submit">
          Add Todo
        </button>
      </form>
    );
  
}

export default Form;