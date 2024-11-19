import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authInstance } from '../auth/operations';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`/contacts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`/contacts`, contactData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await authInstance.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);





export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    console.log(`Attempting to delete contact with ID: ${contactId}`);
    try {
      const { data } = await authInstance.delete(`/contacts/${contactId}`);
      console.log('Delete response:', data);
       return contactId;
    } catch (error) {
      const errorMsg =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;
      console.error('Error deleting contact:', errorMsg);
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

