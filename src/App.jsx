const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h3 title>Task Management Application</h3>
        <form className="form_todo">
          <input type="text" className="form-control" onChange={(e) => setInput(e.target.value)} placeholder="Enter Your Todo" name="text"/>
          <button type="button" className="btn" onClick={() => addTodo()}><FaPlusCircle className="icon"/></button>
        </form>
      </div>
    </div>
  )
}

export default App