import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../index";

const initialState = {};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
  },
});

const categoriesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => `categories`,
    }),
    getProducts: build.query({
      query: (url) => `products?url=${url}`,
    }),
  }),
});

export const { setCategories } = categoriesSlice.actions;
export const { useGetCategoriesQuery, useGetProductsQuery } = categoriesApi;
export default categoriesSlice.reducer;
