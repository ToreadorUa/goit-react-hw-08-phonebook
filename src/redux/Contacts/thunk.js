import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('/contacts');
      return resp.data;
      console.log(resp);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contact/add',
  async (contact, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/contacts', contact);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const delContactThunk = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/contacts/${id}`);
      return resp.data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contact/edit',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const editedContact = { name, number };
      const { data } = await axios.patch(`/contacts/${id}`, editedContact);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
