import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { apiEndpoints } from "./endpoints";
import { ProductList } from "./types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiEndpoints.base }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductList, void>({
      query: () => apiEndpoints.products,
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
