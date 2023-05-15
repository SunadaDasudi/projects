import { useState } from "react";
import "./styles.css"
import NewToDoForm from "./NewToDoForm"
import ToDoList from "./ToDoList"

export default function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(newItem) {

    setTodos(currentTodos => {
      return [...currentTodos, { id: 1, title: newItem, completed: false }];
    });
  }



  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id)
          return { ...todo, completed }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    })
  }

  return (
    <>
      <NewToDoForm onSubmit={addTodo}></NewToDoForm>
      <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}>
      </ToDoList>
    </>
  );
}