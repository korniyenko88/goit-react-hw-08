import { createSlice } from '@reduxjs/toolkit';
import {
  apiRegisterUser,
  apiLogInUser,
  apiLogOutUser,
  apiRefreshUser,
} from './operations'; 

const INITIAL_STATE = {
  userData: null,
  isLoading: false,
  error: null,
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,

  extraReducers: builder => {
    builder
      .addCase(apiRegisterUser.pending, handlePending)
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiRegisterUser.rejected, handleRejected)
      .addCase(apiLogInUser.pending, handlePending)
      .addCase(apiLogInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(apiLogInUser.rejected, handleRejected)
      .addCase(apiLogOutUser.pending, handlePending)
      .addCase(apiLogOutUser.fulfilled, state => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(apiLogOutUser.rejected, handleRejected)
      .addCase(apiRefreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true; 
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false; 
      })
      .addCase(apiRefreshUser.rejected, handleRejected);
  },
});

export default authSlice.reducer;
export const authReducer = authSlice.reducer;
