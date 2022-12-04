import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getNotesList = createAsyncThunk('list', async () => {
  const response = await axios.get('http://localhost:5000/api/notes/list');
  return response.data;
});

const addNote = createAsyncThunk('add', async (data: { note: string }) => {
  const response = await axios.post('http://localhost:5000/api/notes/new', data);
  return response.data;
});

const deleteNote = createAsyncThunk('delete', async (id: string) => {
  const response = await axios.delete(`http://localhost:5000/api/notes/delete/${id}`);
  return response.data;
});

const editNote = createAsyncThunk('edit', async (data: { id: string; note: string }) => {
  const response = await axios.put(`http://localhost:5000/api/notes/edit/${data.id}`, { note: data.note });
  return response.data;
});

const notesThunks = {
  getNotesList,
  addNote,
  deleteNote,
  editNote,
};

export default notesThunks;
