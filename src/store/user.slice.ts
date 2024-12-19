import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchDescription } from '../inteface/search.interfase';
import { loadState, saveState } from './storage';
import { IUser } from '../context/type';

export const KEY_CARD_NAME = 'userData';

export interface IUsersState {
  users: IUser[];
}

const loadUserData = (): IUsersState => {
  return loadState(KEY_CARD_NAME) || { users: [] };
};

const initialState: IUsersState = loadUserData();

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IUser>) => {
      const newUser = action.payload;
      const updatedUsers = state.users.map((user) =>
        user.name === newUser.name
          ? { ...user, isLogined: true }
          : { ...user, isLogined: false },
      );

      if (!updatedUsers.some((user) => user.name === newUser.name)) {
        updatedUsers.push({ ...newUser, isLogined: true });
      }

      state.users = updatedUsers;
      saveState(state, KEY_CARD_NAME);
    },
    logoutUser: (state) => {
      state.users = state.users.map((user) => ({ ...user, isLogined: false }));
      saveState(state, KEY_CARD_NAME);
    },
    addToFavorites: (
      state,
      action: PayloadAction<{ userName: string; movie: ISearchDescription }>,
    ) => {
      const { userName, movie } = action.payload;
      const user = state.users.find((user) => user.name === userName);

      if (
        user &&
        !user.items.some((item) => item['#IMDB_ID'] === movie['#IMDB_ID'])
      ) {
        user.items.push(movie);
      }

      saveState(state, KEY_CARD_NAME);
    },
    removeFromFavorites: (
      state,
      action: PayloadAction<{ userName: string; imdbId: string }>,
    ) => {
      const { userName, imdbId } = action.payload;
      const user = state.users.find((user) => user.name === userName);

      if (user) {
        user.items = user.items.filter((item) => item['#IMDB_ID'] !== imdbId);
      }

      saveState(state, KEY_CARD_NAME);
    },
  },
});

export default userSlice.reducer;
export const { loginUser, logoutUser, addToFavorites, removeFromFavorites } =
  userSlice.actions;
