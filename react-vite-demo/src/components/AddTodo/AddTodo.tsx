function AddTodo(props) {
  const { updateTodos } = props;

  function handleOnChange(event) {
    console.log("Input changed", event.target.value);

    const text = event.target.value;
  }

  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Vad ska göra?"
        onChange={handleOnChange}
      />
      <button onClick={handleClick}>Klicka </button>
    </div>
  );
}

export default AddTodo;
