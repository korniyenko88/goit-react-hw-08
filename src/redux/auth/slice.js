import { createSlice } from '@reduxjs/toolkit';

const INITTIAL_STATE = {
  userData: null,
  isLoading: false,
  error: null,

  token: null,
  isRefresing: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITTIAL_STATE,
  redusers: {},
});

export const authReducer = authSlice.reducer;