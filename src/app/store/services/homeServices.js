import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../index";

const initialState = {};

const homeSlices = createSlice({
  name: "home",
  initialState,
  reducers: {
    setModal: (state, action) => {
      return action.payload;
    },
  },
});

const homeApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNewProducts: build.query({
      query: (lang) => `new_products?dil=${lang}_`,
    }),
    getNews: build.query({
      query: (lang) => `news?dil=${lang}_`,
    }),
    getBlogs: build.query({
      query: (lang) => `blogs?dil=${lang}_`,
    }),
    postContact: build.mutation({
      query: ({ name, email, tel, message, ulke_kodu, dil }) => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("tel", tel);
        formData.append("message", message);
        formData.append("ulke_kodu", "tr");
        formData.append("dil", "_tr");

        return {
          url: `contact_information_send`,
          method: "POST",
          body: formData,
        };
      },
    }),
    catalogueRequest: build.mutation({
      query: ({ name, email, tel }) => {
        const formData = new FormData();
        formData.append("ad_soyad", name);
        formData.append("email", email);
        formData.append("telefon", tel);
        formData.append("dil", "_tr");

        return {
          url: `catalog_form`,
          method: "POST",
          body: formData,
        };
      },
    }),
  }),
});

export const {
  useGetNewProductsQuery,
  useGetBlogsQuery,
  useGetNewsQuery,
  usePostContactMutation,
  useCatalogueRequestMutation,
} = homeApi;
