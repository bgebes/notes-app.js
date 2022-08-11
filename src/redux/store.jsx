import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from './Notes/NotesSlice';

export const store = configureStore({
  reducer: {
    notes: NotesReducer,
  },
});
