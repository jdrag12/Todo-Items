import { useState } from "react";

const AddTodo = ({ addNewTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleClick = () => {
        addNewTodo(newTodo);
        setNewTodo("");
    };

    return (
        <div>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button onClick={handleClick}>ADD</button>
        </div>
    );
};

export default AddTodo;
