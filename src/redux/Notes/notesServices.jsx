export const notesServices = {
  addNote: (state) => {
    const lastTodo = state.items.at(-1);
    const lastID = lastTodo ? lastTodo.id : -1;

    state.items.push({
      id: lastID + 1,
      text: state.input,
      color: state.selectedColor,
    });
  },
  removeNote: (state, action) => {
    const { id } = action.payload;
    state.items = state.items.filter((item) => item.id !== id);
  },
  handleInput: (state, action) => {
    state.input = action.payload.value;
  },
  handleColor: (state, action) => {
    state.selectedColor = action.payload.value;
  },
  setFilter: (state, action) => {
    state.filter = action.payload.value;
  },
};
