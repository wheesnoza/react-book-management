import { User } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './states/user';

export interface AppStore {
  user: User;
}

export const store = configureStore<AppStore>({
  reducer: {
    user: userSliceReducer,
  },
});

export default store;
