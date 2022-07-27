import { useState } from "react";
import Form from "./components/Form/Form";
import ToDoList from "./components/ToDoList/ToDoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  const handleTodo = (itemRemove) => {
    const filtrados = todos.filter((item) => {
      return item !== itemRemove;
    });
    setTodos(filtrados);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Form addTodo={addTodo} />
        <ToDoList todos={todos} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
