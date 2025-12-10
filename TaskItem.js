import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  const { removeTask } = useContext(TaskContext);

  return (
    <li style={{ margin: "10px 0" }}>
      <strong>{task.title}</strong>
      <p>{task.description}</p>

      <Link to={`/edit/${task.id}`}>Editar</Link>
      {" | "}
      <button onClick={() => removeTask(task.id)}>
        Excluir
      </button>
    </li>
  );
};

export default TaskItem;
