/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import notesThunks from './thunks';
import filter from './actions';

const {
  getNotesList, addNote, deleteNote, editNote,
} = notesThunks;

const initialState = {
  currentNotesList: [],
  fullNoteList: [],
};

const notesReducers = createReducer(initialState, {
  [getNotesList.fulfilled]: (state, action) => {
    state.currentNotesList = action.payload;
    state.fullNoteList = action.payload;
  },
  [addNote.fulfilled]: (state, action) => {
    state.fullNoteList = action.payload;
    state.currentNotesList = state.fullNoteList;
  },
  [deleteNote.fulfilled]: (state, action) => {
    state.fullNoteList = action.payload;
    state.currentNotesList = state.fullNoteList;
  },
  [editNote.fulfilled]: (state, action) => {
    state.fullNoteList = action.payload;
    state.currentNotesList = state.fullNoteList;
  },
  [filter]: (state, action) => {
    const filterCB = function (el) {
      if ((el.tags).some((elem) => elem.tag === action.payload)) {
        return true;
      }
      return false;
    };
    const notesList = state.fullNoteList.filter(filterCB);
    state.currentNotesList = notesList;
  },
});

export default notesReducers;
