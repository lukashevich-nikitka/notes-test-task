/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import notesThunks from './thunks';

const {
  getNotesList, addNote, deleteNote, editNote,
} = notesThunks;

const initialState = {
  notesList: [],
};

const notesReducers = createReducer(initialState, {
  [getNotesList.fulfilled]: (state, action) => {
    state.notesList = action.payload;
  },
  [addNote.fulfilled]: (state, action) => {
    state.notesList = action.payload;
  },
  [deleteNote.fulfilled]: (state, action) => {
    state.notesList = action.payload;
  },
  [editNote.fulfilled]: (state, action) => {
    state.notesList = action.payload;
  },
});

export default notesReducers;
