import React, { useState } from "react";

const TodoItem = (props) => {
    const [isDone, setIsDone] = useState(false);

    const toggleIsDone = () => {
        setIsDone(!isDone);
    };

    const { name } = props;
    return (
        <div className="todo-item__container">
            <li
                className={`todo-item ${isDone ? "done" : ""}`}
                style={{ textDecoration: isDone ? "line-through" : "none" }}
                onClick={toggleIsDone}
            >
                <span>{name}</span>
            </li>
            {isDone && <span className="tag">DONE</span>}
        </div>
    );
};

export default TodoItem;
