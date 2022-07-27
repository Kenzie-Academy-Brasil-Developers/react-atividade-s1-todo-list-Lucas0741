import { Form } from "./components/Form/Form";
import { ToDoList } from "./components/ToDoList/ToDoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleTodo = (itemTodo) => {
    const newRend = todos.filter((item) => item !== itemTodo);

    setTodos(newRend);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <ToDoList todos={todos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
