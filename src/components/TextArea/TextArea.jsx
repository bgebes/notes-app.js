import React from 'react';
import './TextArea.css';
import { useDispatch } from 'react-redux';
import { handleInput } from '../../redux/Notes/NotesSlice';

import AddButton from '../AddButton/AddButton';
import ColorCircle from '../ColorCircle/ColorCircle';

function TextArea() {
  const dispatch = useDispatch();

  return (
    <div className="textArea shadow border px-2 py-4">
      <div className="mx-2">
        <textarea
          placeholder="Enter your note here..."
          className="w-100"
          onChange={(e) => dispatch(handleInput({ value: e.target.value }))}
        />
      </div>
      <div className="d-flex align-items-center mt-2 mx-2">
        <div className="me-auto d-flex">
          <ColorCircle color="#f06292" />
          <ColorCircle color="#ba68c8" />
          <ColorCircle color="#ffd54f" />
          <ColorCircle color="#4fc3f7" />
          <ColorCircle color="#aed581" />
        </div>
        <div className="ms-auto">
          <AddButton />
        </div>
      </div>
    </div>
  );
}

export default TextArea;
