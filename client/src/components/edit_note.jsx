import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Notes, Send } from '@mui/icons-material';
import notesThunks from '../store/structure/thunks';
import '../styles/components/edit_note.scss';
import appActions from '../store/structure/actions';

function EditNote(props) {
  const {
    switchForm, id, note, index,
  } = props;
  const { trigerLightTags } = appActions;
  const { editNote } = notesThunks;
  const tags = useSelector((state) => state.fullNoteList[index - 1].tags);
  const dispatch = useDispatch();
  useEffect(() => {
    const triggerTags = [];
    tags.forEach((el) => triggerTags.push(el.tag.slice(1)));
    dispatch(trigerLightTags(triggerTags));
  }, []);
  useEffect(() => function triggerTagsCleaner() {
    dispatch(trigerLightTags([]));
  });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(editNote({ ...data, id }));
    switchForm();
  };
  return (
    <div>
      <form className="edit-note-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('note', { required: true })}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Notes />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button type="submit" variant="filled" size="large"><Send /></Button>
              </InputAdornment>
            ),
          }}
          defaultValue={note}
          label="Edit your note and submit"
          fullWidth
          multiline="true"
          variant="outlined"
        />
      </form>
      <div className="tags-wrapper">
        {tags.map((el) => (
          <span key={el.id}>{el.tag}</span>
        ))}
      </div>
    </div>
  );
}

export default EditNote;
