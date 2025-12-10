import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Link to="/add-task">Adicionar Tarefa</Link>

      <ul>
        {tasks.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
