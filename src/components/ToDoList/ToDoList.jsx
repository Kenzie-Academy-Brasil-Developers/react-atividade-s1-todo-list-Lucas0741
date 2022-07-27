import "./ToDoList.css";

export const ToDoList = ({ todo, handleTodo }) => {
  return (
    <ul>
      {todos.map((item, i) => (
        <li key={i}>
          <p>{item}</p>
          <button
            onClick={(e) =>
              handleTodo(e.target.parentNode.children[0].textContent)
            }
          >
            Concluir tarefa
          </button>
        </li>
      ))}
    </ul>
  );
};
