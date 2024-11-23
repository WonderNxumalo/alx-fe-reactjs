import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false},
        { id: 2, text: 'Go to bed', completed: true},
    ]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <AddTodoForm onAddTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input 
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
                            {todo.text}
                        </span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li> 
                ))}
            </ul>
            {/*  add todo form here*/}
        </div>
    );
};

export default TodoList;