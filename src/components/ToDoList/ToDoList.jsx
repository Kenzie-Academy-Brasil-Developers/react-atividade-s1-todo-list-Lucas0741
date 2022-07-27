const ToDoList = ({ todos, handleTodo }) => {
  return (
    <ul>
      {todos.map((item, index) => {
        return (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleTodo(item)}>concluir tarefa</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
