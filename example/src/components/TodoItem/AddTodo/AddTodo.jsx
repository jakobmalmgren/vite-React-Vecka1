function AddTodo(props) {
  let newTodo = "";
  const { update } = props;

  function handleInput(event) {
    console.log("Input:", event.target.value);
    newTodo = event.target.value;
  }

  function handleClick() {
    console.log("Lägger till todo:", newTodo);
    update(newTodo);
  }

  return (
    <section>
      <input type="text" placeholder="My todo" onKeyUp={handleInput} />
      <button onClick={handleClick}>Lägg till</button>
    </section>
  );
}

export default AddTodo;
