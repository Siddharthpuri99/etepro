import React from "react";
import "font-awesome/css/font-awesome.min.css";
function TodosList({ todos, setTodos, setEditTodo }) {
  const handleDel = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handlecomplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleedit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleMoveUp = (todo) => {
    const currentIndex = todos.findIndex((item) => item.id === todo.id);
    if (currentIndex > 0) {
      const newTodos = [...todos];
      const [movedTodo] = newTodos.splice(currentIndex, 1);
      newTodos.splice(currentIndex - 1, 0, movedTodo);
      setTodos(newTodos);
    }
  };
  
  const handleMoveDown = (todo) => {
    const currentIndex = todos.findIndex((item) => item.id === todo.id);
    if (currentIndex < todos.length - 1) {
      const newTodos = [...todos];
      const [movedTodo] = newTodos.splice(currentIndex, 1);
      newTodos.splice(currentIndex + 1, 0, movedTodo);
      setTodos(newTodos);
    }
  };
  
  // const handlePriority = (todo) => {
  //   setTodos((prevTodos) => {
  //     // Toggle the priority by checking if it's already prioritized
  //     const updatedTodos = prevTodos.map((item) => {
  //       if (item.id === todo.id) {
  //         return { ...item, priority: !item.priority };
  //       }
  //       return item;
  //     });

  //     // Sort the todos by priority (highest priority first)
  //     updatedTodos.sort((a, b) => (b.priority ? 1 : -1));

  //     return updatedTodos;
  //   });
  // };

  

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handlecomplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleedit(todo)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDel(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>

            <button
  className="button-up task-button"
  onClick={() => handleMoveUp(todo)}
>
  <i className="fa fa-arrow-up"></i>
</button>
<button
  className="button-down task-button"
  onClick={() => handleMoveDown(todo)}
>
  <i className="fa fa-arrow-down"></i>
</button>

            
          </div>
        </li>
      ))}
    </div>
  );
}

export default TodosList;
