import React, { useState } from "react";

const TodoList = ({ todos, handleComplete }) => {
    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((item, ind) => {
                    return (
                        <li key={ind}>
                            {item.title}
                            {!item.completed && <button onClick={() => handleComplete(item.id)}>Complete</button>}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
