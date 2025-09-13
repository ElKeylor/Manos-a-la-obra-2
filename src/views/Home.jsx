import { useState } from 'react';
import TaskForm from '../components/molecules/TaskForm';
import TaskList from '../components/organisms/TaskList';

//...prev, stale state
export default function Home() {
  const [tasks, setTasks] = useState([
    { id: Date.now(), text: 'Completed Task 1', completed: true },
    { id: Date.now() + 1, text: 'Task 2', completed: false },
    { id : Date.now() + 2, text: 'Task 3', completed: false }, 
    { id: Date.now() + 3, text: 'Task 4', completed: false }
  ]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prev) => [newTask, ...prev]); // cronológico inverso: lo nuevo primero
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter(t => t.id !== id));
  };

  return (
    <main className="app-container">
      <h1>LISTA DE TAREAS DE AXEL</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </main>
  );
}
