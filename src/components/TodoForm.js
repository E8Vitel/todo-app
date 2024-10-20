import React from "react";

function TodoForm() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Agregar una tarea" />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default TodoForm;