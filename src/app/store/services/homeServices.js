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
      query: () => `new_products`,
    }),
    getNews: build.query({
      query: () => `news`,
    }),
    getBlogs: build.query({
      query: () => `blogs`,
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
  }),
});

export const {
  useGetNewProductsQuery,
  useGetBlogsQuery,
  useGetNewsQuery,
  usePostContactMutation,
} = homeApi;
