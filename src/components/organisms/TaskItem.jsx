import Checkbox from '../atoms/Checkbox';
import Button from '../atoms/Button';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
        <span>{task.text}</span>
      </label>
      <Button onClick={() => onDelete(task.id)} className="delete-btn">🗑️</Button>
    </li>
  );
}
