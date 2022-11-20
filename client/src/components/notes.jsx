import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { DeleteForever, Edit } from '@mui/icons-material';
import notesThunks from '../store/structure/thunks';
import '../styles/components/notes.scss';

function Notes() {
  const { deleteNote, editNote } = notesThunks;
  const notesList = useSelector((state) => state.notesList);
  const dispatch = useDispatch();
  const removeNote = (id) => dispatch(deleteNote(id));
  const redactNote = (note) => dispatch(editNote(note));
  return (
    <div className="notes-container">
      {[...notesList].map((el, index) => (
        <div className="note-wrapper" key={el.id}>
          <span>{`${index + 1}. ${el.note}`}</span>
          <div className="input-buttons">
            <Button
              type="submit"
              variant="contained"
              size="small"
              onClick={removeNote}
            >
              <DeleteForever />
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="small"
              onClick={redactNote}
            >
              <Edit />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
