import React from 'react';
import { Button } from '@mui/material';
import { DeleteForever, Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import notesThunks from '../store/structure/thunks';
import '../styles/components/notes.scss';

function Note(props) {
  const {
    id, note, index, switchForm, tags,
  } = props;
  const { deleteNote } = notesThunks;
  const dispatch = useDispatch();
  const removeNote = () => dispatch(deleteNote(id));
  return (
    <div>
      <div className="note-wrapper">
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
      <div className="tags-wrapper">
        {tags.map((el) => (
          <span key={el.id}>{el.tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Note;
