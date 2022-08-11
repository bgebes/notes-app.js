import React from 'react';
import './ColorCircle.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleColor } from '../../redux/Notes/NotesSlice';

function ColorCircle({ color }) {
  const selectedColor = useSelector((state) => state.notes.selectedColor);
  const dispatch = useDispatch();

  return (
    <div
      className={`rounded-pill me-1 ${
        selectedColor === color && 'selectedColor'
      }`}
      style={{
        backgroundColor: color,
        height: '32px',
        width: '32px',
      }}
      onClick={() => dispatch(handleColor({ value: color }))}
    />
  );
}

export default ColorCircle;
