import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Notes, Send } from '@mui/icons-material';
import notesThunks from '../store/structure/thunks';
import '../styles/components/edit_note.scss';

function EditNote(props) {
  const { switchForm, id, note } = props;
  const { editNote } = notesThunks;
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(editNote({ ...data, id }));
    switchForm();
  };
  return (
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
  );
}

export default EditNote;
