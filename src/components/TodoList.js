import React, { useState } from "react";

const TodoList = ({ todos, handleComplete }) => {
    return (
        <div>
            <ul>
                {todos.map((todo, ind) =>
                    <li key={ind}>
                        {todo.title} {!todo.completed && (<button onClick={() => handleComplete(todo.id)}>Complete</button>)}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TodoList;
