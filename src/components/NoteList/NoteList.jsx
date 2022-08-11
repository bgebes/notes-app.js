import React from 'react';
import { useSelector } from 'react-redux';
import Note from '../Note/Note';
import './NoteList.css';

function NoteList() {
  const notes = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.notes.filter);

  return (
    <div className="noteList mt-3 row mx-0">
      {notes
        .filter((note) =>
          note.text.toLowerCase().includes(filter.toLowerCase())
        )
        .map((note) => {
          return <Note key={note.id} {...note} />;
        })}
    </div>
  );
}

export default NoteList;
