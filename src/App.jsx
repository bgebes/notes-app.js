import React from 'react';
import './App.css';

import SearchInput from './components/SearchInput/SearchInput';
import TextArea from './components/TextArea/TextArea';
import NoteList from './components/NoteList/NoteList';

function App() {
  return (
    <div className="app border shadow p-4 w-50">
      <div className="h3 fw-bold text-center text-secondary">NotesApp</div>
      <div className="w-100 d-flex justify-content-center mb-4">
        <SearchInput />
      </div>
      <TextArea />
      <NoteList />
    </div>
  );
}

export default App;
