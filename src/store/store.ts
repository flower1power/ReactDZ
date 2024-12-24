import { configureStore } from '@reduxjs/toolkit';
import userSlice, { IUsersState, KEY_CARD_NAME } from './user.slice';
import { saveState } from './storage';

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

store.subscribe(() => {
  const state = store.getState().users;
  saveState<IUsersState>(state, KEY_CARD_NAME);
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispathe = typeof store.dispatch;
