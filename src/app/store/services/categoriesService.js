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
      query: (lang) => `categories?dil=${lang}_`,
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

const BASE_URL = "https://asortie.com/json/";

export async function fetchCategories(lang) {
  const response = await fetch(`${BASE_URL}/categories?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchProducts({ slug, lang }) {
  const response = await fetch(`${BASE_URL}/products?url=${slug}&dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}

export async function fetchProductDetail({ slug, lang }) {
  const response = await fetch(
    `${BASE_URL}/productdetail?id=${slug}&dil=${lang}_`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
