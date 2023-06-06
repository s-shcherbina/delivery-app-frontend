import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthState, IUser } from '../../common/types';

const initialState: IAuthState = {
  user: {} as IUser,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.isLogged = true;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
