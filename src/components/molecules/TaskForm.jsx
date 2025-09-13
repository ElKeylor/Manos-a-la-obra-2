import { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';


export default function TaskForm({ onAdd }) {
  const [text, setText] = useState('');

  //Maneja el envío del formulario
  const handleSubmit = (e) => {
    //Evita que la página se recargue
    e.preventDefault();
    //Elimina espacios en blanco y verifica que no esté vacío
    const trimmed = text.trim();
    //Evita agregar tareas vacías
    if (!trimmed) return;
    onAdd(trimmed);
    //Limpia el campo de texto después de agregar la tarea
    setText('');
  };

  return (
    //Formulario HTML para agregar nuevas tareas
    <form onSubmit={handleSubmit} className="task-form">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una nueva tarea..."
      />
      <Button type="submit">ADD</Button>
    </form>
  );
}
