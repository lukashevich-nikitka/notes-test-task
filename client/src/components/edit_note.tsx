/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, InputAdornment, Button } from '@mui/material';
import { Notes, Send } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../types/redux_hooks';
import notesThunks from '../store/structure/thunks';
import '../styles/components/edit_note.scss';
import appActions from '../store/structure/actions';
import { INoteProps, ITag } from '../types/interfaces';

const EditNote: React.FC<INoteProps> = function (props) {
  const {
    switchForm, id, note, index,
  } = props;
  const { trigerLightTags } = appActions;
  const { editNote } = notesThunks;
  const tags: Array<ITag> = useAppSelector((state) => state.fullNoteList[index - 1]!.tags);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const triggerTags: Array<string> = [];
    tags.forEach((el) => triggerTags.push(el.tag.slice(1)));
    dispatch(trigerLightTags(triggerTags));
  }, []);
  useEffect(() => function triggerTagsCleaner() {
    dispatch(trigerLightTags([]));
  });
  const { register, handleSubmit } = useForm<{ note: string; }>();
  const onSubmit: SubmitHandler<{ note: string; }> = (data) => {
    dispatch(editNote({ ...data, id }));
    (switchForm) ? switchForm() : null;
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
                <Button type="submit" variant="contained" size="large"><Send /></Button>
              </InputAdornment>
            ),
          }}
          defaultValue={note}
          label="Edit your note and submit"
          fullWidth
          multiline
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
};

export default EditNote;
