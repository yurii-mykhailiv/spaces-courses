import {  createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { usersInfo } from '../../MockData/userInfo';

export const loginUser = createAsyncThunk('user/logIn', async (payload) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return usersInfo.find(el => el.email === payload.email);
});

export const logoutUser = createAsyncThunk('user/logOut', () => {
  return null;
});

export const currentUser = createAsyncThunk('user/currentUser', async (_, { getState }) => {
  const { data } = getState().user.login; 
  const { email, password, ...userInfo } = data; 
  return userInfo;
});
const initialCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: {
      isLoading: false,
      data: null,
      error: null,
    },
    logout: {
      isLoading: false,
      data: null,
      error: null,
    },
    currentUser: {
      isLoading: false,
      data: initialCurrentUser,
      error: null,
    }

  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending.type, (state, action) => {
        state.login.isLoading = true;
      })
      .addCase(loginUser.fulfilled.type, (state, action) => {
        state.login.isLoading = false;
        state.login.data = action.payload;
      })
      .addCase(loginUser.rejected.type, (state, action) => {
        state.login.isLoading = false;
        state.login.error = action.payload;
      })
      .addCase(logoutUser.pending.type, (state, action) => {
        state.logout.isLoading = true;
      })
      .addCase(logoutUser.fulfilled.type, (state, action) => {
        state.logout.isLoading = false;
        state.login.data = action.payload;
      })
      .addCase(logoutUser.rejected.type, (state, action) => {
        state.logout.isLoading = false;
        state.logout.error = action.payload;
      })
      .addCase(currentUser.pending.type, (state, action) => {
        state.currentUser.isLoading = true;
      })
      .addCase(currentUser.fulfilled.type, (state, action) => {
        state.currentUser.isLoading = false;
        state.currentUser.data = action.payload;
        localStorage.setItem('currentUser', JSON.stringify(action.payload));
      })
      .addCase(currentUser.rejected.type, (state, action) => {
        state.currentUser.isLoading = false;
        state.currentUser.error = action.payload;
      });
  },
});

export default userSlice.reducer;