import { configureStore } from '@reduxjs/toolkit';
import notesReducers from './structure/reducers';

const store = configureStore({
  reducer: notesReducers,
});

export default store;
