import { createSlice } from '@reduxjs/toolkit';
import { getUserFromLocal } from '../utils/localStorage';

const initialState = {
  user: null,
  // token: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    // setToken(state, action) {
    //   state.token = action.payload;
    // }
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
