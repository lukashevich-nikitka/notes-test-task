import React from 'react';
import { useSelector } from 'react-redux';
import NoteController from './note_controller';

function NotesList() {
  const notesList = useSelector((state) => state.currentNotesList);
  return (
    <div className="notes-container">
      {notesList.map((el, index) => (
        <NoteController
          note={el.note}
          id={el.id}
          index={index + 1}
          tags={el.tags}
        />
      ))}
    </div>
  );
}

export default NotesList;
