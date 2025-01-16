import "./App.css";

import TodoItem from "./components/TodoItem/TodoItem";
import AddTodo from "./components/AddTodo/AddTodo";

function App() {
  const heading = "Todo App";
  const todos = [
    {
      id: 1,
      text: "Köp kaffe",
      done: false,
    },
    {
      id: 2,
      text: "Köp kaka",
      done: true,
    },
    {
      id: 3,
      text: "Brygg kaffe",
      done: false,
    },
    {
      id: 4,
      text: "Drick kaffe",
      done: false,
    },
  ];

  // ------------------------------
  function updateTodos(newTodo) {
    console.log("I funktionen updateTodo: ", newTodo);

    const todo = {
      text: newTodo,
      done: false,
      id: todos.length + 1,
    };

    todos.push(todo);

    console.log("Todos array: ", todos);
  }
  // ------------------------------

  const todoComponents = todos.map((todo) => {
    return <TodoItem text={todo.text} done={todo.done} key={todo.id} />;
  });

  return (
    <main className="App">
      <h1>{heading}</h1> {/** Allt inom {} tolkas som vanilla JS */}
      <ul>{todoComponents}</ul>
      {/* // ------------------------------ */}
      <AddTodo update={updateTodos} />
      {/* // ------------------------------ */}
    </main>
  );
}

export default App;
