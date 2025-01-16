function AddTodo(props) {
  const { updateTodos } = props;

  let text = "";

  function handleInputOnChange(event) {
    text = event.target.value;
  }

  function handleBtnClick() {
    updateTodos(text);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Vad ska göra?"
        onChange={handleInputOnChange}
      />
      <button onClick={handleBtnClick}>Klicka </button>
    </div>
  );
}

export default AddTodo;
