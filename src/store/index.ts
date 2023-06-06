import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import shopSlice from './slices/shops';

const store = configureStore({
  reducer: { auth: authSlice, shops: shopSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
