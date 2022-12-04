import React from 'react';
import { INote } from '../types/interfaces';
import { useAppSelector } from '../types/redux_hooks';
import NoteController from './note_controller';

const NotesList: React.FC = function () {
  const notesList: Array<INote> = useAppSelector((state) => state.currentNotesList);
  return (
    <div className="notes-container">
      {notesList.map((el: INote, index: number) => (
        <NoteController
          note={el.note}
          id={el.id}
          index={index + 1}
          tags={el.tags}
        />
      ))}
    </div>
  );
};

export default NotesList;
