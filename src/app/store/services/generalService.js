import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../index";

const initialState = {};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setContact: (state, action) => {
      return action.payload;
    },
  },
});

const generalApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getContact: build.query({
      query: (lang) => `contact?dil=${lang}_`,
    }),
  }),
});

export const { setContact } = generalSlice.actions;
export const { useGetContactQuery } = generalApi;
export default generalSlice.reducer;
