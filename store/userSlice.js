import { createSlice } from '@reduxjs/toolkit';
// import { AppState } from './store';
// import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  authState: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
