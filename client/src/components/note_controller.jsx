import React, { useState } from 'react';
import Note from './note';
import EditNote from './edit_note';

function NoteController(props) {
  const { note, id, index } = props;
  const [edition, setEdition] = useState(false);
  const editSwitch = () => {
    setEdition(true);
  };
  const noteSwitch = () => {
    setEdition(false);
  };
  if ((edition)) {
    return (
      <EditNote
        switchForm={noteSwitch}
        note={note}
        id={id}
        index={index + 1}
      />
    );
  }
  return (
    <Note
      switchForm={editSwitch}
      note={note}
      id={id}
      index={index + 1}
    />
  );
}

export default NoteController;
