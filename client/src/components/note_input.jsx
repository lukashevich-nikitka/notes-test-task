import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Notes, Send } from '@mui/icons-material';
import notesThunks from '../store/structure/thunks';
import '../styles/components/note_input.scss';

function NoteInput() {
  const { addNote } = notesThunks;
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(addNote(data));
  return (
    <form className="input-wrapper" onSubmit={handleSubmit(onSubmit)}>
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
              <Button type="submit" variant="contained" size="large"><Send /></Button>
            </InputAdornment>
          ),
        }}
        label="Write your note here"
        fullWidth
        multiline="true"
        variant="outlined"
      />
    </form>
  );
}

export default NoteInput;
