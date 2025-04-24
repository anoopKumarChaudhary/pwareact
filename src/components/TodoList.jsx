function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span>{todo.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
