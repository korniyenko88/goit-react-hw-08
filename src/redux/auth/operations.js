import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authInstance = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

export const setToken = token => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = '';
};

export const apiRegisterUser = createAsyncThunk(
  'users/registerUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/users/signup', formData);
      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogInUser = createAsyncThunk(
  'auth/logInUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post('/users/login', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || 'Login failed');
    }
  }
);

export const apiLogOutUser = createAsyncThunk(
  'auth/logOutUser',
  async (_, thunkApi) => {
    try {
      const { data } = await authInstance.post('/users/logout');

      clearToken();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/RefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistToken);
      const { data } = await authInstance.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);
