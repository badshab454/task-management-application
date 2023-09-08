import { useState, useEffect } from "react";
import "./App.css";
import { FaPlusCircle, FaCheck, FaTrash } from "react-icons/fa";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = () => {
    const todo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
    };
    setTodos([todo, ...todos]);
  };

  useEffect(() => {

  }, [todos])

  return (
    <div className="App">
      <div className="container">
        <h3 className="title">Task Management Application</h3>
        <form className="form_todo">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Todo"
            name="text"
          />
          <button type="button" className="btn" onClick={() => addTodo()}>
            <FaPlusCircle className="icon" />
          </button>
        </form>
        <div className="todos_wrapper">
          <div className="todo_list">
            <h3 className="todo_title">Todo</h3>
            {todos.map((item, index) =>
              <div className="todo_card" key={item.id}>
              <p className="card_text">{item.text}</p>
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
            </div>
            )}
          </div>
          <div className="todo_list">
            <h3 className="todo_title">Doing</h3>
            <div className="progress_card">
              <p className="card_text">some text here</p>
              <FaCheck className="icon-progress-todo" />
            </div>
          </div>
          <div className="todo_list">
            <h3 className="todo_title">Done</h3>
            <div className="completed_card">
              <p className="card_text">some text here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
