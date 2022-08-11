import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/Notes/NotesSlice';
import './AddButton.css';

function AddButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="addButton rounded-pill text-light w-100 px-5 py-2"
      onClick={() => dispatch(addNote())}
    >
      ADD
    </button>
  );
}

export default AddButton;
