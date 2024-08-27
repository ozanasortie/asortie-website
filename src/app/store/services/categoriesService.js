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
      query: (params) => `products?url=${params.slug}&dil=${params.lang}_`,
    }),
    getProductDetail: build.query({
      query: (params) => `productdetail?id=${params.slug}&dil=${params.lang}_`,
    }),
  }),
});

export const { setCategories } = categoriesSlice.actions;
export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetProductDetailQuery,
} = categoriesApi;
export default categoriesSlice.reducer;
