function VisualizadorProps({ tasks, onToggle, onDelete }) {

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          <label htmlFor="input-checkbox">
            <input
              type="checkbox"
              id="input-checkbox"
              checked={task.completed}
              onChange={() => onToggle(index)}
            />
            <span>{task.text}</span>
          </label>
          
          <button onClick={() => onDelete(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  )
}

export default VisualizadorProps