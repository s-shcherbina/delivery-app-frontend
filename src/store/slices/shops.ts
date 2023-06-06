import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IShop {
  id: number;
  name: string;
  address: string;
}

interface IShopState {
  shopList: IShop[];
}

const initialState: IShopState = {
  shopList: [],
};

export const shopSlice = createSlice({
  name: 'shops',
  initialState,
  reducers: {
    addShop(state, action: PayloadAction<IShop[]>) {
      state.shopList = action.payload;
    },
  },
});

export const { addShop } = shopSlice.actions;
export default shopSlice.reducer;
