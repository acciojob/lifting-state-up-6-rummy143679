import React, {useState} from "react";

const TodoList = ({todos, handleComplete}) => {
    console.log("TodoList component rendered", todos);
    // const todos = props.data;
    // const handleComplete = props.handleComplete;
    return (
        <div>
            <h2>Todo List</h2>
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
