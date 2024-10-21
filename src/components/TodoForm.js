import React, { useState } from "react";

function TodoForm({ addTodo }) {
    const [input, setInput] = useState(''); // State para el input

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que se recargue la pagina
        addTodo(input); // Llama a la funcion pasada desde App.js
        setInput(''); // Establece el input vacio despues de agregar una tarea
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Agregar una tarea"
                    value={input}
                    // Se actualiza el input al cambiar su valor
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default TodoForm;