import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import { requestForToken, onMessageListener } from "./firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }

    // Request notification permission
    requestForToken();

    // Listen for foreground notifications
    onMessageListener()
      .then((payload) => {
        alert(
          `Notification: ${payload.notification.title}\n${payload.notification.body}`
        );
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo PWA</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
