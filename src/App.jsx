
import './App.css';
import {FaPlusCircle, FaCheck, FaTrash} from 'react-icons/fa';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h3 className="title">Task Management Application</h3>
        <form className="form_todo">
          <input type="text" className="form-control" placeholder="Enter Your Todo" name="text"/>
          <button type="button" className="btn"><FaPlusCircle className="icon"/></button>
        </form>
        <div className="todos_wrapper">
          <div className="todo_list">
            <h3 className="todo_title">Todo</h3>
            <div className="todo_card">
              <p className="card_text">some text here</p>
              <FaCheck className="icon-check-todo" />
              <FaTrash className="icon-trash-todo" />
            </div>
          </div>
          <div className="todo_list">
            <h3 className="todo_title">Doing</h3>
          </div>
          <div className="todo_list">
            <h3 className="todo_title">Done</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App