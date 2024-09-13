import { createSlice } from "@reduxjs/toolkit";
import { baseApi } from "../index";

const initialState = {
  contact: null,
  whatsappNumbers: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setContact: (state, action) => {
      state.contact = action.payload;
    },
    setWhatsappNumbers: (state, action) => {
      state.whatsappNumbers = action.payload;
    },
  },
});

const generalApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getContact: build.query({
      query: (lang) => `contact?dil=${lang}_`,
    }),
    getWhatsappNumbers: build.query({
      query: (lang) => `whatsap?dil=${lang}_`,
    }),
  }),
});

export const { setContact, setWhatsappNumbers } = generalSlice.actions;
export const { useGetContactQuery, useGetWhatsappNumbersQuery } = generalApi;
export default generalSlice.reducer;

const BASE_URL = "https://asortie.com/json/";

export async function fetchCorporate(lang) {
  const response = await fetch(`${BASE_URL}/institutional?dil=${lang}_`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
}
