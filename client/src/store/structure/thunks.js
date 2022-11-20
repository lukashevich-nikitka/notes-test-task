import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getNotesList = createAsyncThunk('list', async () => {
  const response = await axios.get('');
  return response.data;
});

const addNote = createAsyncThunk('add', async (data) => {
  const response = await axios.post('', data);
  return response.data;
});

const deleteNote = createAsyncThunk('delete', async (id) => {
  const response = await axios.delete('', id);
  return response.data;
});

const editNote = createAsyncThunk('edit', async (data) => {
  const response = await axios.delete('', data);
  return response.data;
});

const notesThunks = {
  getNotesList,
  addNote,
  deleteNote,
  editNote,
};

export default notesThunks;
