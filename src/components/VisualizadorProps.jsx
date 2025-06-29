function VisualizadorProps({ tasks, onToggle }) {

  return (
    <ul>
      <checkbox></checkbox>
      {tasks.map((task, index) => (
        <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
          />
          {task.text}
        </li>
      ))}
    </ul>
  )
}

export default VisualizadorProps