import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import { TaskContext } from '../context/TaskContext';
import { useParams, useHistory } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const history = useHistory();
  const { tasks, editTask } = useContext(TaskContext);

  const taskToEdit = tasks.find(t => t.id === id);

  const handleEdit = ({ title, description }) => {
    editTask({
      id,
      title,
      description,
    });

    history.push("/");
  };

  return (
    <div>
      <h1>Editar Tarefa</h1>

      {taskToEdit ? (
        <TaskForm initialData={taskToEdit} onSubmit={handleEdit} />
      ) : (
        <p>Tarefa não encontrada.</p>
      )}
    </div>
  );
};

export default EditTask;
