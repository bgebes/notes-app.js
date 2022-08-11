import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/Notes/NotesSlice';
import './SearchInput.css';

function SearchInput() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search..."
      className="searchInput rounded-pill px-4 py-2 mt-2"
      onChange={(e) => dispatch(setFilter({ value: e.target.value }))}
    />
  );
}

export default SearchInput;
