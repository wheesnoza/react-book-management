import { createSlice } from '@reduxjs/toolkit';
import { Role, User } from '@/models';
import {
  clearLocalStorage,
  getOrDefaultLocalStorage,
  persistLocalStorage,
} from '@/utilities';

export const DefaultUserState: User = {
  id: 0,
  name: '',
  email: '',
  role: Role.UNKNOWN,
};

const USER_KEY = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: getOrDefaultLocalStorage<User>(USER_KEY, DefaultUserState),
  reducers: {
    createUser: (_state, action) => {
      persistLocalStorage(USER_KEY, action.payload);
      return action.payload;
    },
    modifyUser: (state, action) => {
      const modified = { ...state, ...action.payload };
      persistLocalStorage<User>(USER_KEY, modified);
      return modified;
    },
    resetUser: () => {
      clearLocalStorage(USER_KEY);
      return DefaultUserState;
    },
  },
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
