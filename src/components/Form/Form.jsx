import { useState } from "react";

const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          value={userInput}
          type="text"
          placeholder="Insira a tarefa"
          onChange={(event) => setUserInput(event.target.value)}
        ></input>
        <button onClick={() => addTodo(userInput)}>Enviar</button>
      </form>
    </>
  );
};

export default Form;
