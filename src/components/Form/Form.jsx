import "./Form.css";
import { useState } from "react";

export const Form = ({ addTodo }) => {
  const [name, setName] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="Faça sua nota aqui..."
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo(name);
        }}
      >
        Enviar
      </button>
    </form>
  );
};
