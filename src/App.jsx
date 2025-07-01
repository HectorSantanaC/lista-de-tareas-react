import { useState } from "react";
import VisualizadorProps from "./components/VisualizadorProps";
//import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      alert("Por favor, ingresa una tarea.");
      return;
    }

    const newTask = { text: inputValue.trim(), completed: false };

    setTasks([...tasks, newTask]);
    setInputValue("");
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
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
        <form onSubmit={handleAddTask}>
          <label htmlFor="form-input">Inserta la tarea:</label>
          <div>
            <input
              type="text"
              id="form-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe una tarea"
            />
            <button type="submit">Agregar</button>
          </div>
        </form>
      </section>
      <VisualizadorProps
        tasks={tasks}
        onToggle={toggleTaskCompletion}
        onDelete={handleDeleteTask}
      ></VisualizadorProps>
    </>
  );
}

export default App;
