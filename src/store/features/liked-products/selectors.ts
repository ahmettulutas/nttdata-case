import { RootState } from '@/store';

export const selectLikedProducts = (state: RootState) => state.likedProducts.likedProducts;
export const selectIsFilteredProducts = (state: RootState) => state.likedProducts.isFilterApplied;
