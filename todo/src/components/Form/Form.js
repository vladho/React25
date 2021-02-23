import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    title: "",
    author: "",
    priority: "Low",
    agree: false,
  };

  inputHeandler = ({ target }) => {
    // console.log(e);
    // const input = e.target;
    // const value = input.value;
    // const name = input.name;
    const { value, name, type } = target;
    this.setState({
      [name]: type === 'checkbox' ? !this.state.agree : value,
    });
  };

  // titleInputHeandler = ({ target }) => {
  //   const { value } = target;
  //   // const value = input.value;
  //   this.setState({
  //     title: value,
  //   });
  // };

  // authorInputHeandler = (e) => {
  //   const input = e.target;
  //   const value = input.value;
  //   this.setState({
  //     author: value,
  //   });
  // };

  render() {
    const { title, author, priority, agree } = this.state;
    return (
      <form className="NewTodoForm" autoComplete="off">
        <input
          onChange={this.inputHeandler}
          className="NewTodoForm__name"
          type="text"
          name="title"
          placeholder="New Todo"
          value={title}
        />
        <input
          onChange={this.inputHeandler}
          className="NewTodoForm__name"
          type="text"
          name="author"
          placeholder="Author"
          value={author}
        />
        <select
          onChange={this.inputHeandler}
          value={priority}
          name="priority"
          className="NewTodoForm__select"
        >
          <option value="" disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="agree" className="confirm">
          <input
            onChange={this.inputHeandler}
            type="checkbox"
            id="agree"
            name="agree"
            checked={agree}
          />
          Agree with our policy
        </label>
        <button className="NewTodoForm__submit" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

export default Form;
