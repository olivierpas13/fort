import { createSlice } from '@reduxjs/toolkit';
// import { getUserFromLocal } from '../utils/localStorage';
// import { AppState } from './store';
// import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  _id: '',
  name: '',
  projects: [],
  users: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.organization = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    }
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
