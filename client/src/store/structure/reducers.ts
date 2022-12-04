/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import notesThunks from './thunks';
import appActions from './actions';
import { INote } from '../../types/interfaces';

const {
  getNotesList, addNote, deleteNote, editNote,
} = notesThunks;

const { filter, trigerLightTags } = appActions;

const initialState: {
  currentNotesList: Array<INote>;
  fullNoteList: Array<INote>;
  trigerLightTags: Array<string>;
} = {
  currentNotesList: [],
  fullNoteList: [],
  trigerLightTags: [],
};

const notesReducers = createReducer(initialState, {
  [getNotesList.fulfilled.type]: (
    state,
    action: PayloadAction<Array<INote>>,
  ) => {
    state.currentNotesList = action.payload;
    state.fullNoteList = action.payload;
  },
  [addNote.fulfilled.type]: (state, action: PayloadAction<Array<INote>>) => {
    state.fullNoteList = action.payload;
    state.currentNotesList = state.fullNoteList;
  },
  [deleteNote.fulfilled.type]: (state, action: PayloadAction<Array<INote>>) => {
    state.fullNoteList = action.payload;
    state.currentNotesList = state.fullNoteList;
  },
  [editNote.fulfilled.type]: (state, action: PayloadAction<Array<INote>>) => {
    state.fullNoteList = action.payload;
    state.currentNotesList = state.fullNoteList;
  },
  [filter.type]: (state, action: PayloadAction<string>) => {
    const filterCB: (el: INote) => boolean = function (el) {
      if (el.tags.some((elem) => elem.tag === action.payload)) {
        return true;
      }
      return false;
    };
    const notesList: Array<INote> = state.fullNoteList.filter(filterCB);
    state.currentNotesList = notesList;
  },
  [trigerLightTags.type]: (state, action: PayloadAction<Array<string>>) => {
    state.trigerLightTags = action.payload;
  },
});

export default notesReducers;
