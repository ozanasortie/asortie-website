import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerVariant: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setHeaderVariant: (state, action) => {
      state.headerVariant = action.payload;
    },
  },
});

export const { setHeaderVariant } = uiSlice.actions;
export default uiSlice.reducer;
