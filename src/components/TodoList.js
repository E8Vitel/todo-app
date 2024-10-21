import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
    return (
        <div>
            <h2>Lista de tareas</h2>
            {todos.map((todo, index) => ( // Recorre la lista y muestra las tareas individualmente
                <TodoItem key={index} todo={todo} /> 
            ))}
        </div>
    );
}

export default TodoList;