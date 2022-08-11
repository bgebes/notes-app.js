import React from 'react';
import { useDispatch } from 'react-redux';
import { removeNote } from '../../redux/Notes/NotesSlice';
import './Note.css';

function Note({ id, text, color }) {
  const dispatch = useDispatch();

  return (
    <div
      className="note shadow rounded col-5 my-2 mx-auto text-start"
      style={{ backgroundColor: color }}
    >
      <div className="border-bottom d-flex justify-content-between align-items-center">
        <div className="m-2">Note {id}</div>
        <div
          className="m-2"
          onClick={() => dispatch(removeNote({ id }))}
          style={{ cursor: 'pointer' }}
        >
          X
        </div>
      </div>
      <div className="m-2">{text}</div>
    </div>
  );
}

export default Note;
