import { useState } from "react";
import "./App.css";
import { AiTwotoneDelete } from "react-icons/ai";

function App() {
  const [toDos, setToDos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToDo = (event) => {
    event.preventDefault();

    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue.length === 0) {
      return;
    }

    const toDo = {
      id: Math.round(Math.random() * 10000),
      value: trimmedInputValue,
    };
    setToDos((prevState) => [...prevState, toDo]);
    setInputValue("");
  };

  const deleteToDo = (id) => {
    const updatedToDos = toDos.filter((toDo) => toDo.id !== id);
    setToDos(updatedToDos);
  };

  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <form className="todo-form">
        <input
          className="todo-input"
          placeholder="Add a todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="todo-button" onClick={(event) => addToDo(event)}>
          Add Todo
        </button>
      </form>
      {toDos.map((toDo) => {
        return (
          <div className="todo-row" key={toDo.id}>
            <div>{toDo.value}</div>

            <AiTwotoneDelete
              size={30}
              className="delete-icon"
              onClick={() => deleteToDo(toDo.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
export default App;
