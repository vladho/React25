import React, { Component } from "react"
import { v4 as uuidv4 } from "uuid"
import "./Form.css"


  const initialState = {
    title: "",
    author: "",
    priority: "Low",
    agree: false,
    // status: false,
  }
    
    const HookForm = () => {
        const [{ title, author, agree, priority }, setForm] = useState({..initialState });
   

  inputHeandler = ({ target }) => {
      const { value, name, type, checked } = target
      setForm((prev) => ({
          ..prev
      })

  }

        const handleSubmit = (e) => {
            e.preventDefault()
            if (!agree) { return }
            const singleTask = {
      title,
      author,
      priority,
      status: false,
      id: uuidv4(),
            }
            addToList(singleTask)
            setForm(initialState)
}


    return (
      <form onSubmit={handleSubmit} className="NewTodoForm" autoComplete="off">
        <input onChange={this.inputHeandler} className="NewTodoForm__name" type="text" name="title" placeholder="New Todo" value={title} />
        <input onChange={this.inputHeandler} className="NewTodoForm__name" type="text" name="author" placeholder="Author" value={author} />
        <select onChange={this.inputHeandler} value={priority} name="priority" className="NewTodoForm__select">
          <option value="" disabled hidden>
            Priority
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <label htmlFor="agree" className="confirm">
          <input onChange={inputHeandler} type="checkbox" id="agree" name="agree" checked={agree} />
          Agree with our policy
        </label>
        <button disabled={!agree} className={agree ? "NewTodoForm__submit" : "NewTodoForm__submit-inactive"} type="submit">
          Add Todo
        </button>
      </form>
    )
  }
}

export default Form
