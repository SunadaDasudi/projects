import ToDoItem from "./ToDoItem"

export default function ToDoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <><h1 className="header">To-do List</h1>
            <ul className="list">
                {todos.length === 0 && <h2>No To-dos</h2>}
                {todos.map(todo => {
                    return <ToDoItem key={todo.id} id={todo.id} completed={todo.completed} title={todo.title}
                        toggleTodo={toggleTodo} deleteTodo={deleteTodo}
                    >
                    </ToDoItem>
                })}
            </ul>
        </>);
}