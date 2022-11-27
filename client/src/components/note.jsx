/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Button } from '@mui/material';
import { DeleteForever, Edit } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import notesThunks from '../store/structure/thunks';
import '../styles/components/notes.scss';
import appActions from '../store/structure/actions';

function Note(props) {
  const {
    id, note, index, switchForm, tags,
  } = props;
  const triggerTags = useSelector((state) => state.trigerLightTags);
  const { filter } = appActions;
  const { deleteNote } = notesThunks;
  const dispatch = useDispatch();
  const removeNote = () => dispatch(deleteNote(id));
  const filterByTagName = (tag) => dispatch(filter(tag));
  const tagsContain = function () {
    return note.split(' ').every((el) => triggerTags.includes(el));
  };
  return (
    <div>
      <div className="note-wrapper">
        <div className="note">
          <span>{`${index}. `}</span>
          {(tagsContain) ? (note.split(' ').map((word) => (
            (triggerTags.includes(word)) ? <span className="light-word">{`${word}`}</span> : <span>{`${word}`}</span>
          ))) : <span>{`${note}`}</span>}
        </div>
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
          <span key={el.id} onClick={() => filterByTagName(el.tag)}>{el.tag}</span>
        ))}
      </div>
    </div>
  );
}

export default Note;
