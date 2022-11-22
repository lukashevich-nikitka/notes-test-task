import React from 'react';
import { useSelector } from 'react-redux';
import Note from './note';

function NotesList() {
  const notesList = useSelector((state) => state.notesList);
  return (
    <div className="notes-container">
      {[...notesList].map((el, index) => (
        <Note
          note={el.note}
          id={el.id}
          index={index + 1}
        />
      ))}
    </div>
  );
}

export default NotesList;
