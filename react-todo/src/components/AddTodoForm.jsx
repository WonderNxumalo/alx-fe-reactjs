import { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      onAddTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;