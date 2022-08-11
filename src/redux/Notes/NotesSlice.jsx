import { createSlice } from '@reduxjs/toolkit';
import { notesServices } from './notesServices';

export const NotesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: 1,
        text: 'Wash the dishes',
        color: '#f06292',
      },
      {
        id: 2,
        text: 'Go to the supermarket',
        color: '#ba68c8',
      },
      {
        id: 3,
        text: 'Drop your sibling to school',
        color: '#ffd54f',
      },
      {
        id: 4,
        text: 'Do your homeworks',
        color: '#4fc3f7',
      },
    ],
    input: '',
    selectedColor: '#aed581',
    filter: '',
  },
  reducers: notesServices,
});

export const { addNote, removeNote, handleInput, handleColor, setFilter } =
  NotesSlice.actions;
export default NotesSlice.reducer;
