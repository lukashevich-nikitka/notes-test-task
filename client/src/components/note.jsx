import React from 'react';
import { Button } from '@mui/material';
import { DeleteForever, Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import notesThunks from '../store/structure/thunks';
import '../styles/components/notes.scss';

function Note(props) {
  const {
    id, note, index, switchForm,
  } = props;
  const { deleteNote } = notesThunks;
  const dispatch = useDispatch();
  const removeNote = () => dispatch(deleteNote(id));
  return (
    <div className="note-wrapper" key={id}>
      <span>{`${index}. ${note}`}</span>
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
          onClick={switchForm}
        >
          <Edit />
        </Button>
      </div>
    </div>
  );
}

export default Note;
