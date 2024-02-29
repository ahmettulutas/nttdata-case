import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const likedProducts: { isFilterApplied: boolean; likedProducts: Record<string, boolean> } = {
  isFilterApplied: false,
  likedProducts: {},
};

const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState: likedProducts,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const productId = String(action.payload);
      if (state.likedProducts[productId]) {
        state.likedProducts[productId] = false;
      } else {
        state.likedProducts[productId] = true;
      }
    },
    toggleFilter(state) {
      state.isFilterApplied = !state.isFilterApplied;
    },
  },
});

export const { toggleLike, toggleFilter } = likedProductsSlice.actions;
export default likedProductsSlice.reducer;
