import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoItem from "./components/TodoItem/TodoItem";

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

  function updateTodos(newTodo) {
    console.log("newTodo: ", newTodo);

    // TODO Skapa ett object med id, text och done

    // TODO Pusha in objectet in i todos
  }

  const todoComponents = todos.map((todo) => {
    return <TodoItem text={todo.text} done={todo.done} key={todo.id} />;
  });

  return (
    <main className="App">
      <h1>{heading}</h1> {/** Allt inom {} tolkas som vanilla JS */}
      <ul>{todoComponents}</ul>
      <AddTodo updateTodos={updateTodos} />
    </main>
  );
}

export default App;
