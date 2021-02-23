import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";

class Form extends Component {
  initialState = {
    title: "",
    author: "",
    priority: "Low",
    agree: false,
  };

  state = {
    // title: "",
    // author: "",
    // priority: "Low",
    // agree: false,
    ...this.initialState,
  };

  inputHeandler = ({ target }) => {
    // console.log(e);
    // const input = e.target;
    // const value = input.value;
    // const name = input.name;
    const { value, name, type } = target;
    this.setState({
      [name]: type === "checkbox" ? !this.state.agree : value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.agree) {
      const singleTask = {
        title: this.state.title,
        author: this.state.author,
        priority: this.state.priority,
        status: false,
        id: uuidv4(),
      };
      console.log(singleTask);
      this.props.addToList(singleTask);
      this.setState({ ...this.initialState });
    }
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
      <form
        onSubmit={this.handleSubmit}
        className="NewTodoForm"
        autoComplete="off"
      >
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

        <button
          disabled={!agree}
          className={
            agree ? "NewTodoForm__submit" : "NewTodoForm__submit-inactive"
          }
          type="submit"
        >
          Add Todo
        </button>
      </form>
    );
  }
}

export default Form;
