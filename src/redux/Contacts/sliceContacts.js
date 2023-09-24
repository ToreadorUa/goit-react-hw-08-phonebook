import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  getContactsThunk,
  delContactThunk,
  editContactThunk,
} from './thunk';
import * as services from './services';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const {
  handleFulfilled,
  handleAddFulfilled,
  handleDelFulfilled,
  handlePending,
  handleRejected,
  thunkTypesArr,
  handleEditFulfilled,
} = services;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddFulfilled)
      .addCase(delContactThunk.fulfilled, handleDelFulfilled)
      .addCase(editContactThunk.fulfilled, handleEditFulfilled)
      .addMatcher(isAnyOf(...thunkTypesArr('pending')), handlePending)
      .addMatcher(isAnyOf(...thunkTypesArr('rejected')), handleRejected);
  },
});

export default contactsSlice.reducer;
