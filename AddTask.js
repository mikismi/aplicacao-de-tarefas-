import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import { TaskContext } from '../context/TaskContext';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const history = useHistory();

  const handleAdd = ({ title, description }) => {
    addTask({
      id: uuidv4(),
      title,
      description,
    });

    history.push("/");
  };

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      <TaskForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddTask;
