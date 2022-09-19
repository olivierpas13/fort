import {
  combineReducers,
  configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import user from './userSlice';

const combinedReducer = combineReducers({
  user
});


const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      user: {
        user: state.user
      }
      // counter: {
      //   count: state.counter.count + action.payload.counter.count,
      // },
      // users: {
      //   users: [...action.payload.users.users, ...state.users.users]
      // }
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);