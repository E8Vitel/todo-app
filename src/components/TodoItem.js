import React from "react";

function TodoItem({ todo }) {
    return (
        <div>
            <p>{todo.text}</p>
        </div>
    );
}

export default TodoItem;