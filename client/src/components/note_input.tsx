import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Notes, Send } from '@mui/icons-material';
import { useAppDispatch } from '../types/redux_hooks';
import notesThunks from '../store/structure/thunks';
import '../styles/components/note_input.scss';

const NoteInput: React.FC = function () {
  const { addNote } = notesThunks;
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<{ note: string; }>();
  const onSubmit: SubmitHandler<{ note: string; }> = (data) => dispatch(addNote(data));
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
        multiline
        variant="outlined"
      />
    </form>
  );
};

export default NoteInput;
