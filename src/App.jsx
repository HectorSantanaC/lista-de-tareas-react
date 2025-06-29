import { useState } from "react";
import VisualizadorProps from "./components/VisualizadorProps";
//import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;
    const newTask = {text: inputValue, completed: false};

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <section>
        <form id="form">
          <label htmlFor="form">Inserta la tarea:</label>
          <div>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Escribe una tarea" />
            <button onClick={handleAddTask}>Añadir</button>
          </div>
        </form>
      </section>
      <VisualizadorProps tasks={tasks} onToggle={toggleTaskCompletion}></VisualizadorProps>
    </>
  );
}

export default App;
