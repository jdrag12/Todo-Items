import { useState } from "react/cjs/react.development";
import "./App.css";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

function App() {
    const [list, setList] = useState([]);

    const addNewTodo = (newTodo) => {
        setList([...list, newTodo]);
    };

    const deleteTodos = () => {
        setList([]);
    };

    return (
        <div className="App">
            <h4>This is our TODO list, we have {list.length} todos</h4>
            <ul className="todos-list">
                {list.map((todo, i) => (
                    <TodoItem name={todo} key={i} />
                ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <AddTodo addNewTodo={addNewTodo} />
                {list.length > 0 && (
                    <button onClick={deleteTodos} style={{ marginLeft: "1em" }}>
                        CLEAR
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
